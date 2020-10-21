import React, {useState} from 'react';
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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import PostList from "./PostList";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextAndIcons from "./TextAndIcons";
import Teste from "./Teste";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

const ProfileCard = () => {

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");

    const [open, setOpen] = React.useState(false);
    const [isHAS, setIsHAS] = React.useState(false);
    const [isDM1, setIsDM1] = React.useState(false);
    const [isDM2, setIsDM2] = React.useState(false);
    const [isAl, setIsID] = React.useState(false);
    const [isPa, setIsPa] = React.useState(false);
    const [isHu, setIsHu] = React.useState(false);
    const [isMs, setIsMs] = React.useState(false);
    const [isEp, setIsEp] = React.useState(false);
    const [isAs, setIsAs] = React.useState(false);
    const [isCb, setIsCb] = React.useState(false);
    const [isPn, setIsPn] = React.useState(false);
    const [isAr, setIsAr] = React.useState(false);
    const [isSi, setIsSi] = React.useState(false);
    const [isCo, setIsCo] = React.useState(false);
    const [location, setLocation] = React.useState(null);


    const handleSubmit = (event) => {

        if(event) {
            event.preventDefault();
        }
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);

        if(isHAS) {
            localStorage.setItem("isHAS", true);
        }else{
            localStorage.removeItem("isHAS");
        }

        if(isDM1) {
            localStorage.setItem("isDM1", true);
        }else{
            localStorage.removeItem("isDM1");
        }

        if(isDM2) {
            localStorage.setItem("isDM2", true);
        }else{
            localStorage.removeItem("isDM2");
        }

        if(isAl) {
            localStorage.setItem("isAl", true);
        }else{
            localStorage.removeItem("isAl");
        }

        if(isPa) {
            localStorage.setItem("isPa", true);
        }else{
            localStorage.removeItem("isPa");
        }

        if(isHu) {
            localStorage.setItem("isHu", true);
        }else{
            localStorage.removeItem("isHu");
        }

        if(isMs) {
            localStorage.setItem("isMs", true);
        }else{
            localStorage.removeItem("isMs");
        }

        if(isEp) {
            localStorage.setItem("isEp", true);
        }else{
            localStorage.removeItem("isEp");
        }

        if(isAs) {
            localStorage.setItem("isAs", true);
        }else{
            localStorage.removeItem("isAs");
        }

        if(isCb) {
            localStorage.setItem("isCb", true);
        }else{
            localStorage.removeItem("isCb");
        }

        if(isPn) {
            localStorage.setItem("isPn", true);
        }else{
            localStorage.removeItem("isPn");
        }

        if(isAr) {
            localStorage.setItem("isAr", true);
        }else{
            localStorage.removeItem("isAr");
        }

        if(isSi) {
            localStorage.setItem("isSi", true);
        }else{
            localStorage.removeItem("isSi");
        }

        if(isCo) {
            localStorage.setItem("isCo", true);
        }else{
            localStorage.removeItem("isCo");
        }

        window.location = window.location;
    };


    const classes = useStyles();

    return localStorage.getItem("name") ? (<Card className={classes.root}>
        <CardContent className={classes.grid}>

            <div style={{fontSize: '22px'}}>
                Hi, {localStorage.getItem("name")}.
            </div>

            <div style={{fontSize: '18px'}}>
                {localStorage.getItem("age")} years old
            </div>

            <div style={{fontSize: '14px'}}>
                <TextAndIcons
                    icon={<LocationOnIcon />}
                    name={<PostList/>}
                />
            </div>

            Your sickness:
            <Divider />

            <Teste/>


            <Grid container spacing={0}>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isHAS") === "true"} onChange={(event) => {
                        localStorage.setItem("isHAS", !(localStorage.getItem("isHAS") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Systemic arterial hypertension"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isDM1") === "true"} onChange={(event) => {
                        localStorage.setItem("isDM1", !(localStorage.getItem("isDM1") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Diabetes Type 1"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isDM2") === "true"} onChange={(event) => {
                        localStorage.setItem("isDM2", !(localStorage.getItem("isDM2") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Diabetes Type 2"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isAl") === "true"} onChange={(event) => {
                        localStorage.setItem("isAl", !(localStorage.getItem("isAl") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Alzheimer"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isPa") === "true"} onChange={(event) => {
                        localStorage.setItem("isPa", !(localStorage.getItem("isPa") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Parkinson"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isHu") === "true"} onChange={(event) => {
                        localStorage.setItem("isHu", !(localStorage.getItem("isHu") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Huntington"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isMs") === "true"} onChange={(event) => {
                        localStorage.setItem("isMs", !(localStorage.getItem("isMs") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Multiple Sclerosis"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isEp") === "true"} onChange={(event) => {
                        localStorage.setItem("isEp", !(localStorage.getItem("isEp") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Epilepsy"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isAs") === "true"} onChange={(event) => {
                        localStorage.setItem("isAs", !(localStorage.getItem("isAs") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Asthma"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isCb") === "true"} onChange={(event) => {
                        localStorage.setItem("isCb", !(localStorage.getItem("isCb") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Chronic bronchitis"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isPn") === "true"} onChange={(event) => {
                        localStorage.setItem("isPn", !(localStorage.getItem("isPn") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Pneumonia"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isAr") === "true"} onChange={(event) => {
                        localStorage.setItem("isAr", !(localStorage.getItem("isAr") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Allergic rhinitis"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isSi") === "true"} onChange={(event) => {
                        localStorage.setItem("isSi", !(localStorage.getItem("isSi") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Sinusitis"
                />
                </Grid>
                <Grid item xs={5}>
                <FormControlLabel
                    control={<Checkbox checked={localStorage.getItem("isCo") === "true"} onChange={(event) => {
                        localStorage.setItem("isCo", !(localStorage.getItem("isCo") === "true"));
                        window.location = window.location;
                    }} name="jason" />}
                    label="Chronic Obstructive Pulmonary Disease"
                />
                </Grid>
            </Grid>
        </CardContent>
    </Card>) : (<div> <div style={{marginTop: '65vh'}}></div>
        <Dialog onClose={() => {setOpen(false)}} aria-labelledby="customized-dialog-title" open={true}>
            <DialogTitle id="customized-dialog-title" onClose={() => {setOpen(false)}}>
                {"Your information"}
            </DialogTitle>
            <DialogContent dividers>
                Before accessing the system, we would like you to give us some of your information to personalize your experience.
                <Divider />
                <FormGroup row className={classes.form} onSubmit={handleSubmit} >
                    <br/>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <TextField id="standard-basic" label="What's your name?" required
                                       value={name}
                                       onChange={(event) => {
                                           setName(event.target.value);
                                       }}
                                       style={{
                                           width: '100%'
                                       }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="standard-basic" label="What's your age?" required
                                       value={age}
                                       onChange={(event) => {
                                           setAge(event.target.value);
                                       }}
                                       style={{
                                           width: '100%'
                                       }}
                            />
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Typography variant="h6" component="h4">
                        Select your comorbidities:
                    </Typography>
                    <br/>
                    <br/>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isHAS} onChange={(event, checked) => {
                                    setIsHAS(checked);
                                }} name="jason" />}
                                label="Systemic arterial hypertension"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isDM1} onChange={(event, checked) => {
                                    setIsDM1(checked);
                                }} name="jason" />}
                                label="Diabetes Type 1"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isDM2} onChange={(event, checked) => {
                                    setIsDM2(checked);
                                }} name="jason" />}
                                label="Diabetes Type 2"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isAl} onChange={(event, checked) => {
                                    setIsID(checked);
                                }} name="jason" />}
                                label="Alzheimer"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isPa} onChange={(event, checked) => {
                                    setIsPa(checked);
                                }} name="jason" />}
                                label="Parkinson"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isHu} onChange={(event, checked) => {
                                    setIsHu(checked);
                                }} name="jason" />}
                                label="Huntington"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isMs} onChange={(event, checked) => {
                                    setIsMs(checked);
                                }} name="jason" />}
                                label="Multiple Sclerosis"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isEp} onChange={(event, checked) => {
                                    setIsEp(checked);
                                }} name="jason" />}
                                label="Epilepsy"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isCb} onChange={(event, checked) => {
                                    setIsCb(checked);
                                }} name="jason" />}
                                label="Chronic bronchitis"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isPn} onChange={(event, checked) => {
                                    setIsPn(checked);
                                }} name="jason" />}
                                label="Pneumonia"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isAr} onChange={(event, checked) => {
                                    setIsAr(checked);
                                }} name="jason" />}
                                label="Allergic rhinitis"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isSi} onChange={(event, checked) => {
                                    setIsSi(checked);
                                }} name="jason" />}
                                label="Sinusitis"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox checked={isCo} onChange={(event, checked) => {
                                    setIsCo(checked);
                                }} name="jason" />}
                                label="Chronic Obstructive Pulmonary Disease"
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => {
                    handleSubmit();
                    window.location.href = window.location.origin;
                }} color="primary">
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    </div>)




        /*(<div><Card className={classes.root}>
            <CardContent className={classes.grid}>
                <Typography variant="h5" component="h2">
                    Hi, stranger!
                </Typography>

                You are viewing the overview of a global scenario, the averages are very broad values and cannot inform the true situation of your location.<br/>

                For a better experience, we ask you to fill out the form with a few simple questions and enable your location sharing next. In this way we can identify their comorbidities, pollution levels and temperature as close to their region.<br/>

                <p/>

                Want a personalized experience?  <a href="#" onClick={() => {setOpen(true)}}>Click here</a> and create your registration quickly and simply!
            </CardContent>
        </Card>
            <Dialog onClose={() => {setOpen(false)}} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={() => {setOpen(false)}}>
                    {"Your information"}
                </DialogTitle>
                <DialogContent dividers>
                    Before accessing the system, we would like you to give us some of your information to personalize your experience.
                    <Divider />
                    <FormGroup row className={classes.form} onSubmit={handleSubmit} >
                        <br/>
                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" label="What's your name?" required
                                           value={name}
                                           onChange={(event) => {
                                               setName(event.target.value);
                                           }}
                                           style={{
                                               width: '100%'
                                           }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField id="standard-basic" label="What's your age?" required
                                           value={age}
                                           onChange={(event) => {
                                               setAge(event.target.value);
                                           }}
                                           style={{
                                               width: '100%'
                                           }}
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <br/>
                        <Typography variant="h6" component="h4">
                            Select your comorbidities:
                        </Typography>
                        <br/>
                        <br/>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isHAS} onChange={(event, checked) => {
                                        setIsHAS(checked);
                                    }} name="jason" />}
                                    label="Systemic arterial hypertension"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isDM1} onChange={(event, checked) => {
                                        setIsDM1(checked);
                                    }} name="jason" />}
                                    label="Diabetes Type 1"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isDM2} onChange={(event, checked) => {
                                        setIsDM2(checked);
                                    }} name="jason" />}
                                    label="Diabetes Type 2"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isAl} onChange={(event, checked) => {
                                        setIsID(checked);
                                    }} name="jason" />}
                                    label="Alzheimer"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isPa} onChange={(event, checked) => {
                                        setIsPa(checked);
                                    }} name="jason" />}
                                    label="Parkinson"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isHu} onChange={(event, checked) => {
                                        setIsHu(checked);
                                    }} name="jason" />}
                                    label="Huntington"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isMs} onChange={(event, checked) => {
                                        setIsMs(checked);
                                    }} name="jason" />}
                                    label="Multiple Sclerosis"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isEp} onChange={(event, checked) => {
                                        setIsEp(checked);
                                    }} name="jason" />}
                                    label="Epilepsy"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isCb} onChange={(event, checked) => {
                                        setIsCb(checked);
                                    }} name="jason" />}
                                    label="Chronic bronchitis"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isPn} onChange={(event, checked) => {
                                        setIsPn(checked);
                                    }} name="jason" />}
                                    label="Pneumonia"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isAr} onChange={(event, checked) => {
                                        setIsAr(checked);
                                    }} name="jason" />}
                                    label="Allergic rhinitis"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isSi} onChange={(event, checked) => {
                                        setIsSi(checked);
                                    }} name="jason" />}
                                    label="Sinusitis"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox checked={isCo} onChange={(event, checked) => {
                                        setIsCo(checked);
                                    }} name="jason" />}
                                    label="Chronic Obstructive Pulmonary Disease"
                                />
                            </Grid>
                        </Grid>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        handleSubmit();
                        window.location.href = window.location.origin;
                    }} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>)*/

};

export default ProfileCard;