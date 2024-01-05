import './Body.scss';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        } else {
            dispatch(removeUser());
        }
        });
    },[])

    return (
        <Router>
            <div className="body">
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/browse' element={<Browse />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Body;