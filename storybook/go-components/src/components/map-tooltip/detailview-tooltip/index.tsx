import React from "react";
import { DetailViewTooltipType } from "./types";
import { getColor, getValue } from "./functions";
import { loadMessages } from "./languages";
import "./styles/detailview-tooltip.scss";

const DetailViewTooltip = ({
    locale = "en-GB",
    data,
    posX,
    posY,
    show = false,
}: DetailViewTooltipType) => {
    return (
        <div
            className={`detailview-tooltip ${show ? "visible" : "invisible"}`}
            style={{ top: posY - 180, left: posX - 200 }}
        >
            <div className="info-row">
                <span className="id">{`${loadMessages(locale).ID} ${
                    data?.id
                }`}</span>
                <span className="address">{`${data?.address}`}</span>
                <div className="separator"></div>
                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).DOWNLOADED_READINGS}:`}
                    </span>
                    <span className="value">{data?.downloadReadings}</span>
                </div>

                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).CELL_ID}:`}
                    </span>
                    <span className="value">{data?.cellId}</span>
                </div>

                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).RSRP}:`}
                    </span>
                    <span
                        className="value"
                        style={{ color: getColor(data?.RSRP) }}
                    >
                        {getValue(data?.RSRP)}
                    </span>
                </div>

                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).RSRQ}:`}
                    </span>
                    <span
                        className="value"
                        style={{ color: getColor(data?.RSRQ) }}
                    >
                        {getValue(data?.RSRQ)}
                    </span>
                </div>

                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).RSSI}:`}
                    </span>
                    <span
                        className="value"
                        style={{ color: getColor(data?.RSSI) }}
                    >
                        {getValue(data?.RSSI)}
                    </span>
                </div>

                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).ECL}:`}
                    </span>
                    <span className="value">{data?.ECL}</span>
                </div>

                <div className="container">
                    <span className="title">
                        {`${loadMessages(locale).SINR}:`}
                    </span>
                    <span
                        className="value"
                        style={{ color: getColor(data?.SINR) }}
                    >
                        {getValue(data?.SINR)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DetailViewTooltip;
