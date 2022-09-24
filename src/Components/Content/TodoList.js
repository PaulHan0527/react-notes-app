import React from "react";
import '../css/todoList.css'

const TodoList = (props) => {

    return (
        <div className="todoList-container">
            {/* Todo list header */}
            <div className="todoList-header">

            </div>
            {/* Todo list content */}
            
            {
                props.todoList.length !== 0 ?
                <div>There are entries</div>
                : <div> There are no entries</div> 
            }
            
        </div>
    )
}

export default TodoList;