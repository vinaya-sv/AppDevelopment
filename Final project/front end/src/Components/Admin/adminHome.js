import React, { useState } from 'react';
import axios from 'axios';
import MainPage from '../mainpage';
import './css/adminHome.css';
import NavBar from '../NavBar';
function AdminHome(){
    const [bookData, setBookData]=useState({});
    const handleAddBook=()=>{
        axios.post("http://localhost:8080/book",bookData,
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "cache-control":'no-cache'
            }
        })
        window.location.reload();
    }
    const handleChange=(e)=>{
        e.preventDefault();
        const {id,value}=e.target;
        setBookData({...bookData, [id]:value});
        console.log(bookData);
    }
    // "bookName": "It ends with us",
    //     "author": "Coolen Hoover",
    //     "imageURL": "https://res.cloudinary.com/dl3stdqmp/image/upload/v1689863705/it-ends-with-us_l2ztb8.jpg",
    //     "description": "lorem sjioa jdsjd hds oaos c oeah d isdifha dg a gie gojdijs dgjoiaejd fd",
    //     "date": "2023-07-23",
    //     "book_rating": 0
    return (
        <div style={{height:"100vh",width:"100%",overflow:"hidden"}}>
            <div className="add-book">
            <div className="add-book-title-container"><span className="add-book-title">Add new book</span></div>
            <span className="add-book-label" placeholder="hai">Enter the book name </span>
                <input id="bookName" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
            <span className="add-book-label">Enter the author name </span>
                <input id="author" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
            <span className="add-book-label">Enter the book description </span>
                <input id="description" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
            <span className="add-book-label">Enter the publish date </span>
                <input id="date" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
            <span className="add-book-label">Enter the image URL </span>
                <input id="imageURL" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
            <br/>
            <br/>
                <input className="add-book-button" type="button" value="Add the Book" onClick={handleAddBook}></input>
            {/* <div className="add-book-title-container"><span className="add-book-title">Add new book</span></div> */}
            </div>

            <div style={{width:"70%", display:"inline-block", float:"right"}}>
            <NavBar/>
            <MainPage/>
            </div>
        </div>
    );
}
export default AdminHome;