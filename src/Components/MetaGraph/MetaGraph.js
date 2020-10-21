import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Doughnut} from "react-chartjs-2";
import { Pie3D } from 'react-pie3d'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        border: 'none',
        borderRadius: 0
    }
});

const MetaGraph = ({ title, small, percent, description, subdescription }) => {

    const data = {
        labels: [
            title,
            'Not polluted',
        ],
        datasets: [{
            data: [percent, 100 - percent],
            backgroundColor: [
                percent > 70 ? '#e74c3c' : percent > 50 ? '#f1c40f': '#2ecc71',
                '#E9EAF4'
            ],
            hoverBackgroundColor: [
                percent > 70 ? '#ff5443' : percent > 50 ? '#ffd00f': 'rgba(46,204,113,0.81)',
                '#E9EAF4'
            ]
        }]
    };

    const config = {
        angle: 45,
        height: 15,
        ir: 0.5,
        moveDistance: 0.1,
        onClick: null,
        showTooltips: true,
        size: 0.65,
        stroke: '#fff',
        strokeWidth: 1,
        tooltipShowName: true,
        tooltipShowPercentage: true,
        tooltipShowValue: 0
    };


    const data1 = [
        { value: (100 - percent), label: '', color: '#E9EAF4' },
        { value: percent, label: title, color: (percent > 70 ? '#e74c3c' : percent > 50 ? '#f1c40f': '#2ecc71') },
    ];

    const options = {
        legend: {
            display: false
        }
    };

    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    return  <div>
        <Card className={classes.root}>
            <CardContent
                style={{
                    cursor: description ? 'pointer': 'default'
                }}
                onClick={() => {
                    if(description) {
                        setOpen(true);
                    }
                }}
            >
                <Typography
                    style={{
                        textAlign: 'center',
                        fontSize: '16px'
                    }}
                    variant={small ? "h6" : "h5"} component="h2">
                    {title} ({percent}{'%'})
                </Typography>

                <div style={{
                    textAlign: 'center',
                    fontSize: '12px'
                }}>
                    {subdescription}
                </div>

                <div style={{
                    textAlign: 'center',
                    marginTop: '-40px'
                }}>
                    <Pie3D config={config} data={data1}/>
                </div>
                {/*<Doughnut data={data} options={options}/>*/}
            </CardContent>
        </Card>
        <Dialog onClose={() => {setOpen(false)}} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={() => {setOpen(false)}}>
                {"About " + title}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => {setOpen(false)}} color="primary">
                    Understood!
                </Button>
            </DialogActions>
        </Dialog>
    </div>
};

export default MetaGraph;