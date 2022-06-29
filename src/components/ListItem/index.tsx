// types
import { Task } from '../../types/Task';

import * as C from './styles';

interface ListItemProps {
  item: Task
}

export function ListItem({ item }: ListItemProps) {
  return (
    <C.Container>
      {item.name}
    </C.Container>
  );
}
