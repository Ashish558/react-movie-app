
import React from 'react'
import {useGlobalContext} from './context'
import SearchBar from './components/SearchBar'
import Status from './components/Status'
import {motion} from 'framer-motion';


function Home(){
 const {data} = useGlobalContext()

 return(
 <div className="home-page">
    <SearchBar />
    <Status />
</div>
 )
  
}

export default Home