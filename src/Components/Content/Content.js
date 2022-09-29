import React from 'react';
import '../css/content.css';
import TodoList from './TodoList';
import PostItList from './PostItList';
import NoteList from './NoteList';

const Content = (props) => {
    // this is where you set some of the props with auth: true
    const colorOptions = ["light-salmon-pink","melon","very-pale-orange","champagne","tea-green","columbia-blue"];

    return (
        <div className='container'>
            <div className='box todo-container'>
                <TodoList 
                    colorOptions={colorOptions}
                />
            </div>
            <div className='box post-container'>
                <PostItList 
                    colorOptions={colorOptions}
                />
            </div>
            <div className='box notes-container'>
                <NoteList 
                    colorOptions={colorOptions}
                />
            </div>
        </div>
    )
}

export default Content;