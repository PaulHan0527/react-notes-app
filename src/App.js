import './App.css';
import React, { useState } from 'react'; 
import Header from './Components/Header/Header.js';

function App() {
  const [name, setName] = useState("");


  return (
    <div className='app-container'>
      <Header 
        name = {name}
        setName = {setName}
      />
      
    </div>
  );
}

export default App;
