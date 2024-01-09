import './MovieCard.scss';
import { TMDB_IMAGE_CDN } from '../../utils/constants';

const MovieCard = ({data}) => {

    return data?.poster_path && (
        <div className="movie-card">
            <img 
                src={TMDB_IMAGE_CDN + data?.poster_path} 
                alt="movie-poster"
                className='movie-card-1-img'
            />
            <div className="img-card-desc">
                <div className="inside-img-card">
                <div className="inside-left">
                        <span className="material-symbols-outlined play-arrow">play_arrow</span>
                        <span className="material-symbols-outlined">add</span>
                        <i className="fa-solid fa-thumbs-up"></i>                </div>
                <span className="material-symbols-outlined expand-more">expand_more</span>
                </div>
                <p className='vote-avg'>{(data.vote_average).toFixed(1)} IMDB</p>
            </div>
        </div>
    )
}

export default MovieCard;