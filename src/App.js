import './App.css';
import React, { useState } from 'react'; 
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js'

function App() {
  // authenticate here

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header 
          // maybe some modals for the signup
        />
      </div>
      <div className='content-container'>
        <Content
        />
      </div>
    </div>
  );
}

export default App;
