import React from "react";
import ArrowUpIcon from "../../icons/arrowup-icon";
import ArrowDownIcon from "../../icons/arrowdown-icon";
import { SelectedItemType } from "./types";
import "./styles/selecteditem.scss";

const SelectedItem = ({ enabled, item, onUpdateEnabled }: SelectedItemType) => {
    return (
        <div className="select-items select-items-no-select" onClick={onUpdateEnabled}>
            <div className="select-noitems select-no-select">
                {item?.description}
            </div>
            <div className="select-icon-content select-no-select">
                <div className="select-icon select-no-select">
                    {enabled ? (
                        <div onClick={onUpdateEnabled}>
                            <ArrowUpIcon />
                        </div>
                    ) : (
                        <div onClick={onUpdateEnabled}>
                            <ArrowDownIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedItem;
