import React, { useContext, useState } from 'react';
import NavBar from './NavBar';
import './css/bookpage.css';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import img from './Assets/2states.png';
import StarRating from './starrating';
import PublicReview from './publicreview';
import SideBar from './sidebar';
import { MyContext } from './context/context';
function BookPage(){
    const ratings=(rating)=>{
        const stars=[];
        
        for(let i=0;i<rating;i++){
            stars.push(<AiFillStar key={i}/>);
        }
        
        for(let i=0;i<5-rating;i++){
            stars.push(<AiOutlineStar key={i}/>);

        }
        return <>{stars}</>
    }
    // const [book,setBook]=useState({name: "2 States : The Story of my Marriage", author: "Chetan Bhagat", description: "Love marriages around the world are simple: Boy loves girl. Girl loves boy. They get married. In India, there are a few more steps: Boy loves Girl. Girl loves Boy. Girl's family has to love boy. Boy's family has to love girl. Girl's Family has to love Boy's Family. Boy's family has to love girl's family. Girl and Boy still love each other. They get married. Welcome to 2 States, a story about Krish and Ananya. They are from two different states of India, deeply in love and want to get married. Of course, their parents don't agrees. To convert their love story into a love marriage, the couple have a tough battle in front of them. For it is easy to fight and rebel, but it is much harder to convince. Will they make it?",
    // book_rating:3, genre:["Love","Family","Romance","Auto-biography"],reviews:[{username:"Jack",review:"Wonderful book to read"},{username:"Kamala",review:"A beautiful love story of two people from two different states"}]});
    const {selectedBookData}=useContext(MyContext);
    const [book,setBook]=useState(selectedBookData)
    return(
        <div className="bookdetail-wrapper">
        <NavBar/>
        <SideBar />
        <div className="bookdetail-left">
            <div className="bookdetail-image-container"><img src={book.img} style={{height:"100%",width:"100%",objectFit:"contain",margin:"auto"}}/></div>
        </div>

        <div className="bookdetail-right">
            <span className="bookdetail-title">{book.name}</span>
            <span className="bookdetail-author">{book.author}</span>
            <span className="bookdetail-ratings">{ratings(book.book_rating)}</span>
            <span className="bookdetail-publish-date">Published on 13.04.2023</span>
            <div className="bookdetail-description">{book.description}</div>
            <div className="bookdetail-genres">
                {book.genre.map(g=><div className="bookdetail-genre-filter"><span className="bookdetail-genre-filter-text">{g}</span></div>)}
            </div>
            <div className="rating-reviews">
            <p className="rating-reviews-label">Ratings & Reviews</p>
            {/* <StarRating/> */}
                <div className="add-review">
                    <textarea className="review-enter"></textarea>
                </div>
            <div className="public-reviews">
                {book.reviews.map((review)=><PublicReview username={review.username} review={review.review}/>)}
            </div>
            </div>
            
        </div>
        
        </div>
    );
}
export default BookPage;