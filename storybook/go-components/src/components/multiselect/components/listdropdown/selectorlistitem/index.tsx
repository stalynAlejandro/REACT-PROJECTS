import React, { useState, useEffect } from "react";
import HoveredText from "../../hoveredText";
import { SelectorListItemType } from "./types";
import "./styles/selectorlistitem.scss";

const SelectorListItem = ({ id, description }: SelectorListItemType) => {
    const [isTooltipActive, setIsTooltipActive] = useState(false);

    let event: HTMLElement | null = null;

    useEffect(() => {
        event = document.getElementById(`multiselect-item-title-${id}`);
    }, [event, isTooltipActive]);

    const showTooltip = () => {
        if (
            !isTooltipActive &&
            event &&
            event.scrollWidth > event.clientWidth
        ) {
            setIsTooltipActive(true);
        }
    };

    const hideTooltip = () => {
        setIsTooltipActive(false);
    };

    return (
        <>
            {isTooltipActive && <HoveredText text={description} />}
            <div
                className={"multiselect-item-title"}
                id={`multiselect-item-title-${id}`}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
            >
                {description}
            </div>
        </>
    );
};

export default SelectorListItem;
