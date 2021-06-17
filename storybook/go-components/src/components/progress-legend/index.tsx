import React from "react";
import { loadMessages } from "./languages";
import { ProgressLegendType, RangeType } from "./types";
import "./styles/progress-legend.scss";

const ProgressLegend = ({
    locale = "en-GB",
    rangeColors,
}: ProgressLegendType) => {
    return (
        <div className="progress-legend progress-legend-no-select">
            <div className="progress-legend-container">
                <div className="progress-title">
                    <span>{loadMessages(locale).TITLE}</span>
                </div>
                <div className="progress-colors">
                    {Array.isArray(rangeColors) &&
                        rangeColors.map((range: RangeType, index: number) => {
                            const last: boolean =
                                index === rangeColors.length - 1 ? true : false;
                            return (
                                <div
                                    key={`${index}-${range.value}`}
                                    style={{ backgroundColor: range.color }}
                                    className={`${
                                        last ? "color-bar-last" : "color-bar"
                                    }`}
                                >
                                    <span>{range.value}</span>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ProgressLegend;
