

import React from 'react'
import {useGlobalContext} from '../context'
import Movies from './Movies'
import {motion} from 'framer-motion'

const containerVariants={
   hidden:{
      y:'100vh',
      opacity:0
   },
   visible:{
      y: 0,
      opacity:1,
      transition:{
           type:'ease-in-out',
           when:'beforeChildren',
           staggerChildren:0.2
      }
   } 
}

const childVariants={
   hidden:{
     opacity:0
   },
   visible:{
     opacity:1,     
   }
}

function MovieList(){
 const {data, increasePage, decreasePage, currentPage} = useGlobalContext()

 return(
  <div className="container-lg movies-container" >
     <motion.div className="row container mx-auto movies"
          variants={containerVariants}
          initial = "hidden"
          animate = "visible"
          >
         {data.Search.map((movie)=>{
            return( 
            <motion.div 
              variants={childVariants}            
              className="card col-lg-4 col-md-4 col-sm-4 text-center">
                 <Movies key={movie.imbdID} {...movie} />
           </motion.div>
             )
         })}
         <motion.div  className="page-btn-container col-lg-12" variants={childVariants}>
            <button onClick={()=>decreasePage()}
                            className={currentPage ===1? "btn-disabled page-btn" : "page-btn"} >
                            Prev
           </button>     
            <button onClick={()=>increasePage()} className="page-btn" >Next</button>     
         </motion.div>
     </motion.div>     
  </div>
  
 )
}

export default MovieList