import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import './SecondaryContainer.scss';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className="secondary-container">
            <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        </div>
    )
}

export default SecondaryContainer;