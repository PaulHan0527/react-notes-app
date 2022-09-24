import React from "react";
import '../css/todoList.css';
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCaretDown, faCaretUp, faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

const TodoListItem = (props) => {
    // Collapsible Properties
    const config = {
        easing: 'linear(.93,.12,.42,.25)'
    };

    const { getCollapseProps, getToggleProps, isExpanded, setExpanded } = useCollapse(config);

    // Functions to use
    const deleteEntry = () => {
        props.handleDeleteItem(props.index);
    }

    const toggleCompleteStatus = () => {
        props.toggleCompleteStatus(props.index);
    }

    return (
        <div className={isExpanded ? 'todoList-entry-opened ' + props.entry.color : 'todoList-entry-closed ' + props.entry.color}>
            <div className="todoList-entry-header">
                <div className="todoList-entry-header-content">
                    {isExpanded
                    ? <div {...getCollapseProps()}>
                        <div>
                            {"Opened! " + props.entry.content + " " + props.entry.date}
                        </div>

                        <div>
                            <div>
                                Expanded Content
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div>
                            {props.entry.content + " " + props.entry.date}
                        </div>
                    </div>
                }
                </div>
                <button className={props.entry.completed ? "complete-button" : "incomplete-button"}>
                    {
                        props.entry.completed
                        ? <div className="tooltip" onClick={() =>toggleCompleteStatus()}><FontAwesomeIcon icon={faCheck} size='2x'/><span className="tooltiptext">Click to Toggle Status!</span></div>
                        : <div className="tooltip" onClick={() =>toggleCompleteStatus()}><FontAwesomeIcon icon={faMinus} size='2x'/><span className="tooltiptext">Click to Complete!</span></div>
                    } 
                </button>
                
                <button className="expand-button" {...getToggleProps()}>
                    {
                        isExpanded 
                        ? <FontAwesomeIcon icon={faCaretUp} size='2x'/> 
                        : <FontAwesomeIcon icon={faCaretDown} size='2x'/>
                    }
                </button>
                {isExpanded 
                ? <div>
                    <button className="todoList-entry-remove-button" onClick={() => deleteEntry()}>
                        <FontAwesomeIcon icon={faTrashCan} size='2x' />
                    </button>
                </div>
                : <></>
                }
                
            </div>          
        </div>
    )
}

export default TodoListItem;