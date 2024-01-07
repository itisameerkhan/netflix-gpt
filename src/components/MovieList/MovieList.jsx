import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

const MovieList = ({title, movies}) => {
    return movies &&  (
        <div className="movie-list">
            <h1>{title}</h1>
            <div className="movies-cards-1">
                {movies.map((movie) => (
                    <MovieCard data={movie} key={movie?.id} />
                ))}
            </div>
        </div>
    )
}

export default MovieList;