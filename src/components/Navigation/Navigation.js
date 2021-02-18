import React, {Component} from 'react';
import VideoList from '../VideoList/VideoList';
import Videos from '../Videos/Videos'
import Youtube from '../../API/Youtube';
import './Navigation.css';
import SearchBar from '../SearchBar/SearchBar';

class Nav extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

handleSubmit = async (searchWord) => {
const respond = await Youtube.get('search', { params: {q: searchWord}});

console.log(respond.data.items);
this.setState({videos: respond.data.items, selectedVideo: respond.data.items[0]});
}

onSelect = (videos) => {
    this.setState({...this.state , selectedVideo:videos.videos});
}

render() {
    const {videos, selectedVideo} = this.state;
    return(
        <div className="outerNav">
            <nav className="Navigation">
                {/* Hamburger Menu */}
                <h4>Hamburger Menu</h4>
                {/* Logo */}
                <h4 className="Logo">Logo</h4>
            <SearchBar onFormSubmit={this.handleSubmit}/>
            {/* other Icons */}
            <h4>Other Icons</h4>
            </nav>
            <Videos videos={selectedVideo}/>
            <VideoList videos={videos} onSelect={this.onSelect}/>
        </div>
        
    );
}
}

export default Nav;