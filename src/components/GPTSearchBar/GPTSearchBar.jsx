import { useRef } from 'react';
import './GPTSearchBar.scss';
import openai from '../../utils/openai';

const GPTSearchBar = () => {

    const searchText = useRef(null);

    const handleGPTSearch = async () => {
        // console.log(searchText.current.value);
        // make an API call to GPT API and get movie results

        const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies. comma separated. like the example result given ahead. Example Result: Ironman, Spiderman, Avengers, Taxi driver, Titanic";

        const getResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        // if(!getResults.choices) { }
        console.log(getResults.choices?.[0]?.message?.content);
    }

    return (
        <div className="gpt-search-bar">
            <form 
                className='gpt-form'
                onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder='What would you like to watch today?'
                    className='gpt-input'
                    ref={searchText}
                />
                <button 
                onClick={handleGPTSearch}>
                    Search
                </button>
            </form>
        </div>
    );
}

export default GPTSearchBar;