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
        CO: parseInt(Math.random() * 100),
        CH4: parseInt(Math.random() * 100),
        HCHO: parseInt(Math.random() * 100),
        O3: parseInt(Math.random() * 100),
        NO2: parseInt(Math.random() * 100),
        SO2: parseInt(Math.random() * 100),
        MP25: parseInt(Math.random() * 100),
        MP10: parseInt(Math.random() * 100),
    };

    const mainScoreCalc = () => {
        let average = 0;
        let elementCount = 1;
        for (let levelName of Object.keys(levels)) {
            average = average + levels[levelName];
            elementCount++;
        }
        return parseInt(average / elementCount);
    };

    const mainScore = mainScoreCalc();


    const classes = useStyles();
    return <Card className={classes.root}>
        <CardContent className={classes.grid}>
            <Grid container>
                <Grid item xs={12} >
                    <MetaGraph title={"General Pollution"} percent={mainScore}/>
                </Grid>
                <Grid item xs={4}>
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
                            <div>Eu sou a descrição!</div>
                        </div>
                    }/>
                </Grid>
                <Grid item xs={4}>
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
                            <div>Eu sou a descrição!</div>
                        </div>
                    }/>
                </Grid>
                <Grid item xs={4}>
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
                            <div>Eu sou a descrição!</div>
                        </div>
                    }/>
                </Grid>
                <Grid item xs={4}>
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
                            <div>Eu sou a descrição!</div>
                        </div>
                    }/>
                </Grid>
                <Grid item xs={4}>
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
                            <div>Eu sou a descrição!</div>
                        </div>
                    }/>
                </Grid>
                <Grid item xs={4}>
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
                            <div>Eu sou a descrição!</div>
                        </div>
                    }/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"MP2,5"} small percent={levels['MP25']} description={"O MP2 Não faz bem :("}/>
                </Grid>
                <Grid item xs={6}>
                    <MetaGraph title={"MP10"} small percent={levels['MP10']} description={"O MP10 Não faz bem :("}/>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
};

export default SubGraph;