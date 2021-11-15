import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import UserInfos from "./components/userInfos/UserInfos";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import NewMovie from "./components/newMovie/NewMovie";
import Movie from "./components/movie/Movie";
import UpdateListMovie from "./components/UpdateListMovie/UpdateListMovie";
import NewList from "./components/newList/NewList";
import MyList from "./components/myList/MyList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/userinfo">
              <UserInfos />
            </Route>
            <Route path="/mylist">
              <MyList />
            </Route>
            <Route path="/newmovie">
              <NewMovie />
            </Route>
            <Route path="/movie">
              <Movie />
            </Route>
            <Route path="/list">
              <UpdateListMovie />
            </Route>
            <Route path="/newlist">
              <NewList />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
