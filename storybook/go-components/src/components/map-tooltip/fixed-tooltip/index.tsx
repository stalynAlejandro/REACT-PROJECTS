import React from "react";
import { DetailViewTooltipType } from "./types";
import { loadMessages } from "./languages";
import "./styles/fixed-tooltip.scss";

const FixedTooltip = ({
    locale = "en-GB",
    data,
    posX,
    posY,
    show = false,
}: DetailViewTooltipType) => {
    return (
        <React.Fragment>
            <div
                className={`fixed-tooltip ${show ? "visible" : "invisible"}`}
                style={{ top: posY + 20, left: posX - 50 }}
            >
                <div className="info-row">
                    <div className="container">
                        <span className="title">
                            {`${loadMessages(locale).SERIAL_NUMBER}:`}
                        </span>
                        <span className="value">{data?.serial_number}</span>
                    </div>
                    <div className="container">
                        <span className="title">
                            {`${loadMessages(locale).ADDRESS}:`}
                        </span>
                        <span className="value">{data?.address}</span>
                    </div>
                    <div className="container">
                        <span className="title">
                            {`${loadMessages(locale).STATUS}:`}
                        </span>
                        <span className="value">{data?.state}</span>
                    </div>
                    <div className="container">
                        <span className="title">
                            {`${loadMessages(locale).COMMUNICATED}:`}
                        </span>
                        <span className="value">{data?.communicated}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FixedTooltip;
