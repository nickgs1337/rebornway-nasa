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
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDPD29xVHUzySFw8UdlfKitlWOQMrP1FQo" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >


                    <AnyReactComponent
                        lat={-21.9976456}
                        lng={-46.7947106}
                    />

                </GoogleMapReact>
            </div>
        );
    }
}

export default WorldMap;

//export default WorldMap;