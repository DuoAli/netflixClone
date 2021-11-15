import React, { useEffect, useMemo, useState } from "react";
import "./dashboard.scss";
import Chart from "../../components/chart/Chart";
import Topbar from "../../components/topbar/Topbar";
import User from "../../components/user/User";
import axios from "axios";
import MovieList from "../../components/movieList/MovieList";
import ListMovie from "../../components/listMovie/ListMovie";

export default function Dashboard() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      const res = await axios.get("/users/stats", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      const statsList = res.data.sort(function (a, b) {
        return a._id - b._id;
      });
      statsList.map((item) => [
        setUserStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], "New User": item.total },
        ]),
      ]);
    };
    getStats();
  }, [MONTHS]);
  return (
    <div>
      <Topbar />
      <h1>Users Stats</h1>
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <h1>Users</h1>
      <User />
      <h1>Movies</h1>
      <MovieList />
      <ListMovie />
    </div>
  );
}
