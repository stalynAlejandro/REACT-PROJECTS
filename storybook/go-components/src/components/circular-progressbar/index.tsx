import React from "react";
import { circularProgressbarPropsType } from "./types/types";
import { getValueWithType } from "./functions";
import "./styles/circular-progressbar.scss";

const CircularProgressbar = ({
    locale = "en-GB",
    value,
    percentValue,
}: circularProgressbarPropsType) => {
    const radius = 100 / (3.14159 * 2); // Needed for a 100(%) length circumference

    return (
        <div className="circular-progressbar__main-container">
            <div className="circular-progressbar__percent">
                <svg viewBox="0 0 36 36">
                    <path
                        className="circle"
                        d={`M18 2.0845
                        a ${radius} ${radius} 0 0 1 0 ${radius * 2}
                        a ${radius} ${radius} 0 0 1 0 -${radius * 2}`}
                    ></path>
                    <path
                        className="circle"
                        d={`M18 2.0845
                        a ${radius} ${radius} 0 0 1 0 ${radius * 2}
                        a ${radius} ${radius} 0 0 1 0 -${radius * 2}`}
                        strokeDasharray={`${percentValue}, 100`}
                    ></path>
                </svg>
                <div className="circular-progressbar__number-group">
                    <div className="circular-progressbar__numerical-value">
                        {percentValue}%
                    </div>
                    {value && (
                        <div className="circular-progressbar__percentage-value">
                            {getValueWithType(value, locale)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CircularProgressbar;
