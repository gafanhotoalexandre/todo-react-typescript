import { useState } from 'react';

// types
import { Task } from '../../types/Task';

import * as C from './styles';

interface ListItemProps {
  item: Task,
  onTaskChange: (id: number, done: boolean) => void;
}

export function ListItem({ item, onTaskChange }: ListItemProps) {
  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onTaskChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}
