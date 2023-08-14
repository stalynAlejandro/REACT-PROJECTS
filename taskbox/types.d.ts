export interface ITime {
    hours: number;
    minutes: number;
}

export interface IToday {
    date: Date | string;
    fields: { key: string; value: ITime | number }[];
    comment: string;
    image: string | null;
}
