import React from 'react';
import MainGraph from "../MainGraph/MainGraph";
import SubGraph from "../SubGraph/SubGraph";
import Grid from "@material-ui/core/Grid";
import MainHistoryGraph from "../MainHistoryGraph/MainHistoryGraph";
import WorldMap from "../WorldMap/WorldMap";
import ProfileCard from "../ProfileCard/ProfileCard";
import PollutionMap from "../WorldMap/PollutionMap";

const Dashboard = () => {
    return <Grid container spacing={3}>
        <Grid item xs={4}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={12}>
                    <SubGraph/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={8}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainGraph />
                </Grid>
                <Grid item xs={12}>
                    <MainHistoryGraph/>
                </Grid>
                <Grid item xs={12}>
                    <PollutionMap />
                </Grid>
            </Grid>
        </Grid>

    </Grid>
};

export default Dashboard;