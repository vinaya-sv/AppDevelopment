import React, { useContext, useState } from 'react';
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


function MainPage(props){
    const {selectBook}=useContext(MyContext);
    const [books, setBooks]=useState([
        {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
    book_rating:3,img:img1,genre:["Love","Romance","Family"],reviews:[{username:"Kamala",reivew:"The best book that I have ever read."}]},
        {name:"The Chronicles of Narnia",author:"C.S. Lewis",description:"This book makes readers feel like magic is right at their fingertips—or right at their wardrobe. This is a novel that speaks directly to the hearts of any kid who ever wished their dog would talk back to them. More than that, as the Pevensies face off a witch, it makes readers feel that, with enough courage, anything is possible.", 
        book_rating:4, img:img2,genre:["Action","Fantasy"],review:[{username:"Niraj",review:"Very nice story"}]},
        {name:"Harry Potter",author:"J.K. Rowling",description:"The most recent novel on this list, Harry Potter and the Sorcerer’s Stone brings readers into a world of magic at Hogwarts School of Witchcraft and Wizardry. On his eleventh birthday, Harry’s magical heritage is brought to light by the bumbling half-giant Hagrid.", book_rating:5, img:img3, genre:["Action","Fantasy"],review:[{username:"Niraj",review:"Very nice story"}]},
        {name:"The Lord of the Rings",author:"J.R.R. Tolkien",description:"This high-fantasy novel is a famous three volume epic. It centers around an all powerful ring forged by the Dark Lord Sauron. For many years the ring is sought after by all likes, but at the start of the novel, it resides in the simple home of the hobbit Bilbo Baggins.", book_rating:2, img:img4,genre:["Action","Fantasy"],review:[{username:"Niraj",review:"Very nice story"}]},
        ])
    
    return(
        <div className="mainpage">
            {/* Search field */}
                

            {/* <div className="sidebar" onMouseLeave={props.method} style={{width:(props.value)?"25%":"0%"}} >
                <div className="sidebar-content">Profile</div>
                <div className="sidebar-content">Wishlist</div>
                <div className="sidebar-content">Track Reading</div>
                <div className="sidebar-content">Log out</div>
            </div>
            <div class="sidebar-shadow" style={{backgroundColor:(props.value)?"rgba(255,255,255,0.5)":"rgba(0,0,0,0)",display:(props.value)?"block":"none"}}>

            </div> */}
            <SideBar/>
            <MenuBar/>
            
            {/* <BookList  key={1} book={books[0]}/> */}
            {/* <BookList  key={2} onClick={()=>selectBook(books[1].name)} book={books[1]}/> */}
            <center class="book-lists">
                <Link to="/book">
                    {books.map((book)=><BookList key={book.name} book={book} onClick={()=>selectBook(book)}/>)}
                    </Link>
            </center>
            
                
        </div>
    );
}
export default MainPage;