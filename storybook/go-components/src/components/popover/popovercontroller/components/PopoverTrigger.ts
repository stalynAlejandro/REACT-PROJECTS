import React, { useRef, useEffect, useCallback } from "react";
import { PopoverTriggerProps } from "../types";

const PopoverTrigger = ({
    children,
    open,
    setPosition,
}: PopoverTriggerProps) => {
    const reference = useRef<HTMLElement>(null);

    const updatePosition = useCallback(() => {
        if (reference && reference?.current && setPosition) {
            setPosition(reference.current.getBoundingClientRect());
        }
    }, [setPosition]);

    useEffect(() => {
        updatePosition();
    }, [updatePosition, children]);

    useEffect(() => {
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, [updatePosition]);

    return React.cloneElement(children as React.ReactElement<any>, {
        onClick: open,
        ref: reference,
    });
};

PopoverTrigger.displayName = "Trigger";

export default PopoverTrigger;
