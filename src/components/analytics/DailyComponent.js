import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper, CardContent } from '@material-ui/core';

// assets
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//-----------------------|| DAILY COMPONENT ||-----------------------//

const useStyles = makeStyles((theme) => ({
    dailyUser: {
        background: 'rgb(103, 58, 183)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        padding: 10
    },
    dailyPage: {
        background: 'rgb(33, 150, 243)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 20,
        padding: 10
    },
    icon: {
        width: '100px',
        height: '100px',
        opacity: 0.5,
        color: '#fff'
    },
    positionIcon: {
        transform: 'rotate(25deg)',
        position: 'absolute',
        left: -17,
        bottom: -27
    },
    text: {
        textAlign: 'center'
    },
    textColor: {
        color: '#fff'
    }
}));

const DailyComponent = (theme) => {
    const classes = useStyles();
    return (
        <>
            <Paper classes=".MuiPaper-root" className={classes.dailyUser}>
                <CardContent>
                    <Typography variant="subtitle2" className={classes.positionIcon}>
                        <AccountCircleIcon className={classes.icon} />
                    </Typography>

                    <Grid container className={classes.text}>
                        <Grid item sm={12}>
                            <Typography variant="h2" className={classes.textColor}>
                                1,658
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="body1">Daily user</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Paper>
            {/* <br /> */}
            <Paper classes=".MuiPaper-root" className={classes.dailyPage}>
                <CardContent>
                    <Typography variant="subtitle2" className={classes.positionIcon}>
                        <FileCopyOutlinedIcon className={classes.icon} />
                    </Typography>

                    <Grid container className={classes.text}>
                        <Grid item sm={12}>
                            <Typography variant="h2" className={classes.textColor}>
                                1K
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="body1">Daily page view</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Paper>
        </>
    );
};

export default DailyComponent;
