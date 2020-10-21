import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#00CEF6'
    },
    card: {
        width: '30vw'
    },
    form: {
        flexDirection: 'column'
    },
    action: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

const SignUp = () => {
    const classes = useStyles();
    const [name, setName] = React.useState("");
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
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("name", name);

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

    return <div className={classes.root}>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Hello! Welcome back!
                </Typography>
                Before accessing the system, we would like you to give us some of your information to personalize your experience.
                <Divider />
                <FormGroup row className={classes.form} onSubmit={handleSubmit}>
                    <br/>
                    <TextField id="standard-basic" label="What's your name?" required
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <br/>
                    Select your comorbidities:
                    <FormControlLabel
                        control={<Checkbox checked={isHAS} onChange={(event, checked) => {
                            setIsHAS(checked);
                        }} name="jason" />}
                        label="Systemic arterial hypertension"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isDM1} onChange={(event, checked) => {
                            setIsDM1(checked);
                        }} name="jason" />}
                        label="Diabetes Type 1"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isDM2} onChange={(event, checked) => {
                            setIsDM2(checked);
                        }} name="jason" />}
                        label="Diabetes Type 2"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isAl} onChange={(event, checked) => {
                            setIsID(checked);
                        }} name="jason" />}
                        label="Alzheimer"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isPa} onChange={(event, checked) => {
                            setIsPa(checked);
                        }} name="jason" />}
                        label="Parkinson"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isHu} onChange={(event, checked) => {
                            setIsHu(checked);
                        }} name="jason" />}
                        label="Huntington"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isMs} onChange={(event, checked) => {
                            setIsMs(checked);
                        }} name="jason" />}
                        label="Multiple Sclerosis"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isEp} onChange={(event, checked) => {
                            setIsEp(checked);
                        }} name="jason" />}
                        label="Epilepsy"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isCb} onChange={(event, checked) => {
                            setIsCb(checked);
                        }} name="jason" />}
                        label="Chronic bronchitis"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isPn} onChange={(event, checked) => {
                            setIsPn(checked);
                        }} name="jason" />}
                        label="Pneumonia"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isAr} onChange={(event, checked) => {
                            setIsAr(checked);
                        }} name="jason" />}
                        label="Allergic rhinitis"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isSi} onChange={(event, checked) => {
                            setIsSi(checked);
                        }} name="jason" />}
                        label="Sinusitis"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isCo} onChange={(event, checked) => {
                            setIsCo(checked);
                        }} name="jason" />}
                        label="Chronic Obstructive Pulmonary Disease"
                    />

                </FormGroup>
            </CardContent>
            <CardActions className={classes.action}>
                <Button size="small" style={{color: '#3468BC'}}
                    onClick={handleSubmit}
                >Join</Button>
            </CardActions>
        </Card>
    </div>
};

export default SignUp

