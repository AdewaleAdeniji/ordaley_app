import React from "react";
import Slide from "react-reveal/Slide";
import { navTree } from "../../configs/NavigationConfig";
import LinkItem from "../common/NavLink";

const SideBar = ({ activePath }) => {
  return (
    <Slide left>
      <div className="sidebar">
        <img
          src={require("../../assets/icons/tos.png")}
          alt="TOS logo"
          className="sidebar-logo"
        />
        <div className="nav-links">
          <ul>
            {navTree.map((nav, index) => {
              return <LinkItem nav={nav} activePath={activePath} key={index}/>;
            })}
          </ul>
        </div>
        <div className="login-user">
            
        </div>
      </div>
    </Slide>
  );
};
export default SideBar;
