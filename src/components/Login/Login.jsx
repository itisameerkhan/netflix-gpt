import './Login.scss';
import Header from '../Header/Header';
import { useRef, useState } from 'react';
import { validateEmail, validatePassword, validateUsername } from '../../utils/validate';

const Login = () => {

    const [signUp, setSignUp] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorStatus, setErrorStatus] = useState([true, true, true]);

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick = () => {
        setSignUp(!signUp);
    }

    const handleButtonClick = () => {
       setErrorStatus([validateEmail(email.current.value), validatePassword(password.current.value), validateUsername(username.current.value)]);
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
                        style={{display: signUp === true ? 'none' : 'block'}}
                        ref={username} 
                        className={`${errorStatus[2] ? 'none' : 'error-line'} password-int`}
                    />
                    {!signUp && !errorStatus[2] && <p className='error-message'>Please enter a valid username</p>}
                    <input 
                        type="text" 
                        placeholder='Email address' 
                        ref={email}
                        className={`${errorStatus[0] ? 'none' : 'error-line'}`}
                    />
                    {errorStatus[0] === false &&  <p className='error-message'>Please enter a valid email address</p>}
                    <div className="password-input">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            placeholder='Password' ref={password} 
                            className={`${errorStatus[1] ? 'none' : 'error-line'} password-int`}
                        />
                        <span 
                            onClick={() => setPasswordVisible(!passwordVisible)}>
                                {passwordVisible ? "HIDE" : "SHOW"}
                        </span>
                    </div>
                    {errorStatus[1] === false && <p className='error-message'>Your password must contain between 4 and 60 characters.</p>}
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