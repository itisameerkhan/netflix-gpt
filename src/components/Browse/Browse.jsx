import BrowseHeader from '../BrowseHeader/BrowseHeader';
import './Browse.scss';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from '../MainContainer/MainContainer';
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedTV from '../../hooks/useTopRatedTV';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import GPTSearch from '../GPTSearch/GPTSearch';

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedTV();
    useUpcomingMovies();

    return (
        <div className="browse">
            <BrowseHeader />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;