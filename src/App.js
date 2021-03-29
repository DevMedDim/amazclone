import React from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import PageNotFound from './PageNotFound'


function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
             
          
          <Route path='/checkout' component={Checkout} />
          <Route component={PageNotFound} />
            
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
