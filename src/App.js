import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import PageNotFound from './PageNotFound'
import Login from "./Login"


function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
          </Route>

          <Route path='/checkout'>
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route component={PageNotFound} />


        </Switch>

      </div>
    </Router>
  );
}

export default App;
