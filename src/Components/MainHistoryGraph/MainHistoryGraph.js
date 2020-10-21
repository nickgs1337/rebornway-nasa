import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Bar, Line} from "react-chartjs-2";
import {getLastMonthNames} from "../../utils/DateUtils";
import {generateDataset} from "../../utils/DatasetUtils";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const data = {
    labels: getLastMonthNames(6).reverse(),
    datasets: [
        {
            label: 'CO',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(46,204,113,0.2)',
            borderColor: 'rgb(46,204,113)',
            pointHoverBackgroundColor: 'rgba(46,204,113,0.2)',
            pointHoverBorderColor: 'rgb(46,204,113)',
            borderWidth: 2,
            data: [1, 2, 1, 2, 2, 2]
            //generateDataset(100, 6, 30)
        },{
            label: 'CH4',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(52,152,219,0.2)',
            borderColor: 'rgb(52,152,219)',
            pointHoverBackgroundColor: 'rgba(52,152,219,0.2)',
            pointHoverBorderColor: 'rgb(52,152,219)',
            borderWidth: 2,
            data: [68, 72, 71, 69, 73, 78]
        },{
            label: 'HCHO',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(155,89,182,0.2)',
            borderColor: 'rgb(155,89,182)',
            pointHoverBackgroundColor: 'rgba(155,89,182,0.2)',
            pointHoverBorderColor: 'rgb(155,89,182)',
            borderWidth: 2,
            data: [27, 29, 33, 34, 30, 36]
        },{
            label: 'O3',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(241,196,15,0.2)',
            borderColor: 'rgb(241,196,15)',
            pointHoverBackgroundColor: 'rgba(241,196,15,0.2)',
            pointHoverBorderColor: 'rgb(241,196,15)',
            borderWidth: 2,
            data: [47, 43, 42, 46, 45, 43]
        },{
            label: 'NO2',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(230,126,34,0.2)',
            borderColor: 'rgb(230,126,34)',
            pointHoverBackgroundColor: 'rgba(230,126,34,0.2)',
            pointHoverBorderColor: 'rgb(230,126,34)',
            borderWidth: 2,
            data: [71, 73, 77, 72, 73, 78]
        },{
            label: 'SO2',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(231,76,60,0.2)',
            borderColor: 'rgb(231,76,60)',
            pointHoverBackgroundColor: 'rgba(231,76,60,0.2)',
            pointHoverBorderColor: 'rgb(231,76,60)',
            borderWidth: 2,
            data: [60, 62, 67, 63, 65, 66]
        },{
            label: 'MP2,5',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(55, 66, 250,0,6)',
            borderColor: 'rgba(55, 66, 250,1.0)',
            pointHoverBackgroundColor: 'rgba(55, 66, 250,0,6)',
            pointHoverBorderColor: 'rgba(55, 66, 250,1.0)',
            borderWidth: 2,
            data: [38, 35, 37, 35, 34, 36]
        },{
            label: 'MP10',
            fill: false,
            lineTension: 0.1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            borderJoinStyle: 'miter',
            backgroundColor: 'rgba(47, 53, 66,0.2)',
            borderColor: 'rgba(47, 53, 66,1.0)',
            pointHoverBackgroundColor: 'rgba(47, 53, 66,0,2)',
            pointHoverBorderColor: 'rgba(47, 53, 66,1.0)',
            borderWidth: 2,
            data: [8, 10, 9, 13, 11, 14]
        }
    ],
};

const options = {
    maintainAspectRatio: false,
};

const MainHistoryGraph = () => {
    const classes = useStyles();
    return <Card className={classes.root}>
        <CardContent
            style={{
                height: '400px',
                paddingBottom: '26px'
            }}
        >
            <Typography
                style={{
                    textAlign: 'center'
                }}
                variant="h5" component="h2" >
                History of gases and particles (%)
            </Typography>
           <div
            style={{
                height: "340px",
                marginTop: '10px'
            }}
           >
               <Line
                   data={data}
                   width={100}
                   height={100}
                   options={options}
               />
           </div>
        </CardContent>
    </Card>
};

export default MainHistoryGraph;