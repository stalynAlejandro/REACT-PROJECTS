import React, { useState } from "react";
import { LegendPropsType, LegendItemType } from "./types";
import RightIcon from "./icons/right-icon";
import LeftIcon from "./icons/left-icon";
import "./styles/legend.scss";

const Legend = ({
    title = "Legend",
    items = [
        { text: "< 50%", color: "#E37272" },
        { text: "50% - 90%", color: "#E9C417" },
        { text: "> 90%", color: "#92C089" },
    ],
    header = true,
    ids = true,
}: LegendPropsType) => {
    const [visible, setVisible] = useState<boolean>(true);
    return (
        <div className={"legend__container" + (visible ? "" : " hidden")}>
            {header && (
                <div className="title">
                    <div className="text">{visible && title}</div>
                    <div className="icon" onClick={() => setVisible(!visible)}>
                        {visible ? <RightIcon /> : <LeftIcon />}
                    </div>
                </div>
            )}
            {visible &&
                items.map((item: LegendItemType, index: number) => (
                    <div className="item" key={`${item.text}-${index}`}>
                        {ids && (
                            <div className="index">{item?.id || index}</div>
                        )}
                        <div className="text">{item.text}</div>
                        <div
                            className="color"
                            style={{ background: item.color }}
                        ></div>
                    </div>
                ))}
        </div>
    );
};

export default Legend;
