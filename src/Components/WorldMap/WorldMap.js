import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Doughnut} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import MainGraph from "../MainGraph/MainGraph";
import MetaGraph from "../MetaGraph/MetaGraph";
import WorldMapIcon from "./mapa.png"

import react, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Chart from "react-google-charts";

/*const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});



const WorldMap = () => {

    const classes = useStyles();
    return <Card className={classes.root}>
        <CardContent >
            <Typography variant={"h5"} component="h2">
                <b>Mapa mundial</b>
            </Typography>
            <img src={WorldMapIcon} width={'100%'} height={'100%'}/>
        </CardContent>
    </Card>
};
*/


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class WorldMap extends Component {
    static defaultProps = {
        center: {
            lat: -21.9976456,
            lng: -46.7947106
        },
        zoom: 13
    };


    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Cidades mais poluidas
                    </Typography>
                    <Chart
                        width={"100%"}
                        height={"50vh"}
                        chartType="GeoChart"
                        data={[
                            ["Country", "Popularity"],
                            ["Germany", 200],
                            ["United States", 300],
                            ["Brazil", 400],
                            ["Canada", 500],
                            ["France", 600],
                            ["RU", 700],
                            ["Cambodia", 800],
                            ["Australia", 100]
                        ]}
                        // Note: you will need to get a mapsApiKey for your project.
                        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                        mapsApiKey="AIzaSyDPD29xVHUzySFw8UdlfKitlWOQMrP1FQo"
                        rootProps={{ "data-testid": "1" }}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default WorldMap;

//export default WorldMap;