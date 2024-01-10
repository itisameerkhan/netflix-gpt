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
import Footer from '../Footer/Footer';

const Browse = () => {

    const showGPT = useSelector(store => store.gpt.showGPTSearch);
    const movies = useSelector(store => store.movies.addNowPlayingMovies);

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
                    {movies && <Footer />}
                </>)
            }
        </div>
    )
}

export default Browse;