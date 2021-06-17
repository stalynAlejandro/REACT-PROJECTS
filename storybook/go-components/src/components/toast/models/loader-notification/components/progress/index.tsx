import React from "react";
import { ProgressBarType } from "./types";
import "./styles/progressbar.scss";

const ProgressBar = ({ percentage }: ProgressBarType) => {
    const width = `${percentage?.toFixed(2)}%`;
    return (
        <div className="progress progress-striped active">
            <div
                role="progressbar"
                style={{ width: width }}
                className="progress-bar progress-bar-info"
            ></div>
        </div>
    );
};

export default ProgressBar;
