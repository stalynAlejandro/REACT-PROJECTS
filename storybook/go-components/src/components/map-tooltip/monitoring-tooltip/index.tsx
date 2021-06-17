import React from "react";
import { DefaultTooltipType } from "./types";
import { loadMessages } from "./languages";
import "./styles/monitoring.scss";

const MonitoringTooltip = ({
    locale = "en-GB",
    percentage = "15",
    total = "30",
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
                    <span className="info-row__percentage">{`${
                        loadMessages(locale).PERCENTAGE
                    } ${percentage}`}</span>
                </div>
                <div className="info-row">
                    <span className="info-row__total">{`${total} ${
                        loadMessages(locale).TOTAL
                    }`}</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MonitoringTooltip;
