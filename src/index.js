import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyAp4hDsbDHNYF05Hk4cMF2jW2YtZ2drXsM';

class App extends Component {

    constructor(props) {
        super(props);


        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'Bryan'}, (videos) => {
            this.setState({videos});
            console.log(this.state.videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar /> 
                <VideoDetail video={this.state.videos[0]} />     
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.start'));