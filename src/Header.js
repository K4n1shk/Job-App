import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./linkedinlogo.png";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  SupervisorAccount,
  Notifications,
} from "@mui/icons-material";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="Linkedin Logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="MƎ" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
