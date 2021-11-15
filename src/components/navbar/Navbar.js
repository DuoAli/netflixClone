import { useContext, useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState("");
  const { dispatch, user } = useContext(AuthContext);

  window.onScroll = () => {
    setIsScrolled(window.pageOffset === 0 ? false : true);
    return () => (window.onScroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <Link to="/mylist" className="link">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              {user.isAdmin && (
                <Link to="/dashboard" className="link">
                  <span>Dashboard</span>
                </Link>
              )}
              <span
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
