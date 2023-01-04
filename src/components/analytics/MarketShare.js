import PropTypes from 'prop-types';
import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Box} from '@material-ui/core';
import SkeletonEarningCard from '../../../ui-component/cards/Skeleton/EarningCard';

// assets
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import LogoTwitter from '../../../assets/images/dashboard/logo-twitter';
import LogoFaceBook from '../../../assets/images/dashboard/logo-facebook';
import LogoYouTube from '../../../assets/images/dashboard/logo-youtube';

//charts
import Chart from 'react-apexcharts';

// project imports
import MarketShareChart from './chart-data/MarketShareChart'

// style constant
export const gridSpacing = 3;

//-----------------------|| MARKET SHARE ||-----------------------//

const useStyles = makeStyles((theme) => ({
    logoFacebook: {
        padding : "8px",
        borderRadius : "30%",
        width: "40px",
        height: "40px",
        marginRight: "3px",
        backgroundColor : "rgb(237 231 246)",
        color: "rgb(103, 58, 183)",
    },
    logoTwitter: {
        padding : "8px",
        borderRadius : "30%",
        width: "40px",
        height: "40px",
        marginRight: "3px",
        backgroundColor : "rgb(227 242 253)",
        color: "rgb(33, 150, 243)",
    },
    logoYouTube: {
        padding : "8px",
        borderRadius : "30%",
        width: "40px",
        height: "40px",
        marginRight: "3px",
        backgroundColor : "rgb(251 232 233)",
        color: "rgb(244, 67, 54)",
    },
    card:{
        backgroundColor: '#ffffff',
        paddingTop: 24,
        borderRadius: 15
    },
    itemGrid:{
        paddingTop: 12,
        paddingLeft: 24
    },
    iconTrending: {
        verticalAlign : 'middle',
        fontSize: 35,
        color: "#EE0000",
    },
    textTrending: {
        paddingRight:24
    },
    logoSocial:{
        paddingTop:12,
        paddingLeft: 12
    }
}));

const MarketShare = ({ isLoading }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <div className={classes.card}>
                    <Grid container spacing={gridSpacing} className={classes.itemGrid}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="h3">Market Share</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle">Department wise monthly sales report</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">
                                        <span className={classes.iconTrending}><TrendingDownIcon /></span>
                                        <span className={classes.textTrending}> 99,368.23</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={1} className={classes.logoSocial}>
                                <Box flexDirection="row" p={1} m={1}>
                                    <Box display="flex" alignItems="center">
                                        <div className = {classes.logoFacebook}><LogoFaceBook /></div>
                                        <h3>+54.69%</h3>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" p={1} m={1}>
                                    <Box display="flex" alignItems="center">
                                        <div className = {classes.logoTwitter}><LogoTwitter /></div>
                                        <h3>-50.69%</h3>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" p={1} m={1}>
                                    <Box display="flex" alignItems="center">
                                        <div className = {classes.logoYouTube}><LogoYouTube /></div>
                                        <h3>-50.69%</h3>
                                    </Box>
                                </Box>
                            </Grid>
                    </Grid>
                    <Grid>
                        <Chart {...MarketShareChart} />
                    </Grid>
                </div>
            )}
        </React.Fragment>
    );
};

MarketShare.propTypes = {
    isLoading: PropTypes.bool
};

export default MarketShare;
