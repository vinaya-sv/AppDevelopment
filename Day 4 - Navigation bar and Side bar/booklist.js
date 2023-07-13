import React from 'react';
import './css/booklist.css';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
function BookList(props){
    const ratings=()=>{
        const stars=[];
        
        for(let i=0;i<props.book.book_rating;i++){
            stars.push(<AiFillStar key={i}/>);
        }
        
        for(let i=0;i<5-props.book.book_rating;i++){
            stars.push(<AiOutlineStar key={i}/>);

        }
        return <>{stars}</>
    }
    return(
        <div className="book-list">
            <div class="book-image-div"><img src={props.book.img} className="book-image"/></div>
            <div class="book-info-div">
                <span className="book-title">{props.book.name}</span>
                <span className="book-author">by {props.book.author}</span>
                <div className="book-rating">{ratings()}</div>
            </div>
        </div>
    );
}
export default BookList;