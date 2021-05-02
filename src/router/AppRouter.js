import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

// import Home from "../pages/HomePage";
// import YourMood from "../pages/YourMood";
// import YourMoodDemo from "../pages/YourMoodDemo";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound";
// import SpotifyRedirect from "../pages/SpotifyRedirect";
// import SongError from "../pages/SongError";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <HomePage />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
