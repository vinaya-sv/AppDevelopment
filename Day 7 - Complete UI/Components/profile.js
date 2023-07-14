import React from 'react';
import NavBar from './NavBar';
import SideBar from './sidebar';
function ProfilePage(){
    return (
        <div className="profile-page-outer">
            <NavBar/>
            <SideBar/>
        </div>
    );
}
export default ProfilePage;