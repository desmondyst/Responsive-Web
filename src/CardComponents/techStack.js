import React from "react";

import { Paper, Typography } from "@mui/material";

/**
 * Abstraction for rendering techstack for sample data
 *
 */

const techStack = ({ techStackName }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: "#f1f1f1",
                paddingY: "5px",
                paddingX: "8px",
                marginRight: "5px",
                borderRadius: "5px",
            }}
        >
            <Typography
                color="#838383"
                fontWeight="Bold"
                fontFamily="Roboto Mono"
            >
                {techStackName}
            </Typography>
        </Paper>
    );
};

export default techStack;
