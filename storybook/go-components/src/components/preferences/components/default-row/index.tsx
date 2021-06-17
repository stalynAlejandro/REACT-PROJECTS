import React from "react";
import { DefatultRowType } from "./types";

const DefaultRow = ({ icon, message, borderSize }: DefatultRowType) => {
    return (
        <div className="row-preference">
            <div className="icon">{icon}</div>
            <div className="title">{message}</div>
            <div className="border">
                <div className={`line line-${borderSize}`}></div>
            </div>
        </div>
    );
};

export default DefaultRow;
