import './Header.scss';
import netflixLogo from '../../assets/NetflixLogo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={netflixLogo} alt="netflix-logo" className='netflix-logo' />
        </div>
    )
}

export default Header;