import './App.css';
import CreateNoteForm from './components/CreateNoteForm';
import Note from './components/Note';
import Filters from './components/Filters';
import { useEffect, useState } from 'react';
import { fetchNotes, createNote, deleteNote } from './services/note';

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: 'date',
    sortOrder: 'desc'
  });

  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes);
    }

    fetchData();
  }, [filter]);

  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }

  const onDelete = async (id) => {
    await deleteNote(id);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter}/>
      </div>
        <ul className="flex flex-col gap-5 flex-1/2">
          {notes.map(note => (
            <li key={note.id}>
              <Note id={note.id} title={note.title} description={note.description} date={note.createdAt} onDelete={onDelete} />
            </li>
          ))}
        </ul>
    </section>
  );
}

export default App;