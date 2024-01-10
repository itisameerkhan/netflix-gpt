import './BrowseHeader.scss';
import netflixLogo from '../../assets/NetflixLogo.png';
import avatar from '../../assets/avatar.png';
import { useState } from 'react';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { addUser, removeUser } from '../../utils/userSlice';
import { useDispatch } from 'react-redux';
import { toggleGPTSearchView } from '../../utils/gptSlice';
import { SUPPORTED_LANG } from '../../utils/constants';
import { changeLanguage } from '../../utils/configSlice';
import { lang } from '../../utils/languageConstants';


const BrowseHeader = () => {

    const [avatarHover, setAvatarHover] = useState(false);
    const [homeNavRes, setHomeNavRes] = useState(false);
    const [windoWidth, setWindowWidth] = useState(window.innerWidth); 
    const [windowScroll, setWindowScroll] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const gptSearch = useSelector(store => store.gpt.showGPTSearch);
    const currentLang = useSelector(store => store.config.lang)
    const dispatch = useDispatch();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // navigate('/');
        }).catch((error) => {
            navigate('/error')
        });
    }

    const movieID = useParams();

    useEffect(() => {
        const auth = getAuth();
        const unsubsribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            if(Object.keys(movieID).length == 0) navigate('/browse')

        } else {
            dispatch(removeUser());
            navigate('/');
        }
        });

        const calculateWidth = () => {  setWindowWidth(window.innerWidth); }

        window.addEventListener('resize', calculateWidth);

        const handleScroll = () => { setWindowScroll(window.scrollY > 100) };

        setWindowScroll();

        window.addEventListener('scroll', handleScroll);

        // unsubsribe when component unmount
        return () => {
            unsubsribe();
            window.removeEventListener('resize', calculateWidth);
            window.removeEventListener('scroll', handleScroll)
        }

    },[])

    const handleGPTButtonClick = () => {
        dispatch(toggleGPTSearchView());
    }

    const handleLangChange = (data) => {
        dispatch(changeLanguage(data))
    }

    const username = useSelector((store) => store.user?.displayName);

    if(!user) return <Header />
    else return (
        <div className={`browse-header ${windowScroll ? 'scrolled' : 'none'}`}>
            <div className="browse-header-left">
                <Link to={'/browse'}>
                    <img src={netflixLogo} alt="netflix-logo" className='netflix-logo' />
                </Link>
                <div className="browse-header-nav">
                    <div className="browse-header-nav-ul">
                        <li     
                            className='home-li'
                            onClick={() => setHomeNavRes(!homeNavRes)}>
                                {lang[currentLang].main.home}
                                <i className={`fa-solid ${homeNavRes ? 'fa-sort-up' : 'fa-sort-down'} home-li-arrow`}></i>
                        </li>
                        <div 
                            className="li-div-1"
                            style={{display: `${windoWidth <= 900 ? (homeNavRes ? 'flex' : 'none') : 'flex'}`}}>
                            <li>{lang[currentLang].main.tv_shows}</li>
                            <li>{lang[currentLang].main.movies}</li>
                            <Link to={'/browse/favorite'}>
                                <li>{lang[currentLang].main.my_list}</li>
                            </Link>
                            <li>
                                <select 
                                    className='header-select'
                                    onChange={(e) => handleLangChange(e.target.value)}>
                                    {SUPPORTED_LANG.map((data) => (
                                        <option value={data} key={data}>{data}</option>
                                    ))}
                                </select>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="browse-header-right">
                <p 
                    className={`gpt-search-btn ${gptSearch ? 'gpt-btn-selected' : 'none'}`}
                    onClick={handleGPTButtonClick}
                >GPT</p>
                <div 
                    className="avatar-div"
                    onMouseEnter={() => setAvatarHover(true)}
                    onMouseLeave={() => setAvatarHover(false)} >
                    <img src={avatar} alt="avatar" className='browse-avatar' />
                    <i className={`fa-solid ${avatarHover ? 'fa-sort-up' : 'fa-sort-down'}`}></i>
                    <div 
                        className="browse-sign-in"
                        style={{display: `${avatarHover ? 'block' : 'none'}`}}>
                        <span>{lang[currentLang].main.hi} {username} !</span>
                        <p onClick={handleSignOut}>{lang[currentLang].main.sign_out}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseHeader;