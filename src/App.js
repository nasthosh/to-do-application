import React, {useState, useEffect} from 'react';
import './App.css';

import Form from "./components/Form"
import Todos from "./components/TodoList";

function App() {


  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggleStatus, setToggleStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
      filterHandler();
    }, [todos, toggleStatus]);

  let countTotalTasks = 0;
  let incompletedTasks = 0;
  const filterHandler = () => {
        switch (toggleStatus) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                countTotalTasks = todos.length;
                incompletedTasks = countTotalTasks - todos.filter(todo => todo.completed === true).length;
                break;
            case 'not completed':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                countTotalTasks = todos.length;
                break;
            default:
                setFilteredTodos(todos);
                countTotalTasks = todos.length;
                break;
        }
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <header>
         <h1>{incompletedTasks} of {countTotalTasks} remaining</h1>
      </header>

      <Form
          todos = {todos}
          setTodos = {setTodos}
          setInputValue = {setInputValue}
          inputValue = {inputValue}
          toggleStatus = {toggleStatus}
          setToggleStatus = {setToggleStatus}

      />
      <Todos
          filteredTodos = {filteredTodos}
          setFilteredTodos = {setFilteredTodos}
          todos = {todos}
          setTodos = {setTodos}
      />
    </div>
  );
}

export default App;
