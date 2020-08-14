import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

const Navbar = () =>{
    return(
        <header className ="Header">
        <nav className="Navbar">
          <ul>
            <li>
                <Link to ="/Quiz">Home</Link>
                <Link to ="/JavaScriptQuiz">JavaScript</Link>
                <Link to ="/ReactQuiz">React</Link>
                <Link to ="/CSSQuiz">CSS</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar;