import React from "react";
import { HoveredTextType } from "./types";
import "./styles/hoveredtext.scss";

const HoveredText = ({ text }: HoveredTextType) => {
    return (
        <div className="multiselector-tooltip">
            <div className="multiselector-tooltip-arrow" />
            {text}
        </div>
    );
};

export default HoveredText;
