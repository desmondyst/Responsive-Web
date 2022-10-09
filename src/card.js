import React from "react";

import { Paper } from "@mui/material";

import BottomInformationContainer from "./CardContainers/BottomInformationContainer";
import TopInformationContainer from "./CardContainers/TopInformationContainer";
import "./Card.css";

const card = () => {
    return (
        <div className="card">
            <Paper
                onClick={() => console.log("placeholder for link")}
                sx={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                }}
            >
                <TopInformationContainer />

                {/* Container for TechStack taggings */}
                <BottomInformationContainer />
            </Paper>
        </div>
    );
};

export default card;
