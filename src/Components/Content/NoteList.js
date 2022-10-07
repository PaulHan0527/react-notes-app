import React, { useState } from "react";
import '../css/noteList.css';
import NoteEntry from "./Classes/NoteEntry";
import NoteListItem from "./NoteListItem";

const NoteList = (props) => {
    let noteList = [new NoteEntry("Document 1", "Content document 1"),
                    new NoteEntry("Document 2", "Content document 2"),
                    new NoteEntry("Document 3", "Content document 3"),
                    ]
    
    const [selected, setSelected] = useState(null);

    return (
        <div className="noteList-container">
            <div className="noteList-header">
                <div className="noteList-header-name">Note List</div>
                <div className="noteList-header-button">+</div>
            </div>

            <div className="noteList-content">
                {noteList.map((element, i) => {
                    return <NoteListItem 
                            key={i}
                            index={i}
                            name={element.name}
                            selected={(i === selected)}
                            setSelected={setSelected}
                            />
                })}
            </div>
        </div>
    )
}

export default NoteList;