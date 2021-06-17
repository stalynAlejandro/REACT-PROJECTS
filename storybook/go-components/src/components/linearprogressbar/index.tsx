import React from "react";
import { ProgressBarType } from "./types";
import "./styles/linearprogressbar.scss";

const LinearProgressBar = ({
    value,
    totalValue,
    percentValue,
    height = 1,
    color,
    withLabel = false,
    labelName,
}: ProgressBarType) => {
    return (
        <div className="linear-progress-bar">
            {withLabel && (
                <div className="linear-progress-bar__labels">
                    <span className="linear-progress-bar__label-name">
                        {labelName}
                    </span>
                    <span className="linear-progress-bar__label-value">
                        {value && totalValue
                            ? `${value} / ${totalValue}`
                            : `${percentValue}%`}
                    </span>
                </div>
            )}

            <div
                className="linear-progress-bar__progressbar"
                style={{ height: `${height}rem` }}
            >
                <div
                    className={`filled ${color}`}
                    style={{
                        width: `${
                            value && totalValue
                                ? Math.ceil((value * 100) / totalValue)
                                : percentValue
                        }%`,
                        height: `${height}rem`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LinearProgressBar;
