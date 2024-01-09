import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTopRatedTV } from '../utils/movieSlice';

const useTopRatedTV = () => {

    const dispatch = useDispatch();
    const topRatedTV = useSelector(store => store.movies.addTopRatedTV);

    const getTopRatedTV = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedTV(json.results));
    }

    useEffect(() => {
        if(!topRatedTV) getTopRatedTV();
    },[])
}

export default useTopRatedTV;