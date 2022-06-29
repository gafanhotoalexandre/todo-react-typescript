import { useState } from 'react';

// types
import { Task } from '../../types/Task';

import * as C from './styles';

interface ListItemProps {
  item: Task
}

export function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}
