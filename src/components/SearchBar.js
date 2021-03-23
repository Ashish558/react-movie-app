

import React from 'react'
import {useGlobalContext} from '../context'

function SearchBar(){
 const {search, inputValue, setInputValue} = useGlobalContext()
    
 return(
  <div className="search-bar-container container" >
     <input className="input" 
                  placeholder="search.."
                  value={inputValue}
                   onChange={(e)=>setInputValue(e.target.value)} />
     <button onClick={search}>Search!</button>
  </div>
 )
  
}

export default SearchBar