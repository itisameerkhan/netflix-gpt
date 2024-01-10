import './Body.scss';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Display from '../Display/Display';

const Body = () => {

    return (
        <Router>
            <div className="body">
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/browse' element={<Browse />}></Route>
                    <Route path='/browse/:movieID' element={<Display />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Body;