import React, { useContext, useEffect, useState } from 'react';
import './css/navbar.css';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import {ImSearch} from 'react-icons/im';
import { MyContext } from './context/context';

function NavBar(props){
    const {isSideBarEnabled, toggleSideBar}=useContext(MyContext);
    const {value, updatedValue}=useContext(MyContext);
    const user=useSelector(state=>state.user.value); 
    useEffect(()=>toggleSideBar("false"),[])
    const [searchtext, setSearchtext]=useState("");
    
    return(
        <div className="navbar">
                <li className="profilefield"><CgProfile className="profile-icon" size={33} onClick={toggleSideBar}/></li>
                <li  className="usernamefield"><span className="username">{user.username?user.username:value}</span></li>
                {/* <li  className="usernamefield"><span className="username">{value}</span></li> */}
                <li className="searchfield"><ImSearch size={20} className="search-icon"/><input className="search-bar"  type="text"></input></li>
                <li className="logofield"><span className="logo-text">Reader Hive</span></li>
                {/* {user.username} */}
        </div>
    )
}
export default NavBar;