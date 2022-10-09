import React from "react";

import { Box } from "@mui/material";

import TechStack from "../CardComponents/ts.js";

const BottomInformationContainer = () => {
    return (
        <Box
            className="jobListingCardBottomInformation"
            maxWidth="90%"
            padding="20px"
            display="flex"
        >
            <TechStack techStackName={"RestAPI"} />
            <TechStack techStackName={"OAuth"} />
            <TechStack techStackName={"API"} />
        </Box>
    );
};

export default BottomInformationContainer;
