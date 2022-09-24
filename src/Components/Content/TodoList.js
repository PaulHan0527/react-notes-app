import React from "react";
import '../css/todoList.css';
import TodoEntry from "./Classes/TodoEntry";

const TodoList = (props) => {
    // set this variable by auth user
    let todoList = [new TodoEntry("Bairnes React Assessment", "09/27/2022"),
                    new TodoEntry("Bungie Game Assessment", "09/30/2022")];


    return (
        <div className="todoList-container">
            {/* Todo list header */}
            <div className="todoList-header">
                <div className="todoList-header-title">
                    To-Do List
                </div>
                <button className="todoList-header-add" onClick={() => {console.log(todoList); console.log(todoList.length);}}>
                    +
                </button>
            </div>
            
            {/* Todo list content */}
            <div className="todoList-content">
            {
                todoList.length !== 0 
                ? todoList.map(entry => {
                    return (<div>
                                <div>{entry.content}</div>
                                <div>{entry.date}</div>
                            </div>
                            )
                })
                : <div>There are no items.</div>
            }
            </div>
            
        </div>
    )
}

export default TodoList;