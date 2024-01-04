import './Login.scss';
import Header from '../Header/Header';
import { useRef, useState } from 'react';
import { checkValidData } from '../../utils/validate';

const Login = () => {

    const [signUp, setSignUp] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick = () => {
        setSignUp(!signUp);
    }

    const handleButtonClick = () => {
        console.log(email);
        console.log(password);
        // checkValidData();
    }

    return (
        <div className="login">
            <Header />
            <div className="login-form-div">
                <form className='login-form' onSubmit={(e) => e.preventDefault()}>
                    <label>{signUp ? "Sign In" : "Sign Up"}</label>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        style={{display: signUp ===true ? 'none' : 'block'}}
                        ref={username} 
                    />
                    <input type="text" placeholder='Email address' ref={email} />
                    <div className="password-input">
                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' ref={password} className='password-int' />
                        <span
                            onClick={() => setPasswordVisible(!passwordVisible)}>
                                {passwordVisible ? "HIDE" : "SHOW"}
                        </span>
                    </div>
                    <button 
                        className='sign-in-btn'
                        onClick={handleButtonClick}>
                            {signUp === true ? "Sign In" : "Sign Up"}
                    </button>
                    <p className='new-to-netflix'>{signUp ? "New to Netflix?" : "Already registered?"} 
                        <span onClick={handleClick}>{signUp ? "Sign up now." : "Sign in now."}</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;