import React, { useState } from "react";
import '../css/todoList.css';
import TodoEntry from "./Classes/TodoEntry";
import TodoListItem from "./TodoListItem";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoList = (props) => {
    // set this variable by auth user
    let todoList = [new TodoEntry("Bairnes React Assessment", "09/27/2022", "columbia-blue"),
                    new TodoEntry("Bungie Game Assessment", "09/30/2022", "tea-green"),
                    new TodoEntry("Temp 1", "09/30/2022", "light-salmon-pink"),
                    new TodoEntry("Temp 1", "09/30/2022", "very-pale-orange"),];
    todoList[0].completed = true;
    todoList[2].completed = true;

    const [list, setList] = useState(todoList);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    const addItem = () => {
        let item = new TodoEntry("Newly Created Task", "09/30/2022", "very-pale-orange");
        let temp = [...list];
        temp.push(item);
        setList(temp);
        setModalIsOpen(false);
    }

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
                {/* <button className="todoList-header-add" onClick={() => {console.log(list); console.log(list.length);}}>
                    <FontAwesomeIcon icon={faCaretDown} />
                </button> */}
                <button className="todoList-header-add" onClick={openModal}>
                    +
                </button>
                <Modal isOpen={modalIsOpen}
                    className="todoList-modal" overlayClassName={"todoList-modal-overlay"} ariaHideApp={false}
                >
                    <div className="todoList-modal-header">
                        Create a To-Do List
                    </div>
                    <br></br>
                    <div className="todoList-modal-content">


                    </div>
                    <div className="todoList-modal-footer">
                        <button onClick={addItem} className="todoList-modal-create-button">
                            Create
                        </button>
                        <button onClick={closeModal} className="todoList-modal-cancel-button">
                            close
                        </button>
                    </div>
                </Modal>
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