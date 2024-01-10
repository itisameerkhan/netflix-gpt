import { useParams } from 'react-router-dom';
import './Display.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_IMAGE_CDN } from '../../utils/constants';
import Header from '../Header/Header';
import { useState } from 'react';
import { addFavorite } from '../../utils/favoriteSlice';

const Display = () => {

    const moviesID = useParams().movieID.split('-');
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();
    
    let datas = 'empty';

    if(moviesID[0] === '') datas = useSelector(store => store.movies.addNowPlayingMovies);
    else if(moviesID[0] === 'Popular Movies') datas = useSelector(store => store.movies.addPopularMovies);
    else if(moviesID[0] === 'Popular TV Series') datas = useSelector(store => store.movies.addTopRatedTV);
    else if(moviesID[0] === 'Upcoming Movies') datas = useSelector(store => store.movies.addUpcomingMovies); 
    else if(moviesID[0] == 'Search Results') datas = useSelector(store => store.gpt.movieResults[0]);

    let moviesData = null;

    for(const data of datas) {
        if(data?.id == moviesID[1]) {
            moviesData = data;
            break;
        }
    }

    const handleClick = () => {

        setClick(!click);
        dispatch(addFavorite(moviesData));
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
                        <i 
                            className={`fa-solid fa-heart ${click ? 'clicked' : 'none'}` }
                            onClick={handleClick}></i>                        
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