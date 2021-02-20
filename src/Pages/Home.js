import React, { Component } from 'react';
import Nav from '../components/Navigation/Navigation'
import Youtube from '../API/Youtube';
import CardBox from '../components/CardBox/CardBox';


class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <Nav/>
                <CardBox/>
            </React.Fragment>
        );
    }
}

export default Home;