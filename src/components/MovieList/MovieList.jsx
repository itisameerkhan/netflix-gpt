import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

const MovieList = ({title, movies}) => {
    console.log(movies);
    return (
        <div className="movie-list">
            <h1>{title}</h1>
            <div className="movies-card-1">
            
            </div>
        </div>
    )
}

export default MovieList;