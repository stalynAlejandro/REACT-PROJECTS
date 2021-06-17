import React from "react";
import { BadgePropsType } from "./types";

import "./styles/badge.scss";

const Badge = ({
    icon,
    size = "m",
    color = "blue",
    number,
    css,
}: BadgePropsType) => {
    return (
        <div
            className={`go-badge go-badge__${color}
            ${size} ${css ? css : ""}`}
        >
            <span>
                {icon ? icon : null}
                {number}
            </span>
        </div>
    );
};

export default Badge;
