import Header from './components/Header';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[input, setInput] = useState("");
  const[todos, setTodos] = useState([])
  return (
    <div className="App">
      <Header/>
      <Form input={input} setInput={setInput}
      todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
