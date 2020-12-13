import React from 'react';
import styled, { css } from 'styled-components';
const TodoTemplate = ({ children }) => {
  const Container = styled.div`
    width: 500px;
    /* height: 500px;   */
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
  `;
  const Title = styled.div`
    height: 4rem;
    font-size: 1.5rem;
    background: #22b8cf;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Content = styled.div`
    background: white;
  `;

  return (
    <Container class="TodoTemplate">
      <Title className="app-title">일정관리</Title>
      <Content className="content">{children}</Content>
    </Container>
  );
};

export default TodoTemplate;
