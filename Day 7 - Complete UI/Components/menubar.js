import React, { useState } from 'react';
import './css/menubar.css';
function MenuBar(){
    const [genres,setGenre]=useState(["love","horror","romance","mystery","fantasy","sci-fi","biography"]);
    const [sortby,setSortby]=useState(["Name : A - Z","Name: Z - A","Highest Ratings","Lowest Ratings", "Published recently","Published earlier"]);

    return(
        <div className="menubar">
            <div className="genres">
                <span className="filter-and-sort-text" style={{color:"#6f5353"}}>Filter by </span>
                {genres.map((genre)=><li className="genre-filter"><span className="genre-filter-text">{genre}</span></li>)}
            </div>
            <div className="sort-by-field">
                <span className="filter-and-sort-text" style={{color:"#3c3c3c"}}>Sort by </span>
                {sortby.map((sortby)=><li className="sortby-filter"><span className="sortby-filter-text">{sortby}</span></li>)}
            </div>
            </div>
    );
}
export default MenuBar;