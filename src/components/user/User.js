import React, { useEffect, useState } from "react";
import "./user.scss";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      const res = await axios.get("/users", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setUsers(res.data);
    };
    getNewUsers();
  }, [setUsers]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              <Link to="/userinfo">Display</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
