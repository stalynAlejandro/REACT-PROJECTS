import React from "react";
import { ExamplePreferenceType } from "./types";

const ExamplePreference = ({
    exampleMessage,
    fullDateStr,
    dateStr,
    hourStr,
    numberStr,
}: ExamplePreferenceType) => {
    return (
        <div className="example-preferences">
            <div className="example-title">{`${exampleMessage}:`}</div>
            <div className="example-message">
                <div className="example-date">
                    <div className="date">{fullDateStr?.date}</div>
                    <div className="hour">{fullDateStr?.hour}</div>
                </div>
                <div className="example-number">
                    <div className="format-date">{`${dateStr}, ${hourStr}`}</div>
                    <div className="format-number">{numberStr}</div>
                </div>
            </div>
        </div>
    );
};

export default ExamplePreference;
