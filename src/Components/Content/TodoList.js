import React, { useState } from "react";
import '../css/todoList.css';
import TodoEntry from "./Classes/TodoEntry";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    // set this variable by auth user
    let todoList = [new TodoEntry("Bairnes React Assessment", "09/27/2022", "columbia-blue"),
                    new TodoEntry("Bungie Game Assessment", "09/30/2022", "tea-green"),
                    new TodoEntry("Temp 1", "09/30/2022", "light-salmon-pink"),
                    new TodoEntry("Temp 1", "09/30/2022", "very-pale-orange"),];
    todoList[0].completed = true;
    todoList[2].completed = true;

    let opened = [];
    for(let i = 0; i < todoList.length; i++) {
        opened.push(i);
    }

    const [list, setList] = useState(todoList);

    const handleDeleteItem = (index) => {
        setList(list.filter(item => item !== list[index]));
    }

    const toggleCompleteStatus = (index) => {
        // I need a better way for this (without using additional memory)
        
        let temp = [...list];
        temp[index].completed = !temp[index].completed;
        setList(temp);
    }

    return (
        <div className="todoList-container">
            {/* Todo list header */}
            <div className="todoList-header">
                <div className="todoList-header-title">
                    To-Do List
                </div>
                <button className="todoList-header-add" onClick={() => {console.log(list); console.log(list.length);}}>
                    +
                </button>
            </div>
            
            {/* Todo list content */}
            <div className="todoList-content" id="style-1">
            {
                list.length !== 0 
                ? list.map((entry, index) => {
                    return <TodoListItem
                        key={index}
                        index={index}
                        entry={entry}
                        handleDeleteItem={handleDeleteItem}
                        toggleCompleteStatus={toggleCompleteStatus}
                    />
                })
                : <div className="no-item-message">There are no items.</div>
            }
            </div>
            
        </div>
    )
}

export default TodoList;