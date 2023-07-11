import React, { useState } from 'react';
import MainPage from './mainpage';
import NavBar from './NavBar';
import SignIn from './sign_in';
function Home(){
    const [isSideBarEnabled, setSideBar]=useState(false);
    const handleProfileClick=()=>{
        setSideBar(!isSideBarEnabled);
    }
    return(
        <div class="home-page" style={{width:"100%"}}>
        <NavBar method={handleProfileClick}/>
        <MainPage value={isSideBarEnabled} method={handleProfileClick}/>
        </div>
    );
}
export default Home;