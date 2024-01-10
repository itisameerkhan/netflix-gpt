import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import './Favorite.scss';
import MovieList from '../MovieList/MovieList';
import { BG_IMG_URL } from '../../utils/constants';

const Favorite = () => {

    const movies = useSelector(store => store.favorite.list)
    return (
        <div className="favorite">
            <img src={BG_IMG_URL} alt="bg-img" className='bg-img-fav' />
            <div className="bg-img-overlay"></div>
            <div className="fav-background"></div>
            <Header />
            <MovieList title={"Favorite"} movies={movies} />
        </div>
    )
}

export default Favorite;