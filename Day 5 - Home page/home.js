import React, { useState } from 'react';
import MainPage from './mainpage';
import NavBar from './NavBar';
import SignIn from './sign_in';
import { Route, Routes } from 'react-router-dom';
import BookPage from './BookPage';
function Home(){
    const [isSideBarEnabled, setSideBar]=useState(false);
    
    const handleProfileClick=()=>{
        setSideBar(!isSideBarEnabled);
        
    }

    return(
        <div class="home-page" style={{width:"100%",overflow:"hidden"}}>
        <NavBar method={handleProfileClick}/>
        <MainPage value={isSideBarEnabled} method={handleProfileClick}/>
        
        </div>
    );
}
export default Home;