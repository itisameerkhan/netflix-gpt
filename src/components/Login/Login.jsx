import './Login.scss';
import Header from '../Header/Header';
import { useRef, useState } from 'react';
import { validateEmail, validatePassword, validateUsername } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';


const Login = () => {

    const [signIn, setSignIn] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorStatus, setErrorStatus] = useState([true, true, true]);
    const [firebaseAuth, setFirebaseAuth] = useState([false, null]);

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    console.log(firebaseAuth);

    const handleClick = () => {
        setSignIn(!signIn);
    }

    const handleButtonClick = () => {
       setErrorStatus([validateEmail(email.current.value),
        validatePassword(password.current.value),
        validateUsername(username.current.value)]);

        if(!validateEmail(email.current.value) || !validatePassword(password.current.value)) return;

        if(!signIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                setFirebaseAuth([false, null]);
            })
            .catch((error) => {
                setFirebaseAuth([true, "Sorry, This email is already in use. Please try again with another email address or login with the account."]);
            });
        } else {
            //Sign in logic 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                setFirebaseAuth([false, null]);
            })
            .catch((error) => {
                setFirebaseAuth([true, `Sorry, we can't find an account with this email address. Please try again or create a new account.`]);
                // console.log('login falid');
            });
        }
    }

    return (
        <div className="login">
            <Header />
            <div className="login-form-div">
                <form className='login-form' onSubmit={(e) => e.preventDefault()}>
                {firebaseAuth[0] && <p className='error-login-msg'>{firebaseAuth[1]}</p>}
                    <label>{signIn ? "Sign In" : "Sign Up"}</label>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        style={{display: signIn === true ? 'none' : 'block'}}
                        ref={username} 
                        className={`${errorStatus[2] ? 'none' : 'error-line'} password-int`}
                    />
                    {!signIn && !errorStatus[2] && <p className='error-message'>Please enter a valid username</p>}
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
                    {errorStatus[1] === false && <p className='error-message'>Your password must contain between 6 and 60 characters.</p>}
                    <button 
                        className='sign-in-btn'
                        onClick={handleButtonClick}>
                            {signIn === true ? "Sign In" : "Sign Up"}
                    </button>
                    <p className='new-to-netflix'>{signIn ? "New to Netflix?" : "Already registered?"} 
                        <span onClick={handleClick}>{signIn ? "Sign up now." : "Sign in now."}</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;