

import React from 'react';
import { Link } from "react-router-dom";
import {useGlobalContext} from '../context';

const Movies=({imdbID, Title, Year, Poster, Type})=>{
 
 const {specificSearch} = useGlobalContext()
 
 return(
   <div className="card-body">
      <img className="card-img-top" src={Poster} alt="Movie Poster" />               
      <h4 className="card-title">{Title}</h4>
      <p className="card-text year">{Year}</p>
      <p className="card-text">{Type}</p>
      <Link to="singleMovie">
          <button onClick={()=>specificSearch(Title)}>See More</button>
     </Link>
   </div>

 )
}

export default Movies