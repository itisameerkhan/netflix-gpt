import './Login.scss';
import { useRef, useState } from 'react';
import { validateEmail, validatePassword, validateUsername } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import BrowseHeader from '../BrowseHeader/BrowseHeader';


const Login = () => {

    const [signIn, setSignIn] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorStatus, setErrorStatus] = useState([true, true, true]);
    const [firebaseAuth, setFirebaseAuth] = useState([false, null]);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick = () => {
        setSignIn(!signIn);
    }

    const handleButtonClick = () => {
       setErrorStatus([validateEmail(email.current.value),
        validatePassword(password.current.value),
        validateUsername(username.current.value)]);

        if(!validateEmail(email.current.value) || !validatePassword(password.current.value)) {
            console.log('invalid credentials');
            setLoader(false);
            return
        };

        if(!signIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: username.current.value, 
                    photoURL: "https://avatars.githubusercontent.com/u/106725517?v=4"
                }).then(() => {
                    const {uid, email, displayName, photoURL } = auth.currentUser;     
                    console.log('auth current user -> ' + auth.currentUser);   
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    setLoader(false);
                    // navigate('/browse');
                }).catch((error) => {
                    setLoader(false);
                    // navigate('/error');
                    console.log(error.message);
                });

                setFirebaseAuth([false, null]);
            })
            .catch((error) => {
                setLoader(false);
                setFirebaseAuth([true, "Sorry, This email is already in use. Please try again with another email address or login with the account."]);
                // navigate('/');
            });
        } else {
            //Sign in logic 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                setFirebaseAuth([false, null]);
                setLoader(false);
                // navigate('/browse');
            })
            .catch((error) => {
                setFirebaseAuth([true, `Sorry, we can't find an account with this email address. Please try again or create a new account.`]);
                setLoader(false);
                // navigate('/');
            });
        }
    }

    return (
        <div className="login">
            {/* <Header /> */}
            <BrowseHeader />
            {/* <div className="login-form-overlay"></div> */}
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
                        onClick={() => {
                            setLoader(true);
                            handleButtonClick();
                        }}>
                            {loader === true ? 
                            <span className="loader"></span> :
                            <span>{signIn === true ? "Sign In" : "Sign Up"}</span> }
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