import React from "react";


const Form = ({setInputValue, todos, setTodos, inputValue, setToggleStatus}) => {
    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const submitHandler = (e) => {
        console.log(e.target.value);
        e.preventDefault();
        setTodos([
            ...todos,{text : inputValue, completed : false, id : Math.random() * 1000}
        ])
        setInputValue("");
    };

    const toggleStatusHandler = (e) => {
        console.log(e.target.value);
        setToggleStatus(e.target.value);
    };

    return(
        <form>
            <input value={inputValue} onChange={inputHandler} type="text" className="todo-input"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange = {toggleStatusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="not completed">Not Completed</option>
                </select>
            </div>
        </form>
    );
};

export default Form;