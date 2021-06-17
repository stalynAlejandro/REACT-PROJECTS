import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import Chart from "../../components/chart/index";

import {
    fakeSeries1,
    fakeSeries2,
    fakeSeries3,
    fakeSeries4,
    fakeSeries5,
    fakeSeries6,
} from "./temp/fakeData";
import { fakeDataPredicted1 } from "./temp/fakeDataPredicted";
import { fakeDataPredictedOneDay1 } from "./temp/FakeDataPredictedOneDay";

import { fakeDataHourly } from "./temp/fakeDataHourly";

import { Preferences } from "./temp/Preferences";

export default {
    title: "Chart",
    component: Chart,
    decorators: [withKnobs],
};

const defaultChartSeries: any = [
    fakeSeries1,
    fakeSeries2,
    fakeSeries3,
    fakeSeries4,
    fakeSeries5,
    fakeSeries6,
];

const userPreferences: any = [Preferences];

export const DefaultChart: React.VFC<{}> = () => {
    return (
        <Chart
            locale={select(
                "locale",
                ["es-ES", "ca-ES", "en-US", "en-GB"],
                "en-GB"
            )}
            data={defaultChartSeries}
            chartHeight={300}
            legendHeight={100}
            userPreferences={Preferences}
        />
    );
};

const customConfigChartSeries: any = [
    fakeSeries1,
    fakeSeries2,
    fakeSeries3,
    fakeSeries4,
    fakeSeries5,
    fakeSeries6,
];

export const DefaultChartWithCustomConfig: React.VFC<{}> = () => {
    return (
        <Chart
            locale={select(
                "locale",
                ["es-ES", "ca-ES", "en-US", "en-GB"],
                "en-GB"
            )}
            data={customConfigChartSeries}
            config={{
                chart: {
                    subtitle: {
                        text: "jajaja",
                        style: {
                            color: "black",
                        },
                    },
                    backgroundColor: "red",
                },
            }}
            chartHeight={300}
            legendHeight={100}
        />
    );
};

const predictionChartSeries: any = [fakeDataPredicted1];

export const DefaultChartDailyWithPrediction: React.VFC<{}> = () => {
    const showPreferences = boolean("With User preferences", true);
    return (
        <Chart
            locale={select(
                "locale",
                ["es-ES", "ca-ES", "en-US", "en-GB"],
                "en-GB"
            )}
            data={predictionChartSeries}
            allowDate
            dataType="datetime"
            colors={["#8ADFFA", "#397AC3"]}
            yAxisLabel={text("yAxisLabel", "Contadores")}
            secondaryYAxisLabel={text("yAxisLabel", "Alternative y axis")}
            chartHeight={300}
            legendHeight={100}
            userPreferences={showPreferences ? Preferences : undefined}
        />
    );
};

const predictionDefaultChartHourly: any = [fakeDataHourly];

export const DefaultChartHourlyWithPrediction: React.VFC<{}> = () => {
    const showPreferences = boolean("With User preferences", true);
    return (
        <Chart
            locale={select(
                "locale",
                ["es-ES", "ca-ES", "en-US", "en-GB"],
                "en-GB"
            )}
            data={predictionDefaultChartHourly}
            allowTime
            dataType="datetime"
            colors={["#8ADFFA", "#397AC3"]}
            yAxisLabel={text("yAxisLabel", "Contadores")}
            secondaryYAxisLabel={text("yAxisLabel", "Alternative y axis")}
            chartHeight={300}
            legendHeight={100}
            userPreferences={showPreferences ? Preferences : undefined}
        />
    );
};

const oneDayPredictedData: any = [fakeDataPredictedOneDay1];

export const oneDayPredicted: React.VFC<{}> = () => {
    const showPreferences = boolean("With User preferences", true);

    return (
        <Chart
            locale={select(
                "locale",
                ["es-ES", "ca-ES", "en-US", "en-GB"],
                "en-GB"
            )}
            data={oneDayPredictedData}
            allowDate
            dataType="datetime"
            yAxisLabel={text("yAxisLabel", "Contadores")}
            secondaryYAxisLabel={text("yAxisLabel", "Alternative y axis")}
            chartHeight={300}
            legendHeight={100}
            userPreferences={showPreferences ? Preferences : undefined}
        />
    );
};
