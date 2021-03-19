import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import { SideBarData } from "./SideData";
import "./Sidebar.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

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
      {/* <Router> */}
      <Link to="/contact">Contact Us</Link>
      {/* </Router> */}
    </div>
  );
}

export default Sidebar;
