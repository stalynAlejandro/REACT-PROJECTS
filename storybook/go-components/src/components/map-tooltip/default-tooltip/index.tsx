import React from "react";
import { DefaultTooltipType } from "./types";
import { loadMessages } from "./languages";
import "./styles/tooltip.scss";

const DefaultTooltip = ({
    locale = "en-GB",
    name,
    percentage,
    isPerformance,
    posX,
    posY,
    show = false,
}: DefaultTooltipType) => {
    return (
        <React.Fragment>
            <div
                className={`gis-tooltip ${show ? "visible" : "invisible"}`}
                style={{ top: posY + 20, left: posX - 50 }}
            >
                <div className="info-row">
                    <span className="info-row__key">
                        {`${loadMessages(locale).NAME}: `}
                    </span>
                    <span className="info-row__value">{name}</span>
                </div>
                <div className="info-row">
                    <span className="info-row__key">
                        {isPerformance
                            ? `${loadMessages(locale).PERFORMANCE}: `
                            : `${loadMessages(locale).DEPLOYMENT}: `}
                    </span>
                    <span className="info-row__value">{percentage}</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DefaultTooltip;
