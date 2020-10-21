import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Poluicao1 from "./polluents.png";
import PollutionMap from "../../WorldMap/PollutionMap";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const PollutantsArticle = () => {

  const classes = useStyles();
    return <Grid container spacing={3}>
        <Grid item xs={13} >
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Card className={classes.root}>
                        <CardContent >
                            <Typography variant="h4" component="h2">
                                Pollutants
                            </Typography>

                            <br />
                            <br />

                            <img src={Poluicao1} alt="" width={'100%'}/>
                            <p>
                            <br />

                            <Typography variant="h6" component="h2">
                            MP2,5 and MP0,1:
                            </Typography>
                            <ul>
                                <li> <b>Definition:</b> Complex mixture of solids with reduced diameter, whose components have different physical and chemical characteristics</li>
                                <li> <b>Sources:</b> Burning of fossil fuels and biomass, thermoelectric plants</li>
                                <li> <b>Penetration into the respiratory system:</b> Alveoli, lung tissue and bloodstream</li>
                            </ul>
                            </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            O3:
                            </Typography>
                            <ul>
                                <li> <b>Definition:</b> Secondary pollutant, it means that it isn´t emitted directly, but formed from other air pollutants, and highly oxidizing in the troposphere</li>
                                <li> <b>Anthropogenic Sources:</b> Its formation occurs through complex chemical reactions between volatile organic compounds and nitrogen oxides in the presence of sunlight</li>
                                <li> <b>Penetration into the respiratory system:</b> Trachea, bronchi, bronchioles and alveoli</li>
                            </ul>
                        </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            NOx, NO2:
                            </Typography>
                            <ul>
                                <li> <b>Definition:</b> Polluting gas with highly oxidizing action, its presence in the atmosphere is a key factor in the formation of tropospheric ozone</li>
                                <li> <b>Anthropogenic Sources:</b> Nitric and sulfuric acid industries, combustion engines and thermal plants that use gas or incinerations</li>
                                <li> <b>Natural sources:</b> Electric discharges in the atmosphere</li>
                                <li> <b>Penetration into the respiratory system:</b> Trachea, bronchi, bronchioles, alveoli</li>
                            </ul>
                            </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            SO2:
                            </Typography>
                            <ul>
                                <li> <b>Definition:</b> Toxic and colorless gas, can be emitted by natural sources or by anthropogenic sources and can react with other compounds in the atmosphere, forming particulate matter of reduced diameter</li>
                                <li> <b>Anthropogenic Sources:</b> Oil refineries, diesel vehicles and paper manufacturers</li>
                                <li> <b>Natural sources:</b> Volcanic activity</li>
                                <li> <b>Penetration into the respiratory system:</b> Upper airways, trachea, bronchi, bronchioles</li>
                            </ul>
                            </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            CO:
                            </Typography>
                            <ul>
                                <li> <b>Definition:</b> Odorless and colorless gas, formed in the fuel burning process</li>
                                <li> <b>Anthropogenic Sources:</b> Forest fires, incomplete combustion of fossil fuels or other organic materials and road transport</li>
                                <li> <b>Natural sources:</b> Volcanic eruptions and chlorophyll decomposition</li>
                                <li> <b>Penetration into the respiratory system:</b> Alveoli, bloodstream</li>
                            </ul>
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} >
                    <PollutionMap/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} >
            <Card className={classes.root}>
                <CardContent >
                    <Typography variant="h5" component="h2">
                        References
                    </Typography>
                    <ul>
                        <li>
                            <a href="https://www.mma.gov.br/cidades-sustentaveis/qualidade-do-ar/poluentes-atmosf%C3%A9ricos.html">https://www.mma.gov.br/cidades-sustentaveis/qualidade-do-ar/poluentes-atmosf%C3%A9ricos.html</a>
                        </li>
                        <li>
                            <a href="http://jornaldepneumologia.com.br/detalhe_artigo.asp?id=79">http://jornaldepneumologia.com.br/detalhe_artigo.asp?id=79</a>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
};


export default PollutantsArticle;