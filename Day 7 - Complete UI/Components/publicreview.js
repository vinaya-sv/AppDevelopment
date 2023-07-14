import React from 'react';
import './css/publicreview.css';
function PublicReview(props){
    return(
        <div className="public-review-outer">
            <div className="public-review-left">
                <div className="public-review-user-profile"></div>
            </div>
            <div className="public-review-right">
                <p className="public-review-username">{props.username}</p>
                <p className="public-review-review">{props.review}</p>
            </div>
            
        </div>
    );
}
export default PublicReview;