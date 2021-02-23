import React from "react";
// import SidebarRow from './SidebarRow'
// import HomeIcon from "@material-ui/icons/Home";
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
// import HistoryIcon from '@material-ui/icons/History';
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import { SideBarData } from "./SideData";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ selected }) {
  return (
    <div className="sidebar-contain">
      
      <ul className={` sidebarRows ${selected && "selected"}`}>
        {SideBarData.map((val, key) => {
          return (
            <li key={key} className={`row ${selected && "selected"}`}>
              <div id="iconContainer">{val.icon} </div>

              <div id="titleContainer">
                <h2>{val.title}</h2>
              </div>
            </li>
          );
        })}
      </ul>
      <hr />
    
    </div>
  );
}

export default Sidebar;
