import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import forest_firer from './forest_firer.png'
import Queimada2 from './forest_firer_1.png'
import Iframe from 'react-iframe'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const ForestFiresArticle = () => {

  const classes = useStyles();
    return <Grid container spacing={3}>
        <Grid item xs={12} >
            <Card className={classes.root}>
                <CardContent >
                    <Typography variant="h4" component="h2">
                        Forest Firer
                    </Typography>
                    <br />
                    <br />

                    <img src={forest_firer} alt="" width={'100%'}/>
                    <br />
                    <br />
                    <Typography variant="h6" component="h2">
                        What are the forest fires?
                    </Typography>

                    A forest fire is an incomplete combustion in the open air, and depends on the type of vegetable matter being burned, its density, humidity, in addition to environmental conditions, especially wind speed.

                    <p>
                    <Typography variant="h6" component="h2">
                        What emissions are released in the phenomenon?
                    </Typography>

                    <ul>
                        <li> Carbon monoxide (CO)</li>
                        <li> Particulate matter (soot) and ash of varying particle size</li>
                        <li> Hydrocarbons (HC)</li>
                        <li> Volatile and semivolatile organic compounds</li>
                        <li> Nitrogen oxides (NOx), such as nitric oxide (NO) and nitrogen dioxide (NO2)</li>
                        <li> Ozone (O3)</li>
                        <li> Sulphur dioxide (SO2)</li>
                    </ul>

                    </p>
                    <p>
                    <Typography variant="h6" component="h2">
                        What are the symptoms triggered?
                    </Typography>

                    <ul>
                        <li> Redness and skin allergy</li>
                        <li> Stuffy nose</li>
                        <li> Shortness of breath</li>
                        <li> Dry cough</li>
                        <li> Hoarseness</li>
                        <li> Irritation of the eyes and throat</li>
                        <li> Tearing</li>
                        <li> Conjunctivitis</li>
                        <li> Upper respiratory system infections</li>
                        <li> Asthma</li>
                        <li> Bronchitis</li>
                        <li> Cardiovascular disorders</li>
                        <li> Psychological effects</li>
                    </ul>
                    </p>
                    <p>
                    <Typography variant="h6" component="h2">
                        Are the harms present only in health?
                    </Typography>

                        No, quite the contrary. The effects go far beyond just in the health area and can cause a cascade of direct and indirect events, such as:

                    <ul>
                        <li> Drastic reduction in visibility</li>
                        <li> Closure of airports and schools and restriction of leisure and work activities</li>
                        <li> Increase in traffic accidents</li>
                        <li> Climate change</li>
                        <li> Destruction of biodiversity and impacts on the distribution of flora and fauna</li>
                        <li> Change in radiative processes and water cycle</li>
                        <li> Changes in the presence of infectious disease vectors</li>
                        <li> Variations in photosynthesis of agricultural crops that may eventually affect human nutrition</li>
                    </ul>
                    </p>
                    <img src={Queimada2} alt="" width={'100%'}/>
                    <p>
                    <Typography variant="h6" component="h2">
                        Where and why do forest fires usually occur?
                    </Typography>

                        In Brazil, the outbreaks of fires are concentrated more in the Midwest region and in some parts of the North and Northeast regions. Soil preparation for agriculture was considered the main cause of fire. In Brazilian rainforests, this is linked to the way human occupation has been taking place.

                    </p>
                    <p>
                    <Typography variant="h6" component="h2">
                        Are only people close to the event affected?
                    </Typography>

                        No. The closer the fire, the greater its health effect is usually. But the direction and intensity of air currents have a lot of influence on the dispersion of air pollutants, which can travel for thousands of kilometers, reaching other locations.
                    </p>
                    <p>
                    <Typography variant="h6" component="h2">
                        What age group is most affected and how to mitigate this?
                    </Typography>

                        The most affected by these harmful effects of the fires are children and the elderly. As in the dry climate, some guidelines are necessary to reduce the health effects of fires:
                    <ul>
                        <li> Avoid, whenever possible, proximity to fires</li>
                        <li> Maintain a good hydration, especially in children under 5 years and elderly over 65 years</li>
                        <li> Keep indoors closed, but humidified, with the use of vaporizers, basins with water and wet towels</li>
                        <li> Wear masks when going out on the street</li>
                        <li> Avoid agglomerations indoors</li>
                        <li> Opt for a light diet with the intake of vegetables, fruits and vegetables</li>
                    </ul>
                    </p>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} >
            <Card className={classes.root}>
                <Iframe url="https://worldview.earthdata.nasa.gov/?t=2019-02-26-T00%3A00%3A00Z&l=VIIRS_SNPP_Thermal_Anomalies_375m_Night,VIIRS_SNPP_Thermal_Anomalies_375m_Day(hidden),Coastlines,Reference_Features,VIIRS_SNPP_CorrectedReflectance_TrueColor,MODIS_Aqua_CorrectedReflectance_TrueColor,MODIS_Terra_CorrectedReflectance_TrueColor"
                        width="100%"
                        height="700px"
                        id="earthFire"
                        className="earthFire"
                        display="initial"
                        position="relative"/>
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
                            href="https://www.ma10.com.br/2020/10/01/queimadas-no-pantanal-batem-recorde-em-9-meses-e-sao-as-maiores-em-23-anos/">https://www.ma10.com.br/2020/10/01/queimadas-no-pantanal-batem-recorde-em-9-meses-e-sao-as-maiores-em-23-anos/</a></li>
                        <li><a
                            href="https://www.msnoticias.com.br/editorias/geral-ms-noticias/famoso-em-nota-de-r-200-lobo-guara-corre-risco-por-causa-de/101700/">https://www.msnoticias.com.br/editorias/geral-ms-noticias/famoso-em-nota-de-r-200-lobo-guara-corre-risco-por-causa-de/101700/</a></li>
                        <li><a href="https://worldview.earthdata.nasa.gov/">https://worldview.earthdata.nasa.gov/</a></li>
                    </ul>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
};


export default ForestFiresArticle;