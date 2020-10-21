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
        <center>
        <Grid item xs={9} >
            <Card className={classes.root}>
              <CardContent >

                  <div style={{
                      justifyContent: 'justify',
                      justifyText: 'justify',
                      textAlign: 'justify',
                      fontSize: '15px'
                  }}>
                  We are from Brazil and our team is considerably diverse. Ana Julia is a sophomore in high school.
                  Caio is a student of Electronic Engineering and Telecommunications. Guilherme studies Aeronautical Engineering.
                  Karen and Nicolas are medical students. Finally, Nicollas is trained in Systems Analysis and Development.
                  </div>
                  <br />
                  <div style={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-around'
                  }}>
                      <img
                          width={"100%"}
                          src={TeamPhoto}
                          alt=""/>
                  </div>

                  <br/>

                  <div style={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-around',
                      fontSize: '16px'
                  }}>
                  </div>
              </CardContent>
          </Card>
      </Grid>

            <br/>

      <Grid item xs={9} >
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
                          width={"100%"}
                          height={"100%"}
                          pip={false}
                          url={Trailer} />
                  </div>
              </CardContent>
          </Card>
      </Grid>
            </center>
    </Grid>
};


export default OurTeam;