import { KeyboardEvent, useState } from 'react';

import * as C from './styles';

interface AddAreaProps {
  onEnter: (taskName: string) => void;
}

export function AddArea({ onEnter }: AddAreaProps) {
  const [inputText, setInputText] = useState('');

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === 'Enter' && inputText.trim() !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>

      <input
        type="text"
        placeholder="Adicione uma tarefa..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}
