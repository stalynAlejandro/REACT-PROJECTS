import React from "react";
import { HoveredTextType } from "./types";
import "./styles/hoveredtext.scss";

const HoveredText = ({ text }: HoveredTextType) => {
    return (
        <div className="selector-tooltip">
            <div className="selector-tooltip-arrow" />
            {text}
        </div>
    );
};

export default HoveredText;
