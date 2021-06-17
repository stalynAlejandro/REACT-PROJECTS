import {
    chartDataFormats,
    chartDataTypes,
} from "../constants/chart-properties";
import { dataTypeFormats } from "../types/types";

export const getDateFormat = (
    locale = "en-GB",
    dataType: dataTypeFormats = chartDataTypes.LINEAR
) => {
    if (dataType === chartDataTypes.DATETIME) {
        if (locale === "en-US") {
            return `{value:${chartDataFormats.B_D}}`;
        }

        return `{value:${chartDataFormats.D_B}}`;
    }

    return `{value:${chartDataFormats.DEFAULT}}`;
};
