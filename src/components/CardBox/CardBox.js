import React, { Component } from 'react';
import Youtube from '../../API/Youtube';
import './CardBox.css';

class CardBox extends Component {

    state = {
        video: "", 
        selectedVideo: null
    }

        Cards = [
     {
        searchTerm: "Nutrition", 
        Title: "Health",

     }
    ]

    handleSubmit = async (searchTerm) => {
        const results = await Youtube.get('search', { params: {q: searchTerm}});
        console.log(searchTerm)
        console.log(results)
        this.setState({videos: results.data.items, selectedVideo: results.data.items[0]});
        // console.log(results.data.items[0].id.videoId)

    }

    render() {
        return (
            <React.Fragment>
                <div className="outerWrap">
                    
            {this.Cards.map(card => {
                return <div key={card.Title} className="cardbox" onClick={() => this.handleSubmit(card.searchTerm)}>{card.Title}</div> 
            })}
                </div>
            </React.Fragment>
        )
    }
}

export default CardBox; 