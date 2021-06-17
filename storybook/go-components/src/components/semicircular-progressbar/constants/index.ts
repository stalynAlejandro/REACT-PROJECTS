export const smallCircleRadius = "45";
export const normalCircleRadius = "58";
export const smallCircleCoords = "translate(19px, 19px)";
export const normalCircleCoords = "translate(5px, 5px)";
export const screenBreakpoint = 1080;

export const normalCircleDrawProps = {
    radius: "58",
    coords: "translate(5px, 5px)",
    dataOffset(percentValue: number) {
        return (365 - (365 * percentValue) / 100).toString();
    },
};

export const smallCircleDrawProps = {
    radius: "45",
    coords: "translate(19px, 19px)",
    dataOffset(percentValue: number) {
        return (445 - (445 * percentValue) / 100).toString();
    },
};

export const getCircleDrawPropsHelper = (windowInnerWidth: number) => {
    if (windowInnerWidth >= screenBreakpoint) {
        return normalCircleDrawProps;
    }

    return smallCircleDrawProps;
};
