import React, { Component } from 'react';
import VideoList from '../VideoList/VideoList';
import Videos from '../Videos/Videos'
import Youtube from '../../API/Youtube';
import './Navigation.css';
import SearchBar from '../SearchBar/SearchBar';
import VoiceRec from "../VoiceRec/VoiceRec"

class Nav extends Component {

    render() {
        return (
            <div className="outerNav">
                <nav className="Navigation">
                    {/* Hamburger Menu */}
                    <h4>Hamburger Menu</h4>
                    {/* Logo */}
                    <h4 className="Logo">Logo</h4>
                    {/* other Icons */}
                    <h4>Other Icons <VoiceRec onRecord={(msg) => { this.props.onRecord(msg) }} /></h4>
                </nav>
            </div>

        );
    }
}

export default Nav;