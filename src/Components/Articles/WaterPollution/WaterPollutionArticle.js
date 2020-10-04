import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Coral1 from "./coral-bg-1.jpg";
import Coral2 from "./coral-bg-2.jpg";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const WaterPollutionArticle = () => {

  const classes = useStyles();
    return <Grid container spacing={3}>
        <Grid item xs={9} >
            <Card className={classes.root}>
                <CardContent >
                    <Typography variant="h4" component="h2">
                        Coral
                    </Typography>
                    <br />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <img src={Coral1} alt="" width={'49%'}/>
                        <img src={Coral2} alt="" width={'49%'}/>
                    </div>
                    <br />
                    <br />
                    <p>
                        In the complex ocean ecosystem, about 25% of all marine species depend on coral reefs, which are used as food and shelter of small animals, fish and algae.
                    </p>

                    <Typography variant="h6" component="h2">
                        Why are corals at risk?
                    </Typography>
                    <p>
                        These organisms are at risk not only from water pollution or global warming, but mainly by the particles released into the atmosphere, which affect the amount of sunlight needed for corals to grow.
                    </p>
                    <p>
                        The burning of coal by thermoelectric plants and volcanic eruptions throw into the atmosphere tons of fine particles of dust and carbon, which make shade for sunlight that reaches the corals. Without sufficient light, the waters cool and coral photosynthesis is lower. This was the relationship found by the team of scientists and ecologists after analyzing ship data, marine sensors and applying mathematical and statistical models.
                    </p>
                    <p>
                        Therefore, there is a clear relationship between the growth of corals and the concentration of pollution particles in the atmosphere.
                    </p>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={3} >
            <Card className={classes.root}>
                <CardContent >
                    <Typography variant="h5" component="h2">
                        References
                    </Typography>
                    <ul>
                        <li><a
                            href="http://revistagalileu.globo.com/Revista/Common/0,,EMI335300-17770,00-POLUICAO+ATMOSFERICA+PREJUDICA+CRESCIMENTO+DE+CORAIS.html">http://revistagalileu.globo.com/Revista/Common/0,,EMI335300-17770,00-POLUICAO+ATMOSFERICA+PREJUDICA+CRESCIMENTO+DE+CORAIS.html</a></li>
                    </ul>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
};


export default WaterPollutionArticle;