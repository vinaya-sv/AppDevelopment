import React from 'react';
import './css/navbar.css';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import {ImSearch} from 'react-icons/im';

function NavBar(props){
    
    const user=useSelector(state=>state.user.value); 
    
    return(
        <div className="navbar">
                <li className="profilefield"><CgProfile className="profile-icon" size={33} onMouseEnter={props.method} /></li>
                <li  className="usernamefield"><span className="username">{user.username}</span></li>
                <li className="searchfield"><ImSearch size={20} className="search-icon"/><input className="search-bar"  type="text"></input></li>
                <li className="logofield"><span className="logo-text">Book-Bosom.</span></li>

                
        </div>
    )
}
export default NavBar;