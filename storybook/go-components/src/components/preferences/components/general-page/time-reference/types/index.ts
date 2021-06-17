import { DataType } from "../../../../types";

export type RegionPreferenceType = {
    locale: string;
    dateItems: DataType[];
    hourItems: DataType[];
    dayItems: DataType[];
    onChangeDate: (date: any) => void;
    onChangeHour: (hour: any) => void;
    onChangeDay: (day: any) => void;
};
