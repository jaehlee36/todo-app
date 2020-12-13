import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import styled, { css } from 'styled-components';

const TodoListItem = (props) => {
  const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    .checkbox {
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      svg {
        font-size: 1.5rem;
      }
      .text {
        margin-left: 0.5rem;
        flex: 1;
      }
      // TODO: check시 변할 스타일 추가
    }

    .remove {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: #ff6b6b;
      cursor: pointer;
      :hover {
        color: #ff8787;
      }
    }
    //TODO: 엘리먼트 사이사이에 테투리 넣기
  `;

  return (
    <>
      <Container>
        <div className="checkbox">
          <MdCheckBoxOutlineBlank />
          <div className="text">{props.value}</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </Container>
    </>
  );
};

export default TodoListItem;
