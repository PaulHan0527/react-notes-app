import './App.css';
import React from 'react'; 
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
function App() {
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
