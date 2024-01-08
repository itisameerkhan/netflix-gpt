import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTopRatedTV } from '../utils/movieSlice';

const useTopRatedTV = () => {

    const dispatch = useDispatch();

    const getTopRatedTV = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTopRatedTV(json.results));
    }

    useEffect(() => {
        getTopRatedTV();
    },[])
}

export default useTopRatedTV;