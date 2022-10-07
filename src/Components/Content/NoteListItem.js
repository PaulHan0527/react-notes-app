import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "../css/noteList.css";

const NoteListItem = (props) => {

    const handleClick = () => {
        if(props.selected) {
            console.log("double clicked!")
            // open modal for document
        }
        else {
            console.log(props.index);
            props.setSelected(props.index);
        }

    }

    return (
        <div className={"file-icon" + (props.selected ? " clicked" : "")} onClick={handleClick}>
            <FontAwesomeIcon icon={faFile} size="3x"/>
            <div>{props.name}</div>
        </div>
    )

}
export default NoteListItem;