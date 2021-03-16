import React, { Component } from "react";
import Nav from "../components/Navigation/Navigation";
import VideoList from "../components/VideoList/VideoList";
import Videos from "../components/Videos/Videos";
import Youtube from "../API/Youtube";
import SearchBar from "../components/SearchBar/SearchBar";
import CardBox from "../components/CardBox/CardBox";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Home.css";

class Home extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        voiceSearch: "",
    };

    handleSubmit = async (searchWord) => {
        const respond = await Youtube.get("videos/search", { params: { q: searchWord } });

        console.log(respond.data.items);
        this.setState({
            videos: respond.data.items,
            selectedVideo: respond.data.items[0],
        });
        document.querySelector(".outerWrap").style.display = "none";
    };

    onSelect = (videos) => {
        this.setState({ ...this.state, selectedVideo: videos.videos });
    };
    render() {
        const { videos, selectedVideo } = this.state;
        return (
            <React.Fragment>
                <Nav
                    onRecord={(msg) => {
                        this.setState({ voiceSearch: msg });
                    }}
                />
                <SearchBar
                    value={this.state.voiceSearch}
                    onFormSubmit={this.handleSubmit}
                />
                <Videos videos={selectedVideo} />
                <VideoList videos={videos} onSelect={this.onSelect} />
                <div className="app-page">
                    <Sidebar />
                    <CardBox />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
