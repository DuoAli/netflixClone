import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/dashboard" className="logo">
            <span className="logo">Welcome Admin</span>
          </Link>
        </div>
        <div className="topRight">
          <Link to="/" className="topbarIconContainer">
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className="topbarIconContainer">
            <span>Dashboard</span>
          </Link>
          <Link to="/userinfo" className="topbarIconContainer">
            <span>User Information</span>
          </Link>
          <Link to="/newMovie" className="topbarIconContainer">
            <span>Create Product</span>
          </Link>
          <Link to="/newlist" className="topbarIconContainer">
            <span>Create List</span>
          </Link>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
