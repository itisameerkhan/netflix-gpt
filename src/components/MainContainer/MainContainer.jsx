import { useSelector } from 'react-redux';
import './MainContainer.scss';
import VideoBackground from '../VideoBackground/VideoBackground';
import VideoTitle from '../../components/VideoTitle/VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    console.log(movies);
    
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);

    return (
        <div className="main-container">
            <VideoBackground />
            <VideoTitle />
        </div>
    )
}

export default MainContainer;