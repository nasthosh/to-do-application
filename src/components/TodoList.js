import React from "react";

import Todo from  "./Todo"
import Form from "./Form";
const TodoList = ({todos, setTodos, filteredTodos, setFilteredTodos}) => {
    console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        todos = {todos}
                        setTodos = {setTodos}
                        key = {todo.id}
                        todo={todo}
                        text = {todo.text}/>
                ))}
            </ul>
        </div>

    );
};

export default TodoList;