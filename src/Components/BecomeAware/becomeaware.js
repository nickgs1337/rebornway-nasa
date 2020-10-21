import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const About = () => {

  const classes = useStyles();
  return <Grid container spacing={3}>
      <Grid item xs={12}>
          <Card className={classes.root}>
              <CardContent className={classes.grid}>
              <Typography variant="h5" component="h2">
                  Become Aware
              </Typography>
              <Divider />
              <br />
              <div style={{
                  fontSize: '15px',
                  textAlign: 'justify'
              }}>
                  Taking into account scientific and data evidence, it is clear that air pollution is a phenomenon that triggers a cascade of harm in all spheres of the world, including the human species itself. Unfortunately or fortunately, respectively, people, being major contributors to atmospheric pollution rates in the world, are the main diseases of planet Earth, and at the same time, on the other hand, are its main chance of healing. For this, society needs to be aware of its own actions, with good doses of empathy, having a world view from a different perspective, in which it is perceived that hurting it, we will be contributing to the end of our own existence.
                  <br/>
                  <br />
                  This situation is explicit in the current reality that we are going through. COVID-19 has affected our daily lives in an unprecedented range of ways, from physical distancing to travel bans. But the pandemic is also influencing our planet in a positive manner.
                  <br/>
                  <br />
                  Air pollution levels have dropped significantly since measures such as quarantines and shutdowns were put in place. Around the world, levels of harmful pollutants like NO2 (nitrogen dioxide), CO (carbon monoxide), SO2 (sulfur dioxide) and PM2.5 (small particulate matter) have plummeted, at least, while the shutdowns continued.
                  <br/>
                  <br />
                  For instance, in China, since authorities had shut down local businesses and implemented transport restrictions, satellites monitoring pollution for NASA and the European Space Agency have since detected a marked decrease in airborne NO2, a pollutant that, even though is also influenced by the weather and various atmospheric processes, is mostly emitted from burning fossil fuels in transport, industry and electricity generation, which makes it strongly linked to human activity.
                  <br/>
                  <br />
                  In a report collated by air quality information and tech company IQAir, 9 out of 10 major global cities that imposed COVID-19 shutdowns measured PM2.5 reductions of 25-60 per cent compared to the same period last year.
                  <br/>
                  <br />
                  It’s been reported that if economic and transport shutdowns continue, it will lead to the first decrease in CO2 global emissions since the 2008 global financial crisis, but, unfortunately, it doesn’t immediately lead to a drop in atmospheric levels of CO2, which not only depend on emissions by human activities, but are also influenced by how well (or poorly) the rest of the planet absorbs the gas.
                  <br/>
                  <br />
                  But environmental benefits will only be temporary unless we implement long-term measures to cut emissions. It’s a stark reminder that air pollution, including greenhouse gas emissions, is a global threat that can’t be forgotten, even in these challenging times.
              </div>
              </CardContent>
          </Card>
      </Grid>
      <br/>
      <Grid item xs={12}>
          <Card className={classes.root}>
              <CardContent >
                  <Typography variant="h5" component="h2">
                      References
                  </Typography>
                  <ul>
                      <li><a
                          href="https://www.science.org.au/curious/earth-environment/what-impact-will-covid-19-have-environment">https://www.science.org.au/curious/earth-environment/what-impact-will-covid-19-have-environment</a></li>
                      <li><a
                          href="https://www.bbc.com/portuguese/internacional-51682790">https://www.bbc.com/portuguese/internacional-51682790</a></li>
                      <li><a href="http://www.hcfmb.unesp.br/covid-19-e-meio-ambiente-uma-oportunidade-de-transformacao/">http://www.hcfmb.unesp.br/covid-19-e-meio-ambiente-uma-oportunidade-de-transformacao/</a></li>
                      <li><a href="https://meuresiduo.com/en/blog-en/the-positive-and-negative-impacts-of-coronavirus-pandemic-in-the-environment/">https://meuresiduo.com/en/blog-en/the-positive-and-negative-impacts-of-coronavirus-pandemic-in-the-environment/</a></li>
                  </ul>
              </CardContent>
          </Card>
      </Grid>


    </Grid>
};


export default About;