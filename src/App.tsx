import { useState } from 'react';

// components
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

// types
import { Task } from './types/Task';

// styles
import * as C from './App.styles';

export default function App() {
  const [todoList, setTodoList] = useState<Task[]>([
    { id: 1, name: 'Comprar pão na padaria', done: false },
    { id: 2, name: 'Comprar bolo na padaria', done: true },
  ]);

  function handleAddTask(taskName: string) {
    let newList = [...todoList];
    newList.push({
      id: todoList.length + 1,
      name: taskName,
      done: false
    });

    setTodoList(newList);
  }

  function handleTaskChange(id: number, done: boolean) {
    let newList = [...todoList];
    for (let i in newList) {
      if (newList[i].id === id) newList[i].done = done;
    }

    setTodoList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas com
          <span>TypeScript</span>
        </C.Header>

        {/* Adicionar nova tarefa */}
        <AddArea
          onEnter={handleAddTask}
        />

        {/* Lista de tarefas */}
        {todoList.map((item, index) => (
          <ListItem
            key={item.id}
            item={item}
            onTaskChange={handleTaskChange}
          ></ListItem>
        ))}

      </C.Area>
    </C.Container>
  );
}
