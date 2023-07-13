import React, { useContext } from 'react';
import { MyContext } from './context/context';
import './css/sidebar.css';
import { Link } from 'react-router-dom';
function SideBar(){
    const {isSideBarEnabled}=useContext(MyContext);
    return (
        <div class="sidebar-shadow" style={{backgroundColor:(isSideBarEnabled)?"rgba(255,255,255,0.7)":"rgba(0,0,0,0)",display:(isSideBarEnabled)?"block":"none"}}>
        
            <div className="sidebar"  style={{width:(isSideBarEnabled)?"35%":"0%"}} >
                <div className="sidebar-content">Profile</div>
                <div className="sidebar-content">Wishlist</div>
                <div className="sidebar-content">Track Reading</div>
                <Link to="/" style={{textDecoration:"none"}}><div className="sidebar-content">Log out</div></Link>
            </div>

        </div>
            
    );
}
export default SideBar;


