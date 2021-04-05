import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <Link to='/' >
                <img className='login__logo' src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button className='login__signinButton'>Sign in</button>
                </form>
                <p>by sign in you agree to amazclone bla bla bla </p>
                <button className='login__registerButton'>Create an amazone account</button>
            </div>
        </div>
    )
}

export default Login
