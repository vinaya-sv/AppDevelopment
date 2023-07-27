import React, { useContext, useEffect, useState } from 'react';
import './css/mainpage.css';
import BookList from './booklist';
import img1 from'./Assets/2states.png';
import img2 from'./Assets/The chronicles of narnia.jpg';
import img3 from'./Assets/harry potter.jpg';
import img4 from'./Assets/the lord of the rings.jpg';
import { Link } from 'react-router-dom';
import MenuBar from './menubar';
import SideBar from './sidebar';
import { MyContext } from './context/context';
import axios from 'axios';


function MainPage(props){
    const {selectBook}=useContext(MyContext);
    const [books, setBooks]=useState([]);
    const [sortBy,setSortby]=useState("bookName/asc");
    const handleSortBy=(field)=>{
        console.log(field);
        setSortby(field);
        localStorage.setItem("sortBy",field);
        window.location.reload();
    }
    // const [books, setBooks]=useState([
        //     {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
    //     book_rating:3,img:img1,genre:["Love","Romance","Family"],reviews:[{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."},{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."},{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."},{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."}]},
    //     {name:"The Chronicles of Narnia",author:"C.S. Lewis",description:"This book makes readers feel like magic is right at their fingertips—or right at their wardrobe. This is a novel that speaks directly to the hearts of any kid who ever wished their dog would talk back to them. More than that, as the Pevensies face off a witch, it makes readers feel that, with enough courage, anything is possible.", 
    //     book_rating:4, img:img2,genre:["Action","Fantasy"],reviews:[{username:"Niraj",review:"Very nice story"}]},
    //     {name:"Harry Potter",author:"J.K. Rowling",description:"The most recent novel on this list, Harry Potter and the Sorcerer’s Stone brings readers into a world of magic at Hogwarts School of Witchcraft and Wizardry. On his eleventh birthday, Harry’s magical heritage is brought to light by the bumbling half-giant Hagrid.", book_rating:5, img:img3,genre:["Love","Romance","Family"],reviews:[{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."},{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."},{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."},{username:"Kamala",review:"The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read.The best book that I have ever read."},{username:"Krish",review:"Very interesting to read."}]},
    //     {name:"The Lord of the Rings",author:"J.R.R. Tolkien",description:"This high-fantasy novel is a famous three volume epic. It centers around an all powerful ring forged by the Dark Lord Sauron. For many years the ring is sought after by all likes, but at the start of the novel, it resides in the simple home of the hobbit Bilbo Baggins.", book_rating:2, img:img4,genre:["Action","Fantasy"],reviews:[{username:"Niraj",review:"Very nice story"}]},
        
    // ])
    useEffect(()=>{
        if(!localStorage.getItem("sortBy"))
            localStorage.setItem("sortBy","bookName/asc");
        console.log(localStorage.getItem("token"));
        axios.get(`http://localhost:8080/book/sort/${localStorage.getItem("sortBy")}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{setBooks(res.data)})
        
    },[])
    
    // useEffect(()=>{
    //     const response=await axios.
    // },[])
    
    return(
        <div className="mainpage">
            {/* Search field */}
                
            <SideBar/>
            <MenuBar sortBy={(field)=>handleSortBy(field)}/>
            <div class="book-lists">
                <Link to="/book">
                    {books.map((book)=><BookList key={book.bookName} book={book} /*onClick={()=>selectBook(book)}*//>)}
                    </Link>
            </div>
            
            
                
        </div>
    );
}
export default MainPage;