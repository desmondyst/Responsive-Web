import React from "react";

import { Paper, Box, Typography } from "@mui/material";

const RecencyInformationContainer = () => {
    return (
        <Box
            marginTop="10%"
            marginBottom="3%"
            className="Recency-information"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography
                color="#1fc76a"
                fontStyle="italic"
                fontFamily="Open Sans"
                fontSize={"1.1rem"}
                fontWeight="Bold"
            >
                about 22 hours ago
            </Typography>
            <Paper
                elevation={0}
                sx={{
                    backgroundColor: "#DDF7E9",
                    paddingY: "5px",
                    paddingX: "8px",
                    borderRadius: "5px",
                }}
            >
                <Typography color="#1fc76a" fontWeight="Medium">
                    PM
                </Typography>
            </Paper>
        </Box>
    );
};

export default RecencyInformationContainer;
