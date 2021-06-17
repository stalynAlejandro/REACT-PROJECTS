import React, { useState } from "react";
import { MapSelectorType, SelectorButtonType } from "./types";
import "./styles/mapselector.scss";

const MapSelector = ({
    itemBtns,
    disabled = false,
    onClikedItem,
}: MapSelectorType) => {
    const [buttons, setButtons] = useState<Array<SelectorButtonType>>(itemBtns);

    const onClickButton = (id: number) => {
        const newButtons: Array<SelectorButtonType> = itemBtns.map(
            (b: SelectorButtonType) =>
                b.id === id
                    ? Object.assign({}, b, { active: true })
                    : Object.assign({}, b, { active: false })
        );
        newButtons.sort((a, b) => a.id - b.id);
        setButtons(newButtons);
        onClikedItem(newButtons, id);
    };

    return (
        <div className="mapselector mapselector-no-select">
            <div
                className={
                    "c-btn-group c-btn-group--outline c-btn-group--dark-solid c-btn-group--lg"
                }
            >
                {Array.isArray(buttons) &&
                    buttons.map(
                        (dataItem: SelectorButtonType, index: number) => (
                            <button
                                key={index}
                                type="button"
                                className={`${
                                    dataItem.active ? "is-active" : "is-inactive"
                                }`}
                                disabled={disabled}
                                onClick={() => onClickButton(dataItem.id)}
                            >
                                {dataItem.title}
                            </button>
                        )
                    )}
            </div>
        </div>
    );
};

export default MapSelector;
