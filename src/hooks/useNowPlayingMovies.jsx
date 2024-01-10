import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowplayingMovies = useSelector(store => store.movies.addNowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        // console.log(json.results);
    }

    useEffect(() => {
        if(!nowplayingMovies) getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;