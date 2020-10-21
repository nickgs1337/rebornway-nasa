import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link, Redirect, useHistory,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ChatBot from "./Components/ChatBot/ChatBot";
import CovidArticle from "./Components/Articles/Covid/CovidArticle";
import ForestFiresArticle from "./Components/Articles/ForestFires/ForestFiresArticle";
import WaterPollutionArticle from "./Components/Articles/WaterPollution/WaterPollutionArticle";
import PollutantsArticle from "./Components/Articles/Pollutants/PollutantsArticle";
import GreenHouseArticle from "./Components/Articles/GreenHouse/GreenHouse.js";
import NavBar from "./Components/NavBar/NavBar";
import OurRecommendations from "./Components/OurRecommendations/OurRecommendations";
import Methodology from "./Components/Methodology/Methodology";
import WhatsAppBot from "./Components/WhatsAppBot/WhatsAppBot";
import Footer from "./footer.png"
import OurTeam from "./Components/OurTeam/OurTeam";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import BecomeWare from "./Components/BecomeAware/becomeaware";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const isLogged = () => {
    return !!localStorage.getItem("name");
};

function App() {
  const classes = useStyles();
  return (
      <Router>
          <div className={classes.root}>
              <CssBaseline />
              <NavBar/>
              <div className={classes.content}>
                  <Toolbar />
                  <Toolbar />
                  <Switch>
                      <Route path="/" exact>
                          <Dashboard/>
                      </Route>
                      <Route path="/covid">
                          <CovidArticle />
                      </Route>
                      <Route path="/forestfirer">
                          <ForestFiresArticle />
                      </Route>
                      <Route path="/coral">
                          <WaterPollutionArticle />
                      </Route>
                      <Route path="/pollutants">
                          <PollutantsArticle />
                      </Route>
                      <Route path="/greenhouse">
                          <GreenHouseArticle/>
                      </Route>
                      <Route path="/recommendations">
                          <OurRecommendations />
                      </Route>
                      <Route path="/methodology">
                          <Methodology/>
                      </Route>
                      <Route path="/team">
                          <OurTeam/>
                      </Route>
                      <Route path="/aboutus">
                          <About/>
                      </Route>
                      <Route path="/becomeaware">
                          <BecomeWare/>
                      </Route>
                  </Switch>

              </div>
          </div>
          <ChatBot />
          <WhatsAppBot />
          <Contact />
          <img
              style={{
                  width: '100%',
                  bottom: 0,
              }}
              src={Footer} alt=""/>
      </Router>
  );
}

export default App;

