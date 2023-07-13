import React, { useState } from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
function StarRating(){
    const [stars,setStarValue]=useState([0,0,0,0,0]);
    const HoverRating=(max)=>{
        for(let i=0;i<5;i++){
            if(i<=max)
                stars[i]=1;
        }
        
        // console.log("Hai")
    }
    return(
        <div>
                <span onClick={HoverRating(0)}>{(stars[0]==0)?<AiOutlineStar/>:<AiFillStar/>}</span>
                <span onClick={HoverRating(1)}>{(stars[1]==0)?<AiOutlineStar/>:<AiFillStar/>}</span>
                <span onClick={HoverRating(2)}>{(stars[2]==0)?<AiOutlineStar/>:<AiFillStar/>}</span>
                <span onClick={HoverRating(3)}>{(stars[3]==0)?<AiOutlineStar/>:<AiFillStar/>}</span>
                <span onClick={HoverRating(4)}>{(stars[4]==0)?<AiOutlineStar/>:<AiFillStar/>}</span>
        </div>
    );
}
export default StarRating;