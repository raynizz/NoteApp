import { useState } from 'react';
import './App.css';
import { Button, Card, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import CreateNoteForm from './components/CrateNoteForm';

function App() {
  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm />
        <ul className="flex flex-col gap-5 flex-1">
          <li>
            <Card hoverable="true" title="Назва нотатки" extra={<Button type="text">Видалити</Button>}>
              <Card.Meta description="Текст нотатки" />
            </Card>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;