import React from "react";
import { PopoverController, PopoverTrigger } from "./popovercontroller";
import { PopoverTypes } from "./types";

const Popover = ({
    iconComponent,
    children,
    place,
    offCenter = true,
    triggerClass,
    autoClose = false,
}: PopoverTypes) => {
    return (
        <PopoverController
            place={place}
            offCenter={offCenter}
            autoClose={autoClose}
        >
            <PopoverTrigger>
                <span className={triggerClass}>{iconComponent}</span>
            </PopoverTrigger>
            {children}
        </PopoverController>
    );
};

export default Popover;
