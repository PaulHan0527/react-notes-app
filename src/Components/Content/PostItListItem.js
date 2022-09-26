import React from "react";
import '../css/postitList.css';

const PostItListItem = (props) => {


    return (
        <div className="postitList-entry">
            {props.entry.content}
        </div>
    )
}

export default PostItListItem;