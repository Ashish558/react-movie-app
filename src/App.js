

import React from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Home'
import SingleMovie from './components/SingleMovie'
import {AnimatePresence} from 'framer-motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faStar, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faArrowLeft)

function App(){
  const location = useLocation()
  
return(
<>
  <Navbar />

      <Switch>
         <Route path="/" exact component={Home} />       
          <Route path="/singleMovie" component={SingleMovie} />       
       </Switch>

</>
)
  
}

export default App;