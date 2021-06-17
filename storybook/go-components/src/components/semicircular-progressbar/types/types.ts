export type circularProgressbarPropsType = {
    value: string;
    percentValue: number;
};

export type circleDrawPropsType = {
    radius: string;
    coords: string;
    dataOffset: (percentValue: number) => string;
};
