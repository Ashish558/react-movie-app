
import React from 'react'
import {useGlobalContext} from '../context'
import Loading from './Loading'
import MovieList from './MovieList'
import MainContainer from './MainContainer'

function Status(){
  const {loading, data, errorMsg} = useGlobalContext()
   
    if(loading){
      return <Loading />
    }
    
    if(errorMsg){
       return(
         <MainContainer text="Check internet connection and try again" />
       )
    }
    /*  / */
    
    if(data.Response==="False"){
       return <MainContainer text="Search for a valid movie" />
    }
    
    /*  / */
    
    if(data.Response==="True"){
       return <MovieList />
    }
    
    return(
         <MainContainer text="Search for a movie!" />
     )
}

export default Status