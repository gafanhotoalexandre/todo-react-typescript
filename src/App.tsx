import { useState } from 'react';

// components
import { ListItem } from './components/ListItem';

// types
import { Task } from './types/Task';

// styles
import * as C from './App.styles';

export default function App() {
  const [todoList, setTodoList] = useState<Task[]>([
    { id: 1, name: 'Comprar pão na padaria', done: false },
    { id: 2, name: 'Comprar bolo na padaria', done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas com
          <span>TypeScript</span>
        </C.Header>

        {/* Adicionar nova tarefa */}

        {/* Lista de tarefas */}
        {todoList.map((item, index) => (
          <ListItem
            key={item.id}
            item={item}
          ></ListItem>
        ))}

      </C.Area>
    </C.Container>
  );
}
