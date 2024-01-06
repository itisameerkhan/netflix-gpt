import './BrowseHeader.scss';
import netflixLogo from '../../assets/NetflixLogo.png';
import avatar from '../../assets/avatar.png';
import { useState } from 'react';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { addUser, removeUser } from '../../utils/userSlice';
import { useDispatch } from 'react-redux';


const BrowseHeader = () => {

    const [avatarHover, setAvatarHover] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // navigate('/');
        }).catch((error) => {
            navigate('/error')
        });
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubsribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate('/browse');
        } else {
            dispatch(removeUser());
            navigate('/')
        }
        });

        // unsubsribe when component unmount
        return () => unsubsribe();

    },[])

    if(!user) return <Header />
    else return (
        <div className="browse-header">
            <div className="browse-header-left">
                <img src={netflixLogo} alt="netflix-logo" className='netflix-logo' />
                <div className="browse-header-nav">
                    <div className="browse-header-nav-ul">
                        <li className='home-li'>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>News & Popular</li>
                        <li>My List</li>
                    </div>
                </div>
            </div>
            <div className="browse-header-right">
                <i className="fa-solid fa-magnifying-glass"></i>
                <div 
                    className="avatar-div"
                    onMouseEnter={() => setAvatarHover(true)}
                    onMouseLeave={() => setAvatarHover(false)} >
                    <img src={avatar} alt="avatar" className='browse-avatar' />
                    <i className={`fa-solid ${avatarHover ? 'fa-sort-up' : 'fa-sort-down'}`}></i>
                    <div 
                        className="browse-sign-in"
                        style={{display: `${avatarHover ? 'block' : 'none'}`}}>
                        <p onClick={handleSignOut}>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseHeader;