import React, { Component } from 'react';
import Youtube from '../../API/Youtube';
import Videos from '../Videos/Videos';
import VideoList from '../VideoList/VideoList';
import './CardBox.css';

class CardBox extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    Cards = [
        {
            searchTerm: "Nutrition",
            Title: "Health",

        },
        {
            searchTerm: "Makeup",
            Title: "Beauty"
        },
        {
            searchTerm: "Video Games",
            Title: "Gamers"
        },
        {
            searchTerm: "Pranks",
            Title: "Pranks"
        },
        {
            searchTerm: "DIY",
            Title: "DIY"
        },
        {
            searchTerm: "Try on haul",
            Title: "Fashion"
        }
    ]

    handleSubmit = async (searchTerm) => {
        const results = await Youtube.get('videos/search', { params: { q: searchTerm } });
        this.setState({ videos: results.data.items, selectedVideo: results.data.items[0] });
        console.log(results.data.items)
        document.querySelector('.outerWrap').style.display = 'none';
    }

    onSelect = (videos) => {
        this.setState({ ...this.state, selectedVideo: videos.videos });
    }

    render() {
        const { videos, selectedVideo } = this.state;
        return (
            <div className="card-container">
                <div className="outerWrap">

                    {this.Cards.map(card => {
                        return <div key={card.Title} className="cardbox" onClick={() => this.handleSubmit(card.searchTerm)}>{card.Title}</div>
                    })}
                </div>
                <Videos videos={selectedVideo} />
                <VideoList videos={videos} onSelect={this.onSelect} />
            </div>
        )
    }
}

export default CardBox; 