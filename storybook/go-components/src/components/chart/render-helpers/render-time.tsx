import React from "react";
import { dateFormatType } from "../constants/date-formats";
import { loadMessages } from "../languages";
import { singleLegendInfo, userPreferences } from "../types/types";
import { formatDateWithScheme, getHour } from "../functions";

export const renderTime = (
    legend: singleLegendInfo[],
    activeChartSerie: number,
    locale = "en-GB",
    userPreferences: userPreferences | null
) => {
    if (
        legend &&
        Array.isArray(legend) &&
        legend.length > 0 &&
        legend[0].xData[activeChartSerie]
    ) {
        const parsedDate = new Date(
            legend[0].xData[activeChartSerie] +
                new Date(
                    legend[0].xData[activeChartSerie]
                ).getTimezoneOffset() *
                    60000
        );
        const parsedDateFormat = formatDateWithScheme(
            parsedDate,
            locale,
            dateFormatType,
            userPreferences?.dateFormat
        );
        return (
            <div className="basic-chart__x-axis-current-container">
                <div className="basic-chart__x-axis-current-label">
                    {loadMessages(locale).DATE_LABEL}:
                </div>
                <div>{parsedDateFormat}</div>
                <div className="basic-chart__x-axis-current-label-time">
                    {loadMessages(locale).TIME_LABEL}:
                </div>
                <div>{getHour(parsedDate, userPreferences?.hourFormat)}</div>
            </div>
        );
    }

    return "--";
};
