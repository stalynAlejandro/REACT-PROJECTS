import React from "react";
import { dateFormatType } from "../constants/date-formats";
import { loadMessages } from "../languages";
import { singleLegendInfo, userPreferences } from "../types/types";
import { formatDateWithScheme } from "../functions";

export const renderDate = (
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
        return (
            <div className="basic-chart__x-axis-current-container">
                <div className="basic-chart__x-axis-current-label">
                    {loadMessages(locale).DATE_LABEL}:
                </div>
                <div>
                    {formatDateWithScheme(
                        new Date(
                            legend[0].xData[activeChartSerie] +
                                new Date(
                                    legend[0].xData[activeChartSerie]
                                ).getTimezoneOffset() *
                                    60000
                        ),
                        locale,
                        dateFormatType,
                        userPreferences?.dateFormat
                    )}
                </div>
            </div>
        );
    }

    return "--";
};
