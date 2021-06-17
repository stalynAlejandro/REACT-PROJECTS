import React from "react";
import { BottomDropdownType } from "./types";
import { loadMessages } from "./languages";
import "./styles/bottomdropdown.scss";

const BottomDropdown = ({
    locale = "en-GB",
    onSelectAll,
    onClear,
}: BottomDropdownType) => {
    return (
        <div className="bottom-drop-down">
            <div className="multiselect-separator-line"></div>
            <div className="multiselect-bottom-buttons">
                <div
                    className="multiselect-select-all multiselect-no-select"
                    onClick={onSelectAll}
                >
                    {loadMessages(locale)?.SELECT_ALL}
                </div>
                <div
                    className="multiselect-clear multiselect-no-select"
                    onClick={onClear}
                >
                    {loadMessages(locale)?.CLEAR}
                </div>
            </div>
        </div>
    );
};

export default BottomDropdown;
