import { useRef } from 'react';
import './GPTSearchBar.scss';
import openai from '../../utils/openai';
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addGPTMovieResult } from '../../utils/gptSlice';
import { lang } from '../../utils/languageConstants';

const GPTSearchBar = () => {

    const searchText = useRef(null);
    const dispatch = useDispatch();
    const currentLang = useSelector(store => store.config.lang);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        return json.results;
    }

    const handleGPTSearch = async () => {
        // console.log(searchText.current.value);
        // make an API call to GPT API and get movie results

        // const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies. comma separated. like the example result given ahead. Example Result: Ironman, Spiderman, Avengers, Taxi driver, Titanic";

        // const getResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        // });

        // if(!getResults.choices) { }
        // const gptMovies = getResults.choices?.[0]?.message?.content.split(',');

        // const gptMovies = ["Iron man", "Spider man", "Thor", "Hulk", "Avengers"];

        const gptMovies = [searchText.current.value];

        const promiseArray = gptMovies.map((data) => searchMovieTMDB(data));

        const TMDBResults = await Promise.all(promiseArray);
        dispatch(addGPTMovieResult({movieNames: gptMovies, movieResults: TMDBResults}));
        // console.log(TMDBResults);
    }


    return (
        <div className="gpt-search-bar">
            <form 
                className='gpt-form'
                onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder={lang[currentLang].gpt.desc}
                    className='gpt-input'
                    ref={searchText}
                />
                <button 
                onClick={handleGPTSearch}>
                    {lang[currentLang].gpt.search}
                </button>
            </form>
        </div>
    );
}

export default GPTSearchBar;