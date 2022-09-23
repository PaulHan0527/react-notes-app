import React from 'react';
import '../css/content.css';

const Content = (props) => {
    // this is where you set some of the props with auth: true


    return (
        <div className='container'>
            <div className='box todo-container'>
                Todo container works!
            </div>
            <div className='box postit-container'>
                Post-It container works!
            </div>
            <div className='box notes-container'>
                Notes container works!
            </div>
        </div>
    )
}

export default Content;