import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function app() {
  const user = false;
  <BrowserRouter>
    <Switch>{!user ? <Login /> : <Home />}</Switch>
  </BrowserRouter>;
}

export default app;
