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
            paddingRight="15px"
        >
            <img src={GovTechLogo} alt={"GovTechLogo"} />
        </Box>
    );
};

export default AvatarContainer;
