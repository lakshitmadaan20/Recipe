import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SingleRecipe from './components/SingleRecipe'
import Home from './Home'
import About from './components/About'
import './style.css'

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path="/about" exact component={About} />
       <Route path="/news/:newsId" exact component={SingleRecipe} />
     </Switch>
    </BrowserRouter>
  )
}
export default Routes