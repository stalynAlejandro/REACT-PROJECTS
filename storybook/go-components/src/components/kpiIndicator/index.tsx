import React from "react";

import { KpiIndicatorPropsType } from "./types";

import "./styles/kpiIndicator.scss";

const KpiIndicator = ({
    icon,
    value,
    label,
    size = "m",
    type = "default",
    display = "row",
    weight = "normal",
    iconColor,
    groupPosition = "icon-column",
}: KpiIndicatorPropsType) => {
    const iconGroupColumn = groupPosition === "group-column";

    return (
        <div
            className={`kpi-indicator__main-container ${display} ${groupPosition} kpi-indicator-no-select`}
        >
            {icon && !iconGroupColumn && (
                <div
                    className={`kpi-indicator__icon ${display} ${size} ${groupPosition}`}
                    style={{
                        color: iconColor ? iconColor : "",
                    }}
                >
                    {icon}
                </div>
            )}
            <div
                className={`kpi-indicator__value-group ${display} ${
                    icon ? groupPosition : ""
                }`}
            >
                {icon && iconGroupColumn && (
                    <div className="kpi-indicator__icon-group-column">
                        <div
                            className={`kpi-indicator__icon ${display} ${size}`}
                        >
                            {icon}
                        </div>
                        <div
                            className={`kpi-indicator__value ${size} ${type} ${weight}`}
                        >
                            {value}
                        </div>
                    </div>
                )}
                {!iconGroupColumn && (
                    <div
                        className={`kpi-indicator__value ${size} ${type} ${weight}`}
                    >
                        {value}
                    </div>
                )}
                <div className={`kpi-indicator__label ${size}`}>{label}</div>
            </div>
        </div>
    );
};

export default KpiIndicator;
