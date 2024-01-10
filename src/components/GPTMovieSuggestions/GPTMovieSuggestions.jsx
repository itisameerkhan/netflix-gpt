import { useSelector } from 'react-redux';
import './GPTMovieSuggestions.scss';
import MovieList from '../MovieList/MovieList';

const GPTMovieSuggestions = () => {

    const  { movieNames, movieResults } = useSelector(store => store.gpt);
    if(!movieNames) return "";

    return (
        <div className="gpt-movie-suggestions">
            {movieNames.map((data) => (
                <MovieList
                    key={data} 
                    title={"Search Results"}
                    movies={movieResults[0]} />
            ))}
        </div>
    )
}

export default GPTMovieSuggestions;