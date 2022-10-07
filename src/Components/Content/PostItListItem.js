import React, { useEffect, useState } from "react";
import '../css/postitList.css';
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const PostItListItem = (props) => {
    const [content, setContent] = useState(props.entry.content);

    const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(2);

    const handleOnFocus = () => {
        props.setCurrentEditMode(props.index);
    }

    const handleOnBlur = () => {
        if(props.currentEditMode !== null) {
            props.editContent(props.index, content);
        }
        props.setCurrentEditMode(null);
    }

    const handleDelete = () => {
        setIsOpen(false);
        props.deleteItem(props.index);
    }

    useEffect(() => {
        // console.log(content);
    }, [content])


    return (
        <div className={"postitList-entry " + props.color}>
            <div className="postitList-entry-container" >
                
                    
                   <div className="postitList-entry-input" contentEditable={true} id="style-2"
                            suppressContentEditableWarning={true}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            onInput={(e) => {setContent(e.target.innerText);}}
                            // onKeyDown={(e) => handleKeyDown(e)}
                            
                            >
                        {/* <input className="postitList-entry-input" 
                            defaultValue={props.entry.content} 
                            onChange={(e) => {setContent(e.target.value)}}
                            onBlur={() => {props.editContent(props.index, content); setEditMode(false)}}/> */}
                            {/* <pre>{props.entry.content}</pre> */}
                            {props.entry.content}
                    </div>
                    
                


                <div className="postitList-entry-header">
                    <button {...buttonProps} className="postitList-entry-menu-button">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                    <div className={isOpen ? 'visible' : ''} role="menu">
                        {/* <div className="menu-buttons" {...itemProps[0]}>Change Color</div> */}
                        <div className="menu-buttons" {...itemProps[1]} onClick={handleDelete}>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItListItem;