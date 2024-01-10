import './Body.scss';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Display from '../Display/Display';
import Favorite from '../Favorite/Favorite';

const Body = () => {

    return (
        <Router>
            <div className="body">
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/browse' element={<Browse />}></Route>
                    <Route path='/browse/:movieID' element={<Display />}></Route>
                    <Route path='/browse/favorite' element={<Favorite />} ></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Body;