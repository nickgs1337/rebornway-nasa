import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import ForecastCards from "./ForecastCards";
import DicasRespirador from "../OurRecommendations/dicas-respirador.png";
import FirstsHintsCards from "../FirstHints/FirstHintsCards";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const ForecastDashboard = () => {

  const classes = useStyles();
  return <Grid container spacing={3}>
        <Grid item xs={12} >
           <Card className={classes.root}>
               <CardContent className={classes.grid}>
                   <Typography variant="h5" component="h2">
                       Forecast
                   </Typography>

                   <Divider />

                   <br />

                  <div style={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-around'
                  }}>

                  <Grid item xs={6} >
                      <FirstsHintsCards
                          name={"Use air humidifiers"}
                          description={"Air humidifiers have the function of keeping the humidity level of the environment within the standards, thus facilitating breathing."}
                          image={DicasRespirador}
                      />
                  </Grid>

                  <Grid item xs={6} >
                      <FirstsHintsCards
                          name={"Use air humidifiers"}
                          description={"Air humidifiers have the function of keeping the humidity level of the environment within the standards, thus facilitating breathing."}
                          image={DicasRespirador}
                      />
                  </Grid>

                  </div>
              </CardContent>
          </Card>
      </Grid>
    </Grid>
};


export default ForecastDashboard;