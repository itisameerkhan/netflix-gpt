import './MovieCard.scss';
import { TMDB_IMAGE_CDN } from '../../utils/constants';

const MovieCard = ({data}) => {
    return (
        <div className="movie-card">
            <img 
                src={TMDB_IMAGE_CDN + data?.poster_path} 
                alt="movie-poster"
                className='movie-card-1-img'
            />
        </div>
    )
}

export default MovieCard;