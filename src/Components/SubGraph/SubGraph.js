import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Doughnut} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import MainGraph from "../MainGraph/MainGraph";
import MetaGraph from "../MetaGraph/MetaGraph";
import MolView from "../Common/MolView";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 0
    },
    grid: {
        padding: '0 !important'
    }
});

const SubGraph = () => {

    const levels = {
        //Math.random()
        CO: parseInt( (2*100/70)),
        CH4: parseInt((2.2*100/2.8)),
        HCHO: parseInt((0.11*100*10/3.02)),
        O3: parseInt((0.07*100/0.15)),
        NO2: parseInt((0.12*100/0.159)),
        SO2: parseInt((0.08*100/0.12)),
        PM25: parseInt((25.6*100/70)),
        PM10: parseInt((43.8*100/300)),
    };

    const calculateMainScore = () => {
        let average = 0;
        let elementCount = 1;
        for (let levelName of Object.keys(levels)) {
            average = average + 2*levels[levelName];
            elementCount=elementCount+2;
        }
        elementCount = elementCount+23;
        if (localStorage.getItem("isHAS") === "true") average=average+150;
        if (localStorage.getItem("isDM1") === "true") average=average+100;
        if (localStorage.getItem("isDM2") === "true") average=average+200;
        if (localStorage.getItem("isAl") === "true") average=average+200;
        if (localStorage.getItem("isPa") === "true") average=average+150;
        if (localStorage.getItem("isHu") === "true") average=average+200;
        if (localStorage.getItem("isMs") === "true") average=average+200;
        if (localStorage.getItem("isEp") === "true") average=average+200;
        if (localStorage.getItem("isCb") === "true") average=average+150;
        if (localStorage.getItem("isPn") === "true") average=average+200;
        if (localStorage.getItem("isAr") === "true") average=average+100;
        if (localStorage.getItem("isSi") === "true") average=average+100;
        if (localStorage.getItem("isCo") === "true") average=average+200;
        if (localStorage.getItem("isAs") === "true") average=average+150;
        return parseInt(average / elementCount)
    };

    const mainScore = calculateMainScore();

    const classes = useStyles();
    return <Card className={classes.root}>
        <CardContent className={classes.grid}>
            <Grid container>
                <Grid item xs={12} >
                    <MetaGraph title={"General Pollution"} percent={mainScore}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"CO"} small percent={levels['CO']} description={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div>
                                <MolView cid={281} height={'300px'} width={'550px'} />
                            </div>

                            <Divider />
                            {/*<div>Eu sou a descrição!</div>*/}
                        </div>
                    } subdescription={'Click on graph to show model 3D'}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"CH4"} small percent={levels['CH4']} description={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div>
                                <MolView cid={297} height={'300px'} width={'550px'} />
                            </div>

                            <Divider />
                            {/*<div>Eu sou a descrição!</div>*/}
                        </div>
                    } subdescription={'Click on graph to show model 3D'}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"HCHO"} small percent={levels['HCHO']} description={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div>
                                <MolView cid={712} height={'300px'} width={'550px'} />
                            </div>

                            <Divider />
                            {/*<div>Eu sou a descrição!</div>*/}
                        </div>
                    } subdescription={'Click on graph to show model 3D'}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"O3"} small percent={levels['O3']} description={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div>
                                <MolView cid={24823} height={'300px'} width={'550px'} />
                            </div>

                            <Divider />
                            {/*<div>Eu sou a descrição!</div>*/}
                        </div>
                    } subdescription={'Click on graph to show model 3D'}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"NO2"} small percent={levels['NO2']} description={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div>
                                <MolView cid={3609161} height={'300px'} width={'550px'} />
                            </div>

                            <Divider />
                            {/*<div>Eu sou a descrição!</div>*/}
                        </div>
                    } subdescription={'Click on graph to show model 3D'}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"SO2"} small percent={levels['SO2']} description={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div>
                                <MolView cid={1119} height={'300px'} width={'550px'} />
                            </div>

                            <Divider />
                            {/*<div>Eu sou a descrição!</div>*/}
                        </div>
                    } subdescription={'Click on graph to show model 3D'}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"PM2.5"} small percent={levels['PM25']}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"PM10"} small percent={levels['PM10']}/>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
};

export default SubGraph;