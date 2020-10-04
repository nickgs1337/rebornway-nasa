import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Bar} from "react-chartjs-2";
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
            label: 'General Pollution',
            backgroundColor: 'rgb(0,167,200)',
            borderWidth: 0,
            // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            // hoverBorderColor: 'rgba(255,99,132,1)',
            data: [17, 18, 17, 17, 19, 18, 17]
        }
    ]
};

const options = {
    legend: {
        display: false
    },
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

const MainGraph = () => {
    const classes = useStyles();
    return <Card className={classes.root}>
        <CardContent
            style={{
                height: '400px'
            }}
        >
            <Typography
                style={{
                    textAlign: 'center'
                }}
                variant="h5" component="h2">
                Evolution of General Pollution
            </Typography>
            <div
                style={{
                    height: "340px"
                }}
            >
                <Bar
                    data={data}
                    width={100}
                    height={100}
                    options={options}
                />
            </div>
        </CardContent>
    </Card>
};

export default MainGraph;