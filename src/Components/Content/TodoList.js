import React, { useState, useEffect } from "react";
import '../css/todoList.css';
import TodoEntry from "./Classes/TodoEntry";
import TodoListItem from "./TodoListItem";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const TodoList = (props) => {
    // set this variable by auth user
    let todoList = [new TodoEntry("Bairnes React Assessment", "description", "09/27/2022", "columbia-blue"),
                    new TodoEntry("Bungie Game Assessment", "description", "09/30/2022", "tea-green"),
                    new TodoEntry("Temp 1", "description", "09/30/2022", "light-salmon-pink"),
                    new TodoEntry("Temp 1", "description", "09/30/2022", "very-pale-orange"),];
    todoList[0].completed = true;
    todoList[2].completed = true;

    const [list, setList] = useState(todoList);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [submitButton, setSubmitButton] = useState(false);

    const colorOptions = ["light-salmon-pink","melon","very-pale-orange","champagne","tea-green","columbia-blue"];

    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setTitle('');
        setDescription('');
        setDate('');
        setSelectedColor('');
        setSubmitButton(false);
        setModalIsOpen(false);
    }

    const handleSubmit = (e) => {
        // console.log(e);
        // e.preventDefault();
        addItem();
    }
    const addItem = () => {
        let item = new TodoEntry(title, description, date.replaceAll('-', '/'), selectedColor);
        let temp = [...list];
        temp.push(item);
        setList(temp);

        closeModal();
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


    // useEffect is called when useState changes, you can set dependencies array to only be called with certain variable change
    useEffect(() => {
        // console.log(selectedColor);
        if(title !== "" && date !== "" && selectedColor !== "") {
            setSubmitButton(true);
        }
        else {
            setSubmitButton(false);
        }
    },[title,description,date,selectedColor])

    return (
        <div className="todoList-container">
            {/* Todo list header */}
            <div className="todoList-header">
                <div className="todoList-header-title">
                    To-Do List
                </div>
                {/* <button className="todoList-header-add" onClick={() => {console.log(list); console.log(list.length);}}>
                    <FontAwesomeIcon icon={faCaretDown} /> {expand All?}
                </button> */}
                <button className="todoList-header-add" onClick={openModal}>
                    +
                </button>
                <Modal isOpen={modalIsOpen}
                    className="todoList-modal" overlayClassName={"todoList-modal-overlay"} 
                    ariaHideApp={false} closeTimeoutMS={200}
                >
                    <div className="todoList-modal-header">
                        Create a To-Do List
                    </div>
                    <br></br>
                    <div className="todoList-modal-content">
                        <form id="todoList-item-form" onSubmit={handleSubmit} className="todoList-item-form">
                            <div className="todoList-item-form-title">
                                <label className="todoList-item-form-label">
                                    Title
                                </label>
                                <input type="text" name="title" className="todoList-item-form-title-input"
                                    onChange={(e) => {setTitle(e.target.value)}}/>
                            </div>
                            
                            <div className="todoList-item-form-description">
                                <label className="todoList-item-form-label">
                                    Description
                                </label>
                                <textarea type="text" name="description" className="todoList-item-form-description-input"
                                    onChange={(e) => {setDescription(e.target.value)}}>
                                </textarea>
                            </div>
                            <div className="todoList-item-form-bundle">
                                <div className="todoList-item-form-date">
                                    <label className="todoList-item-form-label">
                                        Date
                                    </label>
                                    <input type="date" name="date" className="todoList-item-form-date-input"
                                        onChange={(e) => {setDate(e.target.value)}}/>
                                </div>

                                <div className="todoList-item-form-color">
                                    <label className="todoList-item-form-label">
                                        Color
                                    </label>
                                    {colorOptions.map((colorString) => {
                                        if(colorOptions === colorString) {
                                            console.log(selectedColor)
                                        }
                                        return <FontAwesomeIcon
                                                    key={colorString}
                                                    icon={faCircle}
                                                    onClick={() => {setSelectedColor(colorString)}}
                                                    className={colorString === selectedColor ? colorString + " color-option-circle-selected" : colorString + " color-option-circle"}
                                                    size="3x"/>
                                    })}
                                </div>
                            </div>
                        </form>
                    </div>
                    <br></br>
                    <div className="todoList-modal-footer">
                        <button form="todoList-item-form" 
                                onClick={handleSubmit} 
                                className={submitButton ? "todoList-modal-create-button" : "todoList-modal-create-button disabled"} 
                                disabled={!submitButton}>
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