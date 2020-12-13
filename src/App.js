import React, { useState } from 'react';
import logo from './logo.svg';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  // const addList = (list, setList) => {
  //   const newList = list.concat({ value });
  //   setValue('');
  // };
  // const [value, setValue] = useState('');
  const [list, setList] = useState(['할일1', '할일2']);
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert
          // value={value}
          // setValue={setValue}
          list={list}
          setList={setList}
        ></TodoInsert>
        <TodoList list={list} />
      </TodoTemplate>
    </div>
  );
}

export default App;
