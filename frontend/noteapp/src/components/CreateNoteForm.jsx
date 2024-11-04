import { Button, Input } from 'antd';
import { useState } from 'react';

export default function CreateNoteForm({ onCreate }) {
  const [note, setNote] = useState({ title: '', description: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(note);
    setNote({ title: '', description: '' });
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
      <h3 className="font-bold text-xl">Cтворення нотатки</h3>
      <Input
        placeholder="Назва"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <Input.TextArea
        placeholder="Текст нотатки"
        value={note.description}
        onChange={(e) => setNote({ ...note, description: e.target.value })}
      />
      <Button type="primary" htmlType="submit">
        Додати
      </Button>
    </form>
  );
}