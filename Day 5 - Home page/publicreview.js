import React from 'react';
import './css/publicreview.css';
function PublicReview(props){
    return(
        <div className="public-review-outer">
            <p>{props.username}</p>
            <p>{props.review}</p>
        </div>
    );
}
export default PublicReview;