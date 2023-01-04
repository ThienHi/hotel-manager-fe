import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

// assets
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//-----------------------|| ORDER RECEIVE ||-----------------------//

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    revenue: {
        backgroundColor: 'rgb(103, 58, 183)',
        margin: '2% 1%',
        borderRadius: '15px'
    },
    orderReceive: {
        backgroundColor: 'rgb(33, 150, 243)',
        margin: '2% 1%',
        borderRadius: '15px'
    },
    icon: {
        width: '120px',
        height: '120px',
        float: 'right',
        color: '#ffffff',
        opacity: 0.5
    },
    text: {
        color: '#ffffff',
        padding: '5px'
    }
}));

const OderReceive = (theme) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.orderReceive} alignItems="center">
                <Grid item xs={6}>
                    <Grid item>
                        <Typography variant="h4" className={classes.text}>
                            Orders Received
                        </Typography>
                        <Typography variant="h3" className={classes.text}>
                            486
                        </Typography>
                        <Typography variant="subtitle1" className={classes.text}>
                            20% Increase
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <AccountCircleIcon className={classes.icon} />
                </Grid>
            </Grid>
        </div>
    );
};

export default OderReceive;
