import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AssistantIcon from '@material-ui/icons/Assistant';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from "@material-ui/core/CircularProgress";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    icon: {
        zIndex: 10,
        position: 'fixed',
        right: theme.spacing(12),
        bottom: theme.spacing(3),
    },
}));

const WhatsAppBot = () => {
    const classes = useStyles();

    return <div>
            <div className={classes.icon}>
            <Fab
                style={{
                    backgroundColor: '#01a000'
                }}
                color="primary" aria-label="add" onClick={() => {
                window.location = 'https://api.whatsapp.com/send?phone=5519992225879&text=Hello%2C+Annie%21+I%27m+interested+in+the+RebornWay+project%2C+could+you+tell+me+more+about+it%3F'
            }}>
                <WhatsAppIcon />
            </Fab>
        </div>
    </div>

};

export default WhatsAppBot;