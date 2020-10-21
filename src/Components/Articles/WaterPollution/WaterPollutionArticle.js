import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Coral1 from "./coral-bg-1.jpg";
import Coral2 from "./coral-bg-2.jpg";
import info_graph from "./info_graph_coral.jpg";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const WaterPollutionArticle = () => {

  const classes = useStyles();
    return <Grid container spacing={3}>
        <Grid item xs={12} >
            <Card className={classes.root}>
                <CardContent >
                    <Typography variant="h4" component="h2">
                        Corals
                    </Typography>
                    <br />
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
                    <p>
                        In the complex ocean ecosystem, about 25% of all marine species depend on coral reefs, which are used as food and shelter of small animals, fish and algae.
                    </p>

                    <Typography variant="h6" component="h2">
                        Why are corals at risk?
                    </Typography>
                    <p>
                        Ocean acidification describes the process by which our ocean has become more acidic - about 30 percent more - since the Industrial Revolution. Climate change is the greatest global threat to coral reef ecosystems. Scientific evidence now clearly indicates that the Earth's atmosphere and ocean are warming, and that these changes are primarily due to greenhouse gases derived from human activities.
                    </p>
                    <p>
                        As temperatures rise, mass coral bleaching events and infectious disease outbreaks are becoming more frequent. Ocean acidification interferes with the process of calcification, by which marine animals such as mollusks and crustaceans make cell coverings or skeletons from calcium carbonate. It has been implicated in causing coral reefs to lose their color (an effect known as “coral bleaching”). And more acidic seas can also affect phytoplankton and zooplankton, which are major food sources for fish and other sea creatures. All in all, a more acidic ocean could wipe out species, disrupt the food chain and hurt fisheries, tourism and other ocean-dependent industries.
                    </p>
                    <p>
                        Additionally, carbon dioxide absorbed into the ocean from the atmosphere has already begun to reduce calcification rates in reef-building and reef-associated organisms by altering seawater chemistry through decreases in pH.  About a quarter of the carbon dioxide (CO2) we pump out into the atmosphere every day through the burning of fossil fuels and other activities is absorbed by the seas.
                    </p>
                    <p>
                        Climate change will affect coral reef ecosystems, through sea level rise, changes to the frequency and intensity of tropical storms, and altered ocean circulation patterns. When combined, all of these impacts dramatically alter ecosystem function, as well as the goods and services coral reef ecosystems provide to people around the globe.
                    </p>
                    <p>
                        These organisms are at risk not only from water pollution or global warming, but also by the particles released into the atmosphere, which affect the amount of sunlight needed for corals to grow.
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

        <Grid item xs={12} >
            <Card className={classes.root}>
                <CardContent >
                    <img src={info_graph} alt="" width={'100%'}/>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} >
            <Card className={classes.root}>
                <CardContent >
                    <Typography variant="h5" component="h2">
                        References
                    </Typography>
                    <ul>
                        <li><a
                            href="http://revistagalileu.globo.com/Revista/Common/0,,EMI335300-17770,00-POLUICAO+ATMOSFERICA+PREJUDICA+CRESCIMENTO+DE+CORAIS.html">http://revistagalileu.globo.com/</a></li>
                        <li><a
                            href="https://oceanservice.noaa.gov/facts/coralreef-climate.html">https://oceanservice.noaa.gov/facts/coralreef-climate.html</a></li>
                        <li><a
                            href="http://revistagalileu.globo.com/Revista/Common/0,,EMI335300-17770,00-POLUICAO+ATMOSFERICA+PREJUDICA+CRESCIMENTO+DE+CORAIS.html">http://revistagalileu.globo.com/Revista/Common/0,,EMI335300-17770,00-POLUICAO+ATMOSFERICA+PREJUDICA+CRESCIMENTO+DE+CORAIS.html</a></li>
                    </ul>
                </CardContent>
            </Card>
        </Grid>


    </Grid>
};


export default WaterPollutionArticle;