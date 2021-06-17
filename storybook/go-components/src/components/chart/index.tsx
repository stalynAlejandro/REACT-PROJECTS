import React, { useState, useRef, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { chartConfig } from "./helpers/chart-config";
import { distinctZones } from "./helpers/distinct-zones";
import { renderDate } from "./render-helpers/render-date";
import { renderTime } from "./render-helpers/render-time";
import { getDateFormat } from "./helpers/chartaxis-dateformat";
import {
    chartPropsType,
    serieType,
    singleLegendInfo,
    zoneType,
} from "./types/types";
import { defaultChartColors } from "./constants/default-chart-colors";
import { chartDataTypes, chartTypes } from "./constants/chart-properties";

import "./styles/basic-chart.scss";
import { getFullNumber } from "./functions";

const Chart = ({
    chartType = chartTypes.LINE,
    config,
    data,
    dataType = chartDataTypes.LINEAR,
    distinctParamSerieName = "predicted",
    allowDate,
    allowTime,
    locale = "en-GB",
    colors = defaultChartColors,
    yAxisLabel,
    secondaryYAxisLabel,
    chartHeight,
    legendHeight,
    userPreferences = null,
}: chartPropsType) => {
    const [activeChartSerie, setActiveChartSerie] = useState<number>(-1);
    const [legend, setLegend] = useState<singleLegendInfo[]>([]);
    const [chartOptions, setChartOptions] = useState<any>(
        chartConfig(
            chartType,
            setActiveChartSerie,
            setLegend,
            data,
            dataType,
            allowDate,
            allowTime,
            locale,
            colors,
            yAxisLabel,
            secondaryYAxisLabel,
            chartHeight
        )
    );
    const chartElement: any = useRef(null);
    useEffect(() => {
        if (config) {
            setChartOptions({
                ...chartOptions,
                ...config,
            });
        }
    }, [config]);

    useEffect(() => {
        setChartOptions({
            ...chartOptions,
            yAxis: {
                ...chartOptions.yAxis,
                title: {
                    text: yAxisLabel,
                },
            },
        });
    }, [yAxisLabel]);

    useEffect(() => {
        if (data && distinctParamSerieName) {
            data.forEach((singleData: serieType, index: number) => {
                const zones = distinctZones(
                    singleData.data,
                    distinctParamSerieName,
                    singleData.type
                );
                if (data[index].type && data[index].type === "column") {
                    zones.forEach((value: zoneType, zoneIndex: number) => {
                        chartElement?.current?.chart?.series[index].points[
                            zoneIndex
                        ].update({
                            color: value.color,
                            dashStyle: value.dashStyle,
                        });
                    });
                } else {
                    chartElement?.current?.chart?.series[index].update({
                        zones,
                        zoneAxis: "x",
                    });
                }
            });
        }
    }, [distinctParamSerieName]);

    useEffect(() => {
        chartElement?.current?.chart?.update({
            xAxis: {
                type: dataType,
                labels: {
                    format: getDateFormat(locale, dataType),
                },
            },
        });
    }, [locale]);

    const renderDynamicLegend = () => {
        if (legend && Array.isArray(legend) && legend.length > 0) {
            return legend.map((singleLegendItem: singleLegendInfo) => {
                const elementInChart =
                    chartElement?.current?.chart?.series[singleLegendItem.id];

                return (
                    <div
                        key={singleLegendItem.id}
                        className={`basic-chart__legend-single-item ${
                            singleLegendItem.visible ? "active" : "unnactive"
                        }`}
                        onClick={() => {
                            if (chartElement?.current?.chart?.series) {
                                elementInChart.setVisible(
                                    !elementInChart.visible
                                );

                                const updatedVisibility: singleLegendInfo[] = legend.map(
                                    (innerLegend: singleLegendInfo) => {
                                        if (
                                            innerLegend.id ===
                                            singleLegendItem.id
                                        ) {
                                            return {
                                                ...innerLegend,
                                                visible: !innerLegend.visible,
                                            };
                                        }

                                        return innerLegend;
                                    }
                                );

                                setLegend(updatedVisibility);
                            }
                        }}
                    >
                        <div
                            className="basic-chart__legend-symbol"
                            style={{
                                backgroundColor: singleLegendItem.color,
                            }}
                        ></div>
                        <div className="basic-chart__legend-name">
                            {singleLegendItem.name}
                        </div>
                        :{" "}
                        <div className="basic-chart__legend-value">
                            {activeChartSerie >= 0 && elementInChart.visible
                                ? `${getFullNumber(
                                      singleLegendItem.yData[activeChartSerie],
                                      locale,
                                      userPreferences?.thousand,
                                      userPreferences?.decimal
                                  )} ${
                                      singleLegendItem?.units
                                          ? singleLegendItem.units
                                          : ""
                                  }`
                                : "--"}
                        </div>
                    </div>
                );
            });
        }

        return null;
    };

    const conditionalTimeRenderer = () => {
        if (allowDate) {
            return renderDate(
                legend,
                activeChartSerie,
                locale,
                userPreferences
            );
        } else if (allowTime) {
            return renderTime(
                legend,
                activeChartSerie,
                locale,
                userPreferences
            );
        }

        return null;
    };

    return (
        <div className="basic-chart__main-container">
            <HighchartsReact
                ref={chartElement}
                highcharts={Highcharts}
                constructorType="chart"
                options={chartOptions}
            />
            {(allowDate || allowTime) && (
                <div className="basic-chart__x-axis-current">
                    {conditionalTimeRenderer()}
                </div>
            )}
            <div
                className="basic-chart__legend-container"
                style={{ height: legendHeight }}
            >
                {renderDynamicLegend()}
            </div>
        </div>
    );
};

export default Chart;
