import React, { Component } from "react";
import VideoList from "../VideoList/VideoList";
import Videos from "../Videos/Videos";
import Youtube from "../../API/Youtube";
import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";


class Nav extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (searchWord) => {
    const respond = await Youtube.get("search", { params: { q: searchWord } });

    console.log(respond.data.items);
    this.setState({
      videos: respond.data.items,
      selectedVideo: respond.data.items[0],
    });
  };

  onSelect = (videos) => {
    this.setState({ ...this.state, selectedVideo: videos.videos });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="outerNav">

        <div className="nav-left">
            <button id="side">
            <MenuIcon />
            </button>
          <img
            className="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="logo"
          />
        </div>



        <nav className="Navigation">
          <SearchBar onFormSubmit={this.handleSubmit} />
        </nav>

       
        
        <div className="videos">
        <Videos videos={selectedVideo} />
        <VideoList videos={videos} onSelect={this.onSelect} />
        </div>

        <div className="nav-icons">
          {/* other icons  */}
          <VideoCallOutlinedIcon className="nav-icon"/>
          <AppsOutlinedIcon className="nav-icon"/>
          <NotificationsOutlinedIcon className="nav-icon"/>
          <PersonOutlinedIcon className="nav-icon"/>
        </div>
        
      </div>
    );
  }
}

export default Nav;
