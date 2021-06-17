export type pointType = {
    x: number;
    y: number;
};

export type predictionType = {
    [key: string]: boolean | undefined;
};

export type dataType = pointType & predictionType;

export type serieType = {
    data: dataType[];
    name: string;
    type?: string;
};

export type singleLegendInfo = {
    id: number;
    name: string;
    color: string;
    visible: boolean;
    xData: number[];
    yData: number[];
    userOptions: {
        units: string;
    };
    units?: string;
};

export type dataTypeFormats = "linear" | "datetime";

export type chartTypeFormats = "line" | "column";

export type userPreferences = {
    thousand?: string | undefined;
    decimal?: string | undefined;
    dateFormat?: string | undefined;
    hourFormat?: string | undefined;
};

export type chartPropsType = {
    chartType?: chartTypeFormats;
    config?: any;
    data: serieType[];
    dataType?: dataTypeFormats;
    distinctParamSerieName?: string;
    allowDate?: boolean;
    allowTime?: boolean;
    locale?: string;
    colors?: string[];
    yAxisLabel?: string;
    secondaryYAxisLabel?: string;
    chartHeight: number;
    legendHeight: number;
    userPreferences?: userPreferences | null;
};

export type dateConfigurationType = {
    day?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit";
    year?: "numeric" | "2-digit";
};

export type zoneType = {
    value: number;
    dashStyle: string;
    color: string | null;
};
