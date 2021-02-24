import React, { Component } from 'react';
import VideoList from '../VideoList/VideoList';
import Videos from '../Videos/Videos'
import Youtube from '../../API/Youtube';
import './Navigation.css';
import SearchBar from '../SearchBar/SearchBar';
import VoiceRec from "../VoiceRec/VoiceRec"
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import YouTubeIcon from '@material-ui/icons/YouTube';

 

class Nav extends Component {

    render() {
        return (

            <div className="nav-contain">
      <div className="outerNav">

        <div className="nav-left">
            <button id="sidebar-Toggle">
            <MenuIcon id="Logo"/>
            </button> 
            <YouTubeIcon id="Logo2" />
            <h1>Youtube</h1>
        </div>

        <div className ="mic-center">
        <VoiceRec onRecord={(msg) => { console.log(msg) }} />
        </div>

        <div className="nav-icons">
          {/* other icons  */}
          <VideoCallOutlinedIcon className="nav-icon"/>
          <AppsOutlinedIcon className="nav-icon"/>
          <NotificationsOutlinedIcon className="nav-icon"/>
          <PersonOutlinedIcon className="nav-icon"/>
        </div>
        
        </div>
      </div>

            // <div className="outerNav">
            //     <nav className="Navigation">
            //         {/* Hamburger Menu */}
            //         <h4>Hamburger Menu</h4>
            //         {/* Logo */}
            //         <h4 className="Logo">Logo</h4>
            //         {/* other Icons */}
            //         <h4>Other Icons <VoiceRec onRecord={(msg) => { console.log(msg) }} /></h4>
            //     </nav>
            // </div>

        );
    }
}

export default Nav;