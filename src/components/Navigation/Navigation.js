import React, { Component } from "react";
// import VideoList from "../VideoList/VideoList";
// import Videos from "../Videos/Videos";
import Youtube from "../../API/Youtube";
import "./Navigation.css";
// import Sidebar from '../Sidebar/Sidebar';
import SearchBar from "../SearchBar/SearchBar";
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

        <nav className="Navigation">
          <SearchBar onFormSubmit={this.handleSubmit} />
        </nav>

        <div className="nav-icons">
          {/* other icons  */}
          <VideoCallOutlinedIcon className="nav-icon"/>
          <AppsOutlinedIcon className="nav-icon"/>
          <NotificationsOutlinedIcon className="nav-icon"/>
          <PersonOutlinedIcon className="nav-icon"/>
        </div>
        
        </div>
      </div>
    );
  }
}

export default Nav;
