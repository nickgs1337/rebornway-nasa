import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Doughnut} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import MainGraph from "../MainGraph/MainGraph";
import MetaGraph from "../MetaGraph/MetaGraph";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

const ProfileCard = () => {

    const classes = useStyles();
    return localStorage.getItem("name") ? (<Card className={classes.root}>
        <CardContent className={classes.grid}>
            <Typography variant="h5" component="h2">
                Hi, {localStorage.getItem("name")}
            </Typography>

            Your sickness:
            <Divider />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isHAS")} onChange={() => {}} name="jason" />}
                label="Systemic arterial hypertension"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isDM1")} onChange={() => {}} name="jason" />}
                label="Diabetes Type 1"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isDM2")} onChange={() => {}} name="jason" />}
                label="Diabetes Type 2"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isAl")} onChange={() => {}} name="jason" />}
                label="Alzheimer"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isPa")} onChange={() => {}} name="jason" />}
                label="Parkinson"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isHu")} onChange={() => {}} name="jason" />}
                label="Huntington"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isMs")} onChange={() => {}} name="jason" />}
                label="Multiple Sclerosis"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isEp")} onChange={() => {}} name="jason" />}
                label="Epilepsy"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isAs")} onChange={() => {}} name="jason" />}
                label="Asthma"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isCb")} onChange={() => {}} name="jason" />}
                label="Chronic bronchitis"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isPn")} onChange={() => {}} name="jason" />}
                label="Pneumonia"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isAr")} onChange={() => {}} name="jason" />}
                label="Allergic rhinitis"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isSi")} onChange={() => {}} name="jason" />}
                label="Sinusitis"
            />
            <FormControlLabel
                control={<Checkbox checked={!!localStorage.getItem("isCo")} onChange={() => {}} name="jason" />}
                label="Chronic Obstructive Pulmonary Disease"
            />
        </CardContent>
    </Card>) : (<Card className={classes.root}>
        <CardContent className={classes.grid}>
            <Typography variant="h5" component="h2">
                Hi, stranger!
            </Typography>

            Want a personalized experience to discover what pollutant more affects your health condition?<br/>
            Visit our Health Score Calculator <a href="https://docs.google.com/spreadsheets/d/1YBfdkCjlajwlHp3vkhliwkTgXlp6Px2zd1rsamBAhfk/edit?usp=sharing">here!</a>
        </CardContent>
    </Card>)
};

export default ProfileCard;