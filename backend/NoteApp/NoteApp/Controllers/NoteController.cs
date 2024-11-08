﻿using System.Linq.Expressions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteApp.Contracts;
using NoteApp.DataAccess;
using NoteApp.Models;

namespace NoteApp.Controllers;

[ApiController]
[Route("[controller]")]
public class NoteController : ControllerBase
{
    private readonly NotesDbContext _dbContext;

    public NoteController(NotesDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateNoteRequest request, CancellationToken ct)
    {
        var note = new Note(request.Title, request.Description);

        await _dbContext.Notes.AddAsync(note, ct);
        await _dbContext.SaveChangesAsync(ct);

        return Ok();
    }
    
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery]GetNotesRequest request, CancellationToken ct)
    {
        var notesQuery = _dbContext.Notes.Where(n => string.IsNullOrWhiteSpace(request.Search) ||
                                                     n.Title.ToLower().Contains(request.Search.ToLower()));

        Expression<Func<Note, object>> selectorKey = request.SortItem?.ToLower() switch
        {
            "date" => note => note.CreatedAt,
            "title" => note => note.Title,
            _ => note => note.Id
        };

        notesQuery = request.SortOrder == "desc"
            ? notesQuery.OrderByDescending(selectorKey)
            : notesQuery.OrderBy(selectorKey);

        var noteDtos = await notesQuery.Select(n => new NoteDto(n.Id, n.Title, n.Description, n.CreatedAt))
            .ToListAsync(cancellationToken: ct);

        return Ok(new GetNotesResponse(noteDtos));
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct)
    {
        var noteToDelete = await _dbContext.Notes.FindAsync(new object[] { id }, ct);
        if (noteToDelete == null)
        {
            return NotFound();
        }

        _dbContext.Notes.Remove(noteToDelete);
        await _dbContext.SaveChangesAsync(ct);

        return Ok();
    }
}