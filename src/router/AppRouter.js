import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";
import ContactPage from "../pages/ContactPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/browse" component={BrowsePage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default AppRouter;
