import React, { useRef, useState } from "react";
import { tooltipPropsType } from "./types/types";

import "./style/tooltip.scss";

const Tooltip = ({ content, children }: tooltipPropsType) => {
    const [styles, setStyles] = useState({
        top: -1200,
        left: 0,
        padding: "0px",
        opacity: 0,
    });

    const tooltipContentRef = useRef<HTMLElement>(null);
    const tooltipParentRef = useRef<HTMLElement>(null);

    const showToolTip = () => {
        if (tooltipContentRef?.current && tooltipParentRef?.current) {
            const contentCoords = tooltipContentRef.current.getBoundingClientRect();
            const parentCoords = tooltipParentRef.current.getBoundingClientRect();

            const tooltipTop = parentCoords.top - (parentCoords.height + 30);
            const tooltipLeft =
                parentCoords.left +
                parentCoords.width * 0.5 -
                contentCoords.width * 0.7;

            setStyles({
                top: tooltipTop,
                left: tooltipLeft,
                padding: "8px 20px",
                opacity: 1,
            });
        }
    };

    const hideToolTip = () => {
        setStyles({
            top: -1200,
            left: 0,
            padding: "0px",
            opacity: 0,
        });
    };

    return (
        <>
            <span
                ref={tooltipContentRef}
                className="tooltip__content-container"
                style={styles}
            >
                {content}
            </span>
            <span
                ref={tooltipParentRef}
                onMouseEnter={() => showToolTip()}
                onMouseLeave={() => hideToolTip()}
            >
                {children}
            </span>
        </>
    );
};

export default Tooltip;
