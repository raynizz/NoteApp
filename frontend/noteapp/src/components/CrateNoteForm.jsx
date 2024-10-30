import { Button, Input } from 'antd';
import { useState } from 'react';

export default function CreateNoteForm() {
  return (
    <form className="w-full flex flex-col gap-3">
      <h3 className="font-bold text-xl">Cтворення нотатки</h3>
      <input placeholder="Назва" />
      <Input.TextArea placeholder="Текст нотатки" />
      <Button type="primary">Додати</Button>
    </form>
  );
}