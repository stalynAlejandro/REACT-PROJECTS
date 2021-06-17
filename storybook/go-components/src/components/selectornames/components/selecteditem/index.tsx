import React from "react";
import ArrowUpIcon from "../../icons/arrowup-icon";
import ArrowDownIcon from "../../icons/arrowdown-icon";
import { SelectedItemType } from "./types";
import "./styles/selecteditem.scss";

const SelectedItem = ({
    enabled,
    active,
    item,
    onUpdateEnabled,
}: SelectedItemType) => {
    return (
        <div
            className={`select-items ${active ? "active" : ""}`}
            onClick={onUpdateEnabled}
        >
            <div className="select-noitems select-no-select">
                {item?.description}
            </div>
            <div className="select-icon-content select-no-select">
                <div className="select-icon select-no-select">
                    {enabled ? (
                        <ArrowUpIcon onUpdate={onUpdateEnabled} />
                    ) : (
                        <ArrowDownIcon onUpdate={onUpdateEnabled} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedItem;
