import {
    chartDataTypes,
    defaultFontSize,
    openSansFontFamily,
} from "../constants/chart-properties";
import {
    chartTypeFormats,
    dataTypeFormats,
    serieType,
    singleLegendInfo,
} from "../types/types";
import { getDateFormat } from "./chartaxis-dateformat";
import { debounce } from "./debounce";

export const chartConfig = (
    chartType: chartTypeFormats,
    setActiveChartSerie: (newActiveState: number) => void,
    setLegend: (legendList: singleLegendInfo[]) => void,
    data: serieType[],
    dataType: dataTypeFormats = chartDataTypes.LINEAR,
    allowDate?: boolean,
    allowTime?: boolean,
    locale = "en-GB",
    colors?: string[],
    yAxisLabel?: string,
    secondaryYAxisLabel?: string,
    chartHeight = 100
) => {
    return {
        chart: {
            type: chartType,
            style: {
                fontFamily: openSansFontFamily,
                fontSize: defaultFontSize,
            },
            height: chartHeight,
            backgroundColor: "transparent",
            events: {
                load(this: any) {
                    if (
                        this.series &&
                        Array.isArray(this.series) &&
                        this.series.length > 0
                    ) {
                        const legendItems = this.series.map(
                            (item: singleLegendInfo, index: number) => {
                                return {
                                    id: index,
                                    name: item.name,
                                    yData: item.yData,
                                    xData: item.xData,
                                    color: item.color,
                                    visible: item.visible,
                                    units: item.userOptions.units,
                                };
                            }
                        );

                        setLegend(legendItems);
                    }
                },
            },
            zoomType: "xy",
        },
        scrollbar: {
            enabled: true,
            barBorderRadius: 4,
            trackBorderRadius: 4,
            showFull: true,
            height: 8,
        },
        rangeSelector: {
            selected: 1,
        },
        colors,
        plotOptions: {
            series: {
                lineWidth: 2,
                turboThreshold: 0,
                marker: {
                    enabled: false,
                    lineWidth: 1,
                },
                dataGrouping: {
                    enabled: false,
                },
                point: {
                    events: {
                        mouseOver: debounce(function (this: any) {
                            if (this?.index != null) {
                                return setActiveChartSerie(this.index);
                            }
                        }, 50),
                    },
                },
                states: {
                    hover: {
                        lineWidth: 2,
                    },
                },
            },
        },
        tooltip: {
            shared: true,
            crosshairs: true,
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        xAxis: {
            type: dataType,
            labels: {
                format: getDateFormat(locale, dataType),
                style: {
                    fontSize: defaultFontSize,
                },
            },
        },
        yAxis: {
            labels: {
                style: {
                    fontSize: defaultFontSize,
                },
            },
            title: {
                text: yAxisLabel ?? "",
            },
        },
        series: data,
    };
};
