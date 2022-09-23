import React from 'react';
import '../css/header.css';

const Header = (props) => {
    
    const titleClick = () => {
        console.log("Home Button Clicked!");
    }

    return (
        <div>
            <button className='title-button' onClick={() => titleClick()}>
                <h1 className='title'>LIGHT NOTES</h1>
            </button>
            
        </div>
    );
}

export default Header;
