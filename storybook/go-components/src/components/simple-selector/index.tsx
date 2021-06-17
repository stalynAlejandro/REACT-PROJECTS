import React from "react";
import { SimpleSelectorType, SelectorItemType } from "./types";
import "./styles/simpleselector.scss";

const SimpleSelector = ({
    firstItem,
    secondItem,
    selectedItemId = firstItem.id,
    onSelectedItem,
    size = "m",
}: SimpleSelectorType) => {
    const onClicked = (item: SelectorItemType) => {
        selectedItemId = item.id;
        onSelectedItem(item);
    };

    return (
        <div className={`simple-selector ${size} simple-selector-no-select`}>
            <div
                className={`simple-selector-item ${size} ${
                    selectedItemId === firstItem.id ? "--selected" : ""
                }`}
                onClick={() => {
                    onClicked(firstItem);
                }}
            >
                <span>{firstItem.title}</span>
            </div>
            <div
                className={`simple-selector-item ${size} ${
                    selectedItemId === secondItem.id ? "--selected" : ""
                }`}
                onClick={() => {
                    onClicked(secondItem);
                }}
            >
                <span>{secondItem.title}</span>
            </div>
        </div>
    );
};

export default SimpleSelector;
