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
    const [isID, setIsID] = React.useState(false);
    const [isCP, setIsCP] = React.useState(false);
    const [isDC, setIsDC] = React.useState(false);
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("name", name);

        console.log(isHAS);
        console.log(isDM1);
        console.log(isDM2);
        console.log(isID);
        console.log(isCP);
        console.log(isDC);


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

        if(isDM2) {
            localStorage.setItem("isID", true);
        }else{
            localStorage.removeItem("isID");
        }

        if(isDM2) {
            localStorage.setItem("isCP", true);
        }else{
            localStorage.removeItem("isCP");
        }

        if(isDM2) {
            localStorage.setItem("isDC", true);
        }else{
            localStorage.removeItem("isDC");
        }


        window.location = window.location;
    };

    return <div className={classes.root}>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Olá! Seja bem vindo!
                </Typography>
                Antes de acessar o sistema, gostariamos que nos desse algumas informações suas para personalizarmos sua experiencia.
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
                    Selecione suas comorbidades:
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
                        control={<Checkbox checked={isID} onChange={(event, checked) => {
                            setIsID(checked);
                        }} name="jason" />}
                        label="Immunodeficiency"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isCP} onChange={(event, checked) => {
                            setIsCP(checked);
                        }} name="jason" />}
                        label="Cardiopathy"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isDC} onChange={(event, checked) => {
                            setIsDC(checked);
                        }} name="jason" />}
                        label="Congenital disorders"
                    />

                </FormGroup>
            </CardContent>
            <CardActions className={classes.action}>
                <Button size="small" style={{color: '#3468BC'}}
                    onClick={handleSubmit}
                >Entrar</Button>
            </CardActions>
        </Card>
    </div>
};

export default SignUp

