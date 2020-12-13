import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

  const Form = styled.form`
    display: flex;
    background: #495057;
  `;
  const Input = styled.input`
    background: none;
    border: none;
    flex: 1;
    color: white;
    line-height: 1.5;
    font-size: 1.125rem;
    padding: 0.5rem;
    ::placeholder {
      color: #dee2e6;
    }
  `;
  const Button = styled.button`
    background: #868e98;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s background ease-in;
    :hover {
      background: #adb5bd;
    }
  `;
const TodoInsert = (props) => {
  const [_value, setValue] = useState('');
  const { list, setList } = props;

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const handleClick = (e) => {
    const newList = list.concat(_value);
    setList(newList);
    setValue('');
    e.preventDefault();
  };
  return (
    <>
      <Form>
        <Input
          key="key"
          placeholder="할 일을 입력하세요"
          value={_value}
          onChange={handleChange}
        ></Input>
        <Button type="submit" onClick={handleClick}>
          <MdAdd />
        </Button>
      </Form>
    </>
  );
};

export default TodoInsert;
