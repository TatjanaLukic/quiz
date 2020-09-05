import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

const Navbar = () =>{
    return(
        <header className ="Header">
        <nav className="Navbar">
          <ul>
            <li>
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/JavaScriptQuiz">JavaScript</NavLink>
                <NavLink to ="/ReactQuiz">React</NavLink>
                <NavLink to ="/CSSQuiz">CSS</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar;