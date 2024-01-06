import { useEffect } from 'react';
import BrowseHeader from '../BrowseHeader/BrowseHeader';
import './Browse.scss';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from '../MainContainer/MainContainer';
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div className="browse">
            <BrowseHeader />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;