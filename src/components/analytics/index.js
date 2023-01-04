import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
// import MarketShare from './MarketShare';
// import SocialNetwork from './SocialNetwork';
import TotalRevenue from './TotalRevenue';
import OderReceive from './OrderReceive';
import BasicTable from './LatestCustomer';
import DailyComponent from './DailyComponent';
import Revenue from './Revenue';

//-----------------------|| ANALYTICS ||-----------------------//

const Analytics = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
                <Grid container>
                    {/* <Grid item xs={12}>
                        <MarketShare />
                    </Grid> */}
                    <Grid item xs={12} md={12} lg={6}>
                        <OderReceive />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Revenue />
                    </Grid>
                    <Grid item xs={12}>
                        <BasicTable />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                {/* <Grid item xs={12}>
                    <SocialNetwork />
                </Grid> */}
                <Grid item xs={12}>
                    <TotalRevenue />
                </Grid>
                <Grid item xs={12} style={{ paddingTop: 20 }}>
                    <DailyComponent />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;
