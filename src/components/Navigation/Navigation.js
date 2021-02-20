import React, {Component} from 'react';
import VideoList from '../VideoList/VideoList';
import Videos from '../Videos/Videos'
import Youtube from '../../API/Youtube';
import './Navigation.css';
import SearchBar from '../SearchBar/SearchBar';

class Nav extends Component {

render() {
    return(
        <div className="outerNav">
            <nav className="Navigation">
                {/* Hamburger Menu */}
                <h4>Hamburger Menu</h4>
                {/* Logo */}
                <h4 className="Logo">Logo</h4>
            {/* other Icons */}
            <h4>Other Icons</h4>
            </nav>
        </div>
        
    );
}
}

export default Nav;