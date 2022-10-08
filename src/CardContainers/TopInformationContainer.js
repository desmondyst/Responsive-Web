import React from "react";

import { Box, Grid, Divider } from "@mui/material";

import RecencyInformationContainer from "../CardContainers/RecencyInformationContainer";
import InformationContainer from "../CardContainers/InformationContainer";
import AvatarContainer from "../CardContainers/AvatarContainer";

const TopInformationContainer = () => {
    return (
        <Box
            className="jobListingCardTopInformation"
            padding="20px"
            paddingBottom="0px"
        >
            <Grid container alignItems="center" marginRight="200px">
                <Grid item xs={3.5} sm={12} md={12}>
                    {/* Container for Avatar */}
                    <AvatarContainer />
                </Grid>
                <Grid item xs={8.5} sm={12} md={12}>
                    {/* Container for Information */}
                    <InformationContainer />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    {/* Container for RecencyInformation */}
                    <RecencyInformationContainer />
                </Grid>
            </Grid>
            <Divider />
        </Box>
    );
};

export default TopInformationContainer;
