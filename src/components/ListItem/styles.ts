import styled from 'styled-components'

interface ContainerProps {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  input {
    width: 25px;
    height: 25px;
  }

  label {
    color: #ccc;
    text-decoration: ${done ? 'line-through': 'initial'};
  }
`));
