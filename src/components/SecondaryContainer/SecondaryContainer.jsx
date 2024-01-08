import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import './SecondaryContainer.scss';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className="secondary-container">
            <MovieList title={""} movies={movies.addNowPlayingMovies} />
            <MovieList title={"Popular Movies"} movies={movies.addPopularMovies} />
            <MovieList title={"Popular TV Series"} movies={movies?.addTopRatedTV}></MovieList>
            <MovieList title={"Upcoming Movies"} movies={movies?.addUpcomingMovies} />
        </div>
    )
}

export default SecondaryContainer;