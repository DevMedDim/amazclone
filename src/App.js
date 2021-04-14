import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import PageNotFound from './PageNotFound'
import Login from "./Login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import Payment from "./Payment"


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    // runs only once, when the app component loads... 
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS :', authUser);
      if (authUser){
        // the user just logged in / the user was logged in
      
dispatch({
  type: 'SET_USER',
  user: authUser
})
      }
      else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  },[dispatch])

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
            <Route path='/payment'>
              <Header></Header>
              <Payment></Payment>
            </Route>

            <Route component={PageNotFound} />


          </Switch>

        </div>
      </Router>
    );
  }

export default App;
