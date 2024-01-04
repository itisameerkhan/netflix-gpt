import './Login.scss';
import Header from '../Header/Header';
import { TextField } from '@mui/material';

const Login = () => {
    return (
        
        <div className="login">
            <Header />
            <div className="login-form-div">
                <form className='login-form'>
                    <label>Sign In</label>
                    <input type="text" placeholder='Email or phone number' />
                    <input type="password" placeholder='Password' />
                    <button className='sign-in-btn'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;