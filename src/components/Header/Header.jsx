import './Header.scss';
import netflixLogo from '../../assets/NetflixLogo.png';
import { SUPPORTED_LANG } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../utils/configSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleLangChange = (data) => {
        dispatch(changeLanguage(data))
    }

    return (
        <div className="header">
            <img src={netflixLogo} alt="netflix-logo" className='netflix-logo' />
            <select     
                className='header-select'
                onChange={(e) => handleLangChange(e.target.value)}>
                {SUPPORTED_LANG.map((data) => (
                    <option value={data} key={data}>{data}</option>
                ))}
            </select>
        </div>
    )
}

export default Header;