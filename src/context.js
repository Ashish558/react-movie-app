
import React, { useState } from 'react'

const AppContext=React.createContext()

const AppProvider=({children})=>{
  const [data, setData] = useState({ })
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [specificData, setSpecificData] = useState({ })
  const [searchItem, setSearchItem] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
 
 const search = async ()=>{
    try{
      setSearchItem(inputValue)
      setCurrentPage(1)
      
      setLoading(true)
      setErrorMsg("")
       const url =`http://www.omdbapi.com/?s=${inputValue}&apikey=363dddec`  
       const response= await fetch(url)
       const responseData= await response.json()
       setData(responseData)
       setLoading(false)
    }
    catch(error){
        setLoading(false)
        setErrorMsg(error.message)
    }
 } 

const specificSearch= async (title)=>{
   try{
     setLoading(true)
     setErrorMsg("")
      const url =`http://www.omdbapi.com/?t=${title}&apikey=363dddec`  
      const response= await fetch(url)
      const responseData= await response.json()
      setSpecificData(responseData)
      setLoading(false)
   }
   catch(error){
       setLoading(false)
       setErrorMsg(error.message)
   }
} 
/*searching pages*/

React.useEffect(()=>{
  if(searchItem !==""){
   const searchPage= async (title)=>{
      try{
       setLoading(true)
       setErrorMsg("")
        const url =`http://www.omdbapi.com/?s=${searchItem}&page=${currentPage}&apikey=363dddec`  
        const response= await fetch(url)
        const responseData= await response.json()
        setData(responseData)
        setLoading(false)
      }
      catch(error){
       setLoading(false)
       setErrorMsg(error.message)
      }
   }
   searchPage()
  }
  
},[currentPage])

const increasePage=()=>{
  setCurrentPage(currentPage+1)
}
const decreasePage=()=>{
  setCurrentPage(currentPage-1)
}

 return (
    <AppContext.Provider
     value ={{data, loading, search,
                     inputValue, setInputValue,
                     errorMsg, specificData,
                     specificSearch, 
                     increasePage,decreasePage, 
                     currentPage
                 }}>
                 
         {children}
  </AppContext.Provider>  
   )
 }

export const useGlobalContext=()=>{
   return React.useContext(AppContext)
}

export {AppContext, AppProvider}