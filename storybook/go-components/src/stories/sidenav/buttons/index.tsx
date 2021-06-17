import React from "react";
import MarkerIcon from "../icons/markericon";
import ChartLineIcon from "../icons/chartlineicon";
import BellIconPlus from "../icons/bellico-plus";
import UsersIcon from "../icons/usersicon";

import { ICON_POSITION } from "../constants";

export type ButtonModelType = {
    id: number;
    name: string;
    position: string;
    Component: React.ReactNode | null;
};

export const getSmartmeteringButtons = () => {
    const smartMeteringButtons: Array<ButtonModelType> = [
        {
            id: 0,
            name: "Hierarchy",
            position: ICON_POSITION.TOP,
            Component: <MarkerIcon />,
        },
        {
            id: 1,
            name: "Dashboard",
            position: ICON_POSITION.MIDDLE,
            Component: <ChartLineIcon />,
        },
        {
            id: 2,
            name: "Alarms",
            position: ICON_POSITION.MIDDLE,
            Component: <BellIconPlus />,
        },
        {
            id: 3,
            name: "Notifications",
            position: ICON_POSITION.MIDDLE,
            Component: <UsersIcon />,
        },
    ];
    return smartMeteringButtons;
};
