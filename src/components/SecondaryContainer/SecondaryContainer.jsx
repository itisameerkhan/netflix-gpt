import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import './SecondaryContainer.scss';
import { lang } from '../../utils/languageConstants';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    const currentLang = useSelector(store => store.config.lang);

    if(!movies) return <MovieSkeleton />

    return (
        <div className="secondary-container">
            <MovieList title={""} movies={movies.addNowPlayingMovies} />
            <MovieList title={lang[currentLang].main.popular_movies} movies={movies.addPopularMovies} />
            <MovieList title={lang[currentLang].main.popular_tv} movies={movies?.addTopRatedTV}></MovieList>
            <MovieList title={lang[currentLang].main.upcoming_movies} movies={movies?.addUpcomingMovies} />
        </div>
    )
}

export default SecondaryContainer;