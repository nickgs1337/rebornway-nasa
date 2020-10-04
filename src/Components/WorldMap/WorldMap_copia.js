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

const useStyles = makeStyles({
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

export default WorldMap;