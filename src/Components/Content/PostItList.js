import React, { useEffect, useState } from "react";
import '../css/postitList.css';
import PostEntry from "./Classes/PostEntry";
import PostItListItem from "./PostItListItem";

const PostItList = (props) => {

    let postList = [new PostEntry("This is a long postThis is a long postThis is a long post", "melon"),
                new PostEntry("This is post 1", "light-salmon-pink"),
                new PostEntry("This is post 2", "champagne"),
                new PostEntry("This is post 3", "columbia-blue")]
    
    const [list, setList] = useState(postList);
    

    const checkOnblur = (index) => {
        
    }

    const addItem = () => {
        let temp = [...list];
        temp.unshift(new PostEntry("", "melon"));
        setList(temp);
    }

    const editContent = (index, content) => {
        let temp = [...list];
        temp[index].content = content;
        setList(temp);
    }


    return (
        <div className="postitList-container">
            <div className="postitList-header">
                <div className="postitList-header-title">
                    Post-It List
                </div>
                <button className="postitList-header-add-button" onClick={() => addItem()}>
                    +
                </button>
            </div>

            <div className="postitList-content" id="style-1">
                {list.length !== 0 
                ? list.map((entry, index) => {
                    return <PostItListItem 
                        key={index}
                        index={index}
                        entry={entry}
                        list={list}
                        color={entry.color}
                        editContent={editContent}
                        checkOnblur={checkOnblur}
                    />
                })
                : <div>
                    There are no items.
                </div>
                } 

            </div>
        </div>
    )
}

export default PostItList;