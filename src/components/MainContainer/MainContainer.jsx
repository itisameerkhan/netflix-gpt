import { useSelector } from 'react-redux';
import './MainContainer.scss';
import VideoBackground from '../VideoBackground/VideoBackground';
import VideoTitle from '../../components/VideoTitle/VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.addNowPlayingMovies);
    
    if(!movies) return;
    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="main-container">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
            <div className="overlay-container"></div>
        </div>
    )
}

export default MainContainer;