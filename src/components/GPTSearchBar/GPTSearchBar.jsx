import './GPTSearchBar.scss';

const GPTSearchBar = () => {
    return (
        <div className="gpt-search-bar">
            <form className='gpt-form'>
                <input 
                    type="text" 
                    placeholder='What would you like to watch today?'
                    className='gpt-input'
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default GPTSearchBar;