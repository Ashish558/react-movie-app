
import React from 'react'
import {useGlobalContext} from '../context'
import Loading from './Loading'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion'

const containerVariants={
   hidden:{
      y:'50%',
      opacity:0
   },
   visible:{
      y: 0,
      opacity:1,
      transition:{
        ease : "easeInOut",
        duration : 1
      }
   }
}

function SingleMovie(){
  const {specificData, loading} = useGlobalContext()
  const {Poster,Title,Year,Type,Runtime,Rated,Genre,Language,Writer,Actors,Plot, imdbRating, imdbVotes}= specificData

  if(loading){
    return <Loading />
  }
  
  return(
 <motion.div className="container-lg movie-container"
       variants = {containerVariants}
       initial = "hidden"
       animate = "visible"
      >
    <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 img-container">
               <img src={Poster} className="movie-img" alt="movie"/>
               <img src={Poster} className="bg-img" />
               <div className="overlay" ></div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 contents-container">
              <div className="contents">
                   <div className="title flex" >
                      <h2>{Title}</h2>
                      <p className="year">({Year})</p> 
                   </div>

                   <p className="info info-section small">
                      {Type} | 
                      { 
                         specificData.totalSeasons != undefined ? (<span>{specificData.totalSeasons} seasons | </span>)  : "" } 
                      {Runtime} |  
                      {Rated} 
                   </p>
                   
                   <div className="flex info" >
                      <h5 className="info-title">Genre:</h5>
                      <p className="info-text" > {Genre}</p>
                   </div>
                   <div className="flex info" >
                      <h5 className="info-title">Language:</h5>
                      <p className="info-text" > {Language}</p>
                   </div>
                   <div className="flex info" >
                      <h5 className="info-title">Writer:</h5>
                      <p className="info-text" > {Writer}</p>
                   </div>
                   <div className="flex info" >
                      <h5 className="info-title">Actors:</h5>
                      <p className="info-text" >{Actors}</p>
                   </div>
                   <div className="flex info" >
                      <h5 className="info-title">Plot:</h5>
                      <p className="info-text" > {Plot}</p>
                   </div>                   
                   <div className="flex info ratings-container" >
                      <FontAwesomeIcon icon="star" className="icon" />
                         <div className="imdb-info flex">
                             <p className="small" >{imdbRating}</p> 
                             <p className="small" >{imdbVotes}</p>                          
                         </div>
                   </div>
                   <Link to="/">
                       <img src="arrow-left.png" className="back-button" />
                   </Link>
              </div>
              
          </div>
    </div>
</motion.div>
  )
}

export default  SingleMovie