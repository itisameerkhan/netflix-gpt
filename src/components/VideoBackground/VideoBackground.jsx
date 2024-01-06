import useMovieTrailer from '../../hooks/useMovieTrailer';
import './VideoBackground.scss';
import { useSelector } from 'react-redux';


const VideoBackground = ({movieId}) => {

    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    console.log(trailerVideo);

    return (
        <div className="video-background">
           <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=a9xa1HFT10T71m_V}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground;