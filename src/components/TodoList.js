import React from 'react';
import TodoListItem from './TodoListItem';
import styled, { css } from 'styled-components';

const TodoList = (props) => {
  const Container = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
  `;
  const { list } = props;
  return (
    <Container>
      {list.map((value, index) => (
        <TodoListItem key={index} value={value}></TodoListItem>
      ))}
    </Container>
  );
};

export default TodoList;
