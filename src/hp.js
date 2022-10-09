import React from "react";

import { Grid, Box } from "@mui/material";

import Card from "./c.js";

const HomePage = () => {
    return (
        <Box
            className="container-job-listings"
            sx={{
                marginTop: "5%",
                marginLeft: { xs: "3%", lg: "22%" },
                marginRight: { xs: "3%", lg: "22%" },
            }}
        >
            <Grid container spacing={2.5}>
                {/* Sample Job Listing Cards */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
