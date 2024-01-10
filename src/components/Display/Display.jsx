import { useParams } from 'react-router-dom';
import './Display.scss';
import { useSelector } from 'react-redux';
import { TMDB_IMAGE_CDN } from '../../utils/constants';
import Header from '../Header/Header';

const Display = () => {

    const movieID = useParams();
    console.log(Object.keys(movieID).length == 0);

    const moviesID = useParams().movieID.split('-');
    let datas = '';

    if(moviesID[0] === '') datas = useSelector(store => store.movies.addNowPlayingMovies);
    else if(moviesID[0] === 'Popular Movies') datas = useSelector(store => store.movies.addPopularMovies);
    else if(moviesID[0] === 'Popular TV Series') datas = useSelector(store => store.movies.addTopRatedTV);
    else if(moviesID[0] === 'Upcoming Movies') datas = useSelector(store => store.movies.addUpcomingMovies); 

    let moviesData = null;

    for(const data of datas) {
        if(data?.id == moviesID[1]) {
            moviesData = data;
            break;
        }
    }

    return (
        <div className="display-container">
            <Header />
            <img 
                src={TMDB_IMAGE_CDN + moviesData?.backdrop_path} 
                alt="backdrop" 
                className='display-bg'
            />
            <div className="bg-overlay-1"></div>
            <div className="display-inner">
                <div className="display-left">
                    <p className="title">{moviesData?.original_name || moviesData?.original_title}</p>
                    <p className="first-air-date">{moviesData?.first_air_date || moviesData?.release_date}</p>
                    <p className="overview">{moviesData?.overview}</p>
                    <div className="description">
                        <p>
                        <span className="material-symbols-outlined">star</span>
                        {moviesData?.popularity}
                        </p>
                        <p>
                        <span className="material-symbols-outlined">thumb_up</span>
                        {moviesData?.vote_average}
                        </p>
                        <p>
                        <span className="material-symbols-outlined">thumbs_up_down</span>
                        {moviesData?.vote_count}
                        </p>
                        <p>
                        <span className="material-symbols-outlined fav">favorite</span>
                        </p>
                    </div>
                </div>
                <div className="display-right">
                    <img 
                        src={TMDB_IMAGE_CDN + moviesData?.poster_path} 
                        alt="poster"
                        className='display-poster' />
                </div>
            </div>
        </div>
    )
}

export default Display;