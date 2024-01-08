import GPTMovieSuggestions from '../GPTMovieSuggestions/GPTMovieSuggestions';
import GPTSearchBar from '../GPTSearchBar/GPTSearchBar';
import './GPTSearch.scss';

const GPTSearch = () => {
    return (
        <div className="gpt-search">
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch;