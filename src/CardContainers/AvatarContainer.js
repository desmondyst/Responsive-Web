import React from "react";

import { Box } from "@mui/material";

import GovTechLogo from "../assets/GovTechLogo.jpeg";
import "./AvatarContainer.css";

const AvatarContainer = () => {
    return (
        <Box
            className="Avatar-container"
            display="flex"
            justifyContent="center"
            sx={{ paddingRight: { xs: "15px", sm: "0px" } }}
        >
            <img src={GovTechLogo} alt={"GovTechLogo"} />
        </Box>
    );
};

export default AvatarContainer;
