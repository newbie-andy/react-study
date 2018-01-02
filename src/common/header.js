import React, { Component } from 'react';
import logo from './../logo.svg';
import './common.css';

class Header extends Component {
    render() {
      return (
        <header id="Header">
            <div className="brand">
                {/* <img src={logo} alt="img"/> */}
                <span>Andy</span>
            </div>

            <ul>
                <li>
                    <a href="">
                        <i></i>
                        <span>home</span>
                    </a>
                    <a href="">
                        <i></i>
                        <span>blog</span>
                    </a>
                    <a href="">
                        <i></i>
                        <span>about</span>
                    </a>
                </li>
            </ul>
        </header>
      );
    }
  }
  
  export default Header;
  