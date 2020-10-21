import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import DicasRespirador from "../OurRecommendations/dicas-respirador.png";
import Physical from "../OurRecommendations/dicas_execicios.png"
import FirstsHintsCards from './FirstHintsCards'
import Recommendation from "../OurRecommendations/Recommendation";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

const FirstsHints = () => {


    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardContent className={classes.grid}>
                <Typography variant="h5" component="h2">
                    Hints for you
                </Typography>
                <Divider />

                <FirstsHintsCards
                    name={"Use air humidifiers"}
                    description={"Air humidifiers have the function of keeping the humidity level of the environment within the standards, thus facilitating breathing."}
                    image={DicasRespirador}
                />

                <br/>

                <FirstsHintsCards
                    name={"Practice physical activities"}
                    description={"Keeping the body in motion oxygenates the blood, and this is important for the well functioning of the respiratory system."}
                    image={Physical}
                />


            </CardContent>


        </Card>




    );
};

export default FirstsHints;