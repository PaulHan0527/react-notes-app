import React, { useState } from "react";
import '../css/postitList.css';
import PostEntry from "./Classes/PostEntry";
import PostItListItem from "./PostItListItem";

const PostItList = (props) => {

    let postList = [new PostEntry("This is post 1"),
                new PostEntry("This is post 1"),
                new PostEntry("This is post 2"),
                new PostEntry("This is post 1"),
                new PostEntry("This is post 1"),
                new PostEntry("This is post 1"),
                new PostEntry("This is post 1"),
                new PostEntry("This is post 1"),
                new PostEntry("This is post 1"),]
    
    const [list, setList] = useState(postList);

    return (
        <div className="postitList-container">
            <div className="postitList-header">
                <div className="postitList-header-title">
                    Post-It List
                </div>
                <button className="postitList-header-add-button">
                    +
                </button>
            </div>

            <div className="postitList-content" id="style-1">
                {list.length !== 0 
                ? list.map((entry, index) => {
                    return <PostItListItem 
                        key={index}
                        entry={entry}
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