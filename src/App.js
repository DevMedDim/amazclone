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
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders"

const promise = loadStripe("pk_test_51IgTqcAqHJqpZj6kIPjC6U4cSJVqDiH4Y2YpjBQmAg1fUDUtzfe673E2Mys2XaAms0lp12jVs3nYwMoNCNx299sm00Jueky3cG");
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // runs only once, when the app component loads... 
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS :', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [dispatch])

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
          <Header />
            <Orders />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route component={PageNotFound} />


        </Switch>

      </div>
    </Router>
  );
}

export default App;
