import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import DataLabelChart from './DataLabelChart';
import LineAreaChart from './LineAreaChart';

//-----------------------|| ANALYTICS ||-----------------------//

const Analytics = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
                <Grid container>
                    <Grid item xs={12} md={12} lg={6}>
                        <DataLabelChart />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <LineAreaChart />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;
