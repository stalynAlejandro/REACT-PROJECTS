/* istanbul ignore file */
import { placesInterface } from "../types";
export const getPopoverPosition = (
    triggerPosition: ClientRect,
    popoverPlace: placesInterface,
    IsPopoverOffCenter = false
) => {
    const { top, left, height, width } = triggerPosition;
    if (!IsPopoverOffCenter) {
        switch (popoverPlace) {
            case "top":
            case "top-left":
            case "top-right":
                return {
                    left: left + width / 2,
                    top: top - height,
                };
            case "right":
                return {
                    left: left + width,
                    top,
                };

            case "right-top":
                return {
                    left: left + width,
                    top: top - height / 2,
                };

            case "right-bottom":
                return {
                    left: left + width,
                    top: top + height / 2,
                };

            case "left":
                return {
                    left,
                    top,
                };

            case "left-top":
                return {
                    left,
                    top: top - height / 2,
                };

            case "left-bottom":
                return {
                    left,
                    top: top + height / 2,
                };

            default:
                // cases: bottom, bottom-right, bottom-left
                return {
                    left: left + width / 2,
                    top: top + height,
                };
        }
    } else {
        switch (popoverPlace) {
            case "top":
            case "top-left":
            case "left-top":
                return {
                    left,
                    top: top - height,
                };

            case "right-top":
            case "top-right":
                return {
                    left: left + width,
                    top: top - height,
                };

            case "right":
                return {
                    left: left + width,
                    top,
                };

            case "left":
                return { left, top };

            case "right-bottom":
            case "bottom-right":
                return { left: left + width, top: top + height };

            default:
                // cases: bottom, bottom-left, left-bottom
                return { left, top: top + height };
        }
    }
};
