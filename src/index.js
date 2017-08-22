import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAp4hDsbDHNYF05Hk4cMF2jW2YtZ2drXsM';

const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    ) 
}

ReactDOM.render(<App />, document.querySelector('.start'));