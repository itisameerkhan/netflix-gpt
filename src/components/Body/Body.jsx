import './Body.scss';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Body = () => {

    const dispatch = useDispatch();

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