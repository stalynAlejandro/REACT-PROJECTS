import React, { useEffect, useState } from "react";

import {
    circleDrawPropsType,
    circularProgressbarPropsType,
} from "./types/types";
import { getCircleDrawPropsHelper } from "./constants";

import "./styles/semicircular-progressbar.scss";

const SemicircularProgressbar = ({
    value,
    percentValue,
}: circularProgressbarPropsType) => {
    const [circleDrawProps, setCircleDrawProps] = useState<circleDrawPropsType>(
        getCircleDrawPropsHelper(window?.innerWidth)
    );

    useEffect(() => {
        let timeoutId: null | ReturnType<typeof setTimeout> = null;
        const resizeListener = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setCircleDrawProps(
                    getCircleDrawPropsHelper(window?.innerWidth)
                );
            }, 1000);
        };

        window.addEventListener("resize", resizeListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return (
        <div className="semicircular-progressbar__main-container">
            <div className="semicircular-progressbar__percent">
                <svg>
                    <circle
                        cx={parseFloat(circleDrawProps.radius) + 10}
                        cy={circleDrawProps.radius}
                        r={circleDrawProps.radius}
                        style={{
                            strokeDashoffset: circleDrawProps.dataOffset(50),
                            transform: circleDrawProps.coords,
                        }}
                    />
                    <circle
                        cx={parseFloat(circleDrawProps.radius) + 10}
                        cy={circleDrawProps.radius}
                        r={circleDrawProps.radius}
                        style={{
                            strokeDashoffset: circleDrawProps.dataOffset(
                                percentValue > 100 ? 50 : percentValue / 2
                            ),
                            transform: circleDrawProps.coords,
                        }}
                    />
                </svg>
                <div className="semicircular-progressbar__number-group">
                    <div className="semicircular-progressbar__numerical-value">
                        {percentValue}%
                    </div>
                    <div className="semicircular-progressbar__percentage-value">
                        {value}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SemicircularProgressbar;
