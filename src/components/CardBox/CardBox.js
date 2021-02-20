import React, { Component } from 'react';
import Youtube from '../../API/Youtube';
import './CardBox.css';

class CardBox extends Component {

        Cards = [
     {
        searchTerm: "Health", 
        Title: "Health",

     }
    ]

    render() {
        return (
            <React.Fragment>
                <div className="outerWrap">
                    
            {this.Cards.map(card => {
                return <div className="cardbox" onClick={()=> handleClick(card.searchTerm)}>{card.Title}</div> 
            })}
                </div>
            </React.Fragment>
        )
    }
}

export default CardBox; 