
import React from 'react'
function MainContainer(props){
  
 return(
   <div className="container-fluid main-container">
        <div className="container main">
            <h2 className="text-center">{props.text}</h2>
       </div>
   </div>
   
 )
}

export default MainContainer