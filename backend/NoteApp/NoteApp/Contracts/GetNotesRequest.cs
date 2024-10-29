namespace NoteApp.Contracts;

public record GetNotesRequest(string? Search, string? SortItem, string? SortOrder);