import './Footer.scss';
import akLogo from '../../assets/aklogomain.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-1 footer">
                <a href="https://github.com/itisameerkhan" target='_blank'>
                <img src={akLogo} alt="ak-logo" className='ak-logo-footer' />
                </a>
                <p>Created by Ameer khan</p>
            </div>
            <div className="footer-2 footer">
                <p>About us</p>
                <p>Career</p>
                <p>Privacy policy</p>
                <p>Documentation</p>
            </div>
            <div className="footer-3 footer">
                <p>Media</p>
                <p>Terms of use</p>
                <p>Contact us</p>
            </div>
            <div className="footer-4 footer">
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal notices</p>
            </div>
        </div>
    )
}

export default Footer;