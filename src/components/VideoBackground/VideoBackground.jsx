import useMovieTrailer from '../../hooks/useMovieTrailer';
import './VideoBackground.scss';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {

    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    return (
        <div className="video-background">
           <iframe 
                className='video-background-iframe'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&controls=0`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
            </iframe>
        </div>
        
    )
}

export default VideoBackground;