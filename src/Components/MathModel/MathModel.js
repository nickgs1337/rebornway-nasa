import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import equation1 from "./img/math_base.png"
import equation2 from "./img/math_base_1.png"
import equation3 from "./img/math_base_2.png"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});


const MathModel = () => {


    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardContent className={classes.grid}>
                <Typography variant="h5" component="h2">
                    Mathematical model
                </Typography>
                <Divider />

                <br />

                <div
                    style={{
                        width: '100%',
                        textJustify: 'justify'
                    }}>
                For starters, we consider a weighted average of each of the gases and particles in the region. In this way we can analyze in percentage the ratio of gases.
                </div>

                <img
                    style={{
                        width: '70%',
                        alignContent: 'center'
                    }}
                    src={equation1} alt="" />

                <br />

                <div
                    style={{
                        width: '100%',
                        textJustify: 'justify'
                    }}>
                    The diseases listed in the profile contribute to individual health, thus assigning a weight for each disease to determine the degree of risk.
                </div>

                <img
                    style={{
                        width: '70%',
                        alignContent: 'center'
                    }}
                    src={equation2} alt="" />

                <br />

                <div
                    style={{
                        width: '100%',
                        textJustify: 'justify'
                    }}>
                    Data from existing pollutants and diseases are combined, forming a single individual result for the user. The higher this result, the worse the health.
                </div>

                <img
                    style={{
                        width: '70%',
                        alignContent: 'center'
                    }}
                    src={equation3} alt="" />

            </CardContent>


        </Card>




    );
};

export default MathModel;