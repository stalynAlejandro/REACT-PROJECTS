export type circularProgressbarPropsType = {
    locale?: string;
    value?: number | string | undefined;
    percentValue: number;
};

export type circleDrawPropsType = {
    radius: string;
    coords: string;
    dataOffset: (percentValue: number) => string;
};
