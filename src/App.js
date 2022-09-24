import './App.css';
import React, { useState } from 'react'; 
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js'

function App() {
  // authenticate here
  // fetch every info we need
  const [todoList, setTodoList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [noteList, setNoteList] = useState([]);

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header 
          // maybe some modals for the signup
        />
      </div>
      <div className='content-container'>
        <Content
          todoList = {todoList}
          setTodoList = {setTodoList}

          postList = {postList}
          setPostList = {setPostList}

          noteList = {noteList}
          setNoteList = {setNoteList}
        />
      </div>
    </div>
  );
}

export default App;
