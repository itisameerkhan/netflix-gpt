import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const MovieList = ({title, movies}) => {
    return movies &&  (
        <div className="movie-list">
            <p className='title-h1'>{title}</p>
            <div className="movies-cards-1">
                <Splide options={{
                    pagination:false,
                    type:'loop',
                    perPage:6,
                    perMove: 1,
                    gap:'1rem',
                }}>
                    {movies.map((movie) => (
                        <SplideSlide key={movie?.id}>
                            <MovieCard key={movie?.id} data={movie} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default MovieList;