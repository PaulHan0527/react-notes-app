import React from 'react';
import '../css/content.css';
import TodoList from './TodoList';
import PostItList from './PostItList';
import NoteList from './NoteList';

const Content = (props) => {
    // this is where you set some of the props with auth: true


    return (
        <div className='container'>
            <div className='box todo-container'>
                <TodoList 
                
                />
            </div>
            <div className='box post-container'>
                <PostItList 
                
                />
            </div>
            <div className='box notes-container'>
                <NoteList 
                
                />
            </div>
        </div>
    )
}

export default Content;