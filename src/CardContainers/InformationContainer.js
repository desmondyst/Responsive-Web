import React from "react";

import { Box, Typography } from "@mui/material";

const InformationContainer = () => {
    return (
        <Box
            className="Information-container"
            display="flex"
            flexDirection="column"
        >
            <Typography fontFamily="Open Sans" fontWeight="Medium">
                GovTech
            </Typography>
            <Typography
                sx={{
                    maxWidth: "100%",
                    fontSize: { xs: "100%", sm: "130%", md: "140%" },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                }}
                fontWeight="Bold"
            >
                Product Manager, National Digital Identity
            </Typography>
        </Box>
    );
};

export default InformationContainer;
