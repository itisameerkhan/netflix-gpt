import BrowseHeader from '../BrowseHeader/BrowseHeader';
import './Browse.scss';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from '../MainContainer/MainContainer';
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div className="browse">
            <BrowseHeader />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;