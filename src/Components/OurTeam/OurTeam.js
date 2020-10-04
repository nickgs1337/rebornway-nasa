import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TeamPhoto from './team.png'
import ReactPlayer from "react-player";
import Trailer from "./trailer.mp4"
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const OurTeam = () => {

  const classes = useStyles();
  return <Grid container spacing={3}>
        <Grid item xs={12} >
            <Card className={classes.root}>
              <CardContent >
                  <div style={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-around'
                  }}>
                      <img
                          width={"1280px"}
                          height={"720px"}
                          src={TeamPhoto}
                          alt=""/>
                  </div>
              </CardContent>
          </Card>
      </Grid>
      <Grid item xs={12} >
          <Card className={classes.root}>
              <CardContent >
                  <div style={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-around'
                  }}>
                      <ReactPlayer
                          controls={true}
                          width={"1280px"}
                          height={"720px"}
                          pip={false}
                          url={Trailer} />
                  </div>
              </CardContent>
          </Card>
      </Grid>
    </Grid>
};


export default OurTeam;