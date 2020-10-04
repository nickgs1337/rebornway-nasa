import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Poluicao1 from "./pollutants.jpg";
import PollutionMap from "../../WorldMap/PollutionMap";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const PollutantsArticle = () => {

  const classes = useStyles();
    return <Grid container spacing={3}>
        <Grid item xs={9} >
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Card className={classes.root}>
                        <CardContent >
                            <Typography variant="h4" component="h2">
                                Poluentes
                            </Typography>
                            <br />

                            <img src={Poluicao1} alt="" width={'650px'} height={'400px'}/>
                            <p>
                            <br />
                            <br />
                            <Typography variant="h6" component="h2">
                            MP2,5 E MP0,1:
                            </Typography>
                            <ul>
                                <li> <b>Definição:</b> Mistura complexa de sólidos com diâmetro reduzido, cujos componentes apresentam características físicas e químicas diversas</li>
                                <li> <b>Fontes:</b> Queima de combustíveis fósseis e de biomassa, usinas termoelétricas</li>
                                <li> <b>Penetração no sistema respiratório:</b> Alvéolos, tecido pulmonar e corrente sanguínea</li>
                            </ul>
                            </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            O3:
                            </Typography>
                            <ul>
                                <li> <b>Definição:</b> Poluente secundário, ou seja, não é emitido diretamente, mas formado a partir de outros poluentes atmosféricos, e altamente oxidante na troposfera</li>
                                <li> <b>Fontes Antropogênicas:</b> Sua formação ocorre através de reações químicas complexas entre compostos orgânicos voláteis e óxidos de nitrogênio na presença de luz solar</li>
                                <li> <b>Penetração no sistema respiratório:</b> Traqueia, brônquios, bronquíolos e alvéolos</li>
                            </ul>
                        </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            NOx, NO2:
                            </Typography>
                            <ul>
                                <li> <b>Definição:</b> Gás poluente com ação altamente oxidante, sua presença na atmosfera é fator chave na formação do ozônio troposférico</li>
                                <li> <b>Fontes Antropogênicas:</b> Indústrias de ácido nítrico e sulfúrico, motores de combustão e usinas térmicas que utilizam gás ou incinerações</li>
                                <li> <b>Fontes naturais:</b> Descargas elétricas na atmosfera</li>
                                <li> <b>Penetração no sistema respiratório:</b> Traqueia, brônquios, bronquíolos, alvéolos</li>
                            </ul>
                            </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            SO2:
                            </Typography>
                            <ul>
                                <li> <b>Definição:</b> Gás tóxico e incolor, pode ser emitido por fontes naturais ou por fontes antropogênicas e pode reagir com outros compostos na atmosfera, formando material particulado de diâmetro reduzido</li>
                                <li> <b>Fontes Antropogênicas:</b> Refinarias de petróleo, veículos a diesel e fabricação de papel</li>
                                <li> <b>Fontes naturais:</b> Atividade vulcânica</li>
                                <li> <b>Penetração no sistema respiratório:</b> Vias aéreas superiores, traqueia, brônquios, bronquíolos</li>
                            </ul>
                            </p>
                            <p>
                            <Typography variant="h6" component="h2">
                            CO:
                            </Typography>
                            <ul>
                                <li> <b>Definição:</b> Gás inodoro e incolor, formado no processo de queima de combustíveis</li>
                                <li> <b>Fontes Antropogênicas:</b> Queimadas florestais, combustão incompleta de combustíveis fósseis ou outros materiais orgânicos e transportes rodoviárias</li>
                                <li> <b>Fontes naturais:</b> Erupções vulcânicas e decomposição da clorofila</li>
                                <li> <b>Penetração no sistema respiratório:</b> Alvéolos, corrente sanguínea</li>
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
        <Grid item xs={3} >
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