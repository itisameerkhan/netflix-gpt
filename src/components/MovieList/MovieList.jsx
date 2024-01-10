import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const MovieList = ({title, movies}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const calculateWindowWith = () => { setWindowWidth(window.innerWidth) };
        calculateWindowWith();
        window.addEventListener('resize',calculateWindowWith);

        return () => {
            window.addEventListener('resize', calculateWindowWith);
        }

    },[]);

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
                    fixedWidth: `${windowWidth >= 650 ? 230 : 5}`
                }}>
                    {movies.map((movie) => (
                        <SplideSlide key={movie?.id}>
                            <Link to={`${title}-${movie.id}`}>
                                <MovieCard key={movie?.id} data={movie} />
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default MovieList;