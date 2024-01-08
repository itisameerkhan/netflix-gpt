import './Login.scss';
import { useRef, useState } from 'react';
import { validateEmail, validatePassword, validateUsername } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import BrowseHeader from '../BrowseHeader/BrowseHeader';
import { lang } from '../../utils/languageConstants';

const Login = () => {

    const [signIn, setSignIn] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorStatus, setErrorStatus] = useState([true, true, true]);
    const [firebaseAuth, setFirebaseAuth] = useState([false, null]);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const currentLang = useSelector(store => store.config.lang);

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
                setFirebaseAuth([true, lang[currentLang].login.account_already_found]);
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
                setFirebaseAuth([true, lang[currentLang].login.account_not_found]);
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
                    <label>{signIn ? lang[currentLang].login.signIn : lang[currentLang].login.signOut}</label>
                    <input 
                        type="text" 
                        placeholder= {lang[currentLang].login.username}  // 'Username' 
                        style={{display: signIn === true ? 'none' : 'block'}}
                        ref={username} 
                        className={`${errorStatus[2] ? 'none' : 'error-line'} password-int`}
                    />
                    {!signIn && !errorStatus[2] && <p className='error-message'>{lang[currentLang].login.valid_username}</p>}
                    <input 
                        type="text" 
                        placeholder= {lang[currentLang].login.emailaddress}
                        ref={email}
                        className={`${errorStatus[0] ? 'none' : 'error-line'}`}
                    />
                    {errorStatus[0] === false &&  <p className='error-message'>{lang[currentLang].login.valid_email}</p>}
                    <div className="password-input">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            placeholder= {lang[currentLang].login.password}
                            ref={password} 
                            className={`${errorStatus[1] ? 'none' : 'error-line'} password-int`}
                        />
                        <span 
                            onClick={() => setPasswordVisible(!passwordVisible)}>
                                {passwordVisible ? lang[currentLang].login.hide : lang[currentLang].login.show}
                        </span>
                    </div>
                    {errorStatus[1] === false && <p className='error-message'>{lang[currentLang].login.valid_pass}</p>}
                    <button 
                        className='sign-in-btn'
                        onClick={() => {
                            setLoader(true);
                            handleButtonClick();
                        }}>
                            {loader === true ? 
                            <span className="loader"></span> :
                            <span>{signIn === true ? lang[currentLang].login.signIn : lang[currentLang].login.signOut }</span> }
                    </button>
                    <p className='new-to-netflix'>{signIn ? lang[currentLang].login.new_to_netflix : lang[currentLang].login.already_registered } 
                        <span onClick={handleClick}>{signIn ? lang[currentLang].login.sign_up_now : lang[currentLang].login.sign_in_now}</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;