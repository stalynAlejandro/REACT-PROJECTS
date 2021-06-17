import { chartLineTypes, chartFillTypes } from "../constants/chart-properties";
import { dataType, zoneType } from "../types/types";

export const distinctZones = (
    seriesList: dataType[],
    distinctParamSerieName: string,
    chartType?: string
): zoneType[] => {
    const zones: zoneType[] = [];
    seriesList.forEach((item: dataType, index: number, array: any[]) => {
        if (seriesList.length - 1 !== index) {
            zones.push({
                value: item.x,
                dashStyle: item.predicted
                    ? chartLineTypes.DASH
                    : chartLineTypes.LINE,
                color:
                    item.predicted && chartType
                        ? chartFillTypes.PREDICTED
                        : null,
            });
        } else {
            zones.push({
                value: item.x,
                dashStyle: item.predicted
                    ? chartLineTypes.DASH
                    : chartLineTypes.LINE,
                color:
                    item.predicted && chartType
                        ? chartFillTypes.PREDICTED
                        : null,
            });
        }
    });
    return zones;
};
