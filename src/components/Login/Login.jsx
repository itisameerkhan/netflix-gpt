import './Login.scss';
import Header from '../Header/Header';
import { useState } from 'react';

const Login = () => {

    const [signUp, setSignUp] = useState(true);

    const handleClick = () => {
        setSignUp(!signUp);
    }

    return (
        <div className="login">
            <Header />
            <div className="login-form-div">
                <form className='login-form'>
                    <label>{signUp ? "Sign In" : "Sign Up"}</label>
                    <input type="text" placeholder='Username' style={{display: signUp ===true ? 'none' : 'block'}} />
                    <input type="text" placeholder='Email or phone number' />
                    <input type="password" placeholder='Password' />
                    <button className='sign-in-btn'>Sign In</button>
                    <p className='new-to-netflix'>{signUp ? "New to Netflix?" : "Already registered?"} 
                        <span onClick={handleClick}>{signUp ? "Sign up now." : "Sign in now."}</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;