import { Button, Input, Textarea}  from "@chakra-ui/react";
import './App.css'

function App() {
  return( 
    <section>
      <div>
        <form>
          <h3>Стоверння нотатки</h3>
          <Input placeholder="Назва нотатки" />
          <Textarea placeholder="Опис" />
          <Button>Додати нотатку</Button>
        </form>
      </div>
    </section>
  );
}

export default App
