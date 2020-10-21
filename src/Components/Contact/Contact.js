import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    icon: {
        zIndex: 10,
        position: 'fixed',
        right: theme.spacing(21),
        bottom: theme.spacing(3),
    },
}));

const Contact = () => {
    const classes = useStyles();

    return <div>
            <div className={classes.icon}>
            <Fab
                style={{
                    backgroundColor: '#3468BC'
                }}
                color="primary" aria-label="add" onClick={() => {
                window.open('mailto:rebornway@rebornway.co?subject=About%20HealthScore');
            }}>
                <MailIcon />
            </Fab>
        </div>
    </div>

};

export default Contact;