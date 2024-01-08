import BrowseHeader from '../BrowseHeader/BrowseHeader';
import './Browse.scss';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from '../MainContainer/MainContainer';
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedTV from '../../hooks/useTopRatedTV';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import GPTSearch from '../GPTSearch/GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

    const showGPT = useSelector(store => store.gpt.showGPTSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedTV();
    useUpcomingMovies();

    return (
        <div className="browse">
            <BrowseHeader />
            {showGPT ? 
               ( <GPTSearch />) : 
                (<>
                    <MainContainer />
                    <SecondaryContainer />
                </>)
            }
        </div>
    )
}

export default Browse;