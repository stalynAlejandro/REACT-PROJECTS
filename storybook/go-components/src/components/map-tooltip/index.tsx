import React from "react";
import DefaultTooltip from "./default-tooltip";
import MonitoringTooltip from "./monitoring-tooltip";
import DetailViewTooltip from "./detailview-tooltip";
import FixedTooltip from "./fixed-tooltip";
import { TOOLTIP_TYPE } from "./constants";
import { MapTooltipType } from "./types";

const MapTooltip = ({
    locale = "en-GB",
    type = "default",
    name = "",
    percentage = "",
    isPerformance = true,
    total = "",
    posX,
    posY,
    detailViewData = null,
    show = false,
    fixed = false,
}: MapTooltipType) => {
    return (
        <React.Fragment>
            {type === TOOLTIP_TYPE.DEFAULT && (
                <DefaultTooltip
                    locale={locale}
                    show={show}
                    name={name}
                    posX={posX}
                    posY={posY}
                    percentage={percentage}
                    isPerformance={isPerformance}
                />
            )}
            {type === TOOLTIP_TYPE.MONITORING && !fixed && (
                <MonitoringTooltip
                    locale={locale}
                    show={show}
                    posX={posX}
                    posY={posY}
                    percentage={percentage}
                    total={total}
                />
            )}
            {type === TOOLTIP_TYPE.MONITORING && fixed && (
                <FixedTooltip
                    locale={locale}
                    data={detailViewData}
                    posX={posX}
                    posY={posY}
                    show={show}
                />
            )}
            {type === TOOLTIP_TYPE.DETAILVIEW && (
                <DetailViewTooltip
                    locale={locale}
                    data={detailViewData}
                    posX={posX}
                    posY={posY}
                    show={show}
                />
            )}
        </React.Fragment>
    );
};

export default MapTooltip;
