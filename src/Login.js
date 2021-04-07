import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        //firebase stuff
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        //firebase stuff
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //created acc new user
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
                ;
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/' >
                <img className='login__logo' src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='login__signinButton'
                        onClick={signIn}>
                        Sign in
                        </button>
                </form>
                <p>by sign in you agree to amazclone bla bla bla </p>
                <button
                    onClick={register}
                    className='login__registerButton'
                >Create an amazone account</button>
            </div>
        </div>
    )
}

export default Login
