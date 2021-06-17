import { DataType } from "../../../types";

export type GeneralPageType = {
    locale: string;
    languageItems: DataType[];
    dateItems: DataType[];
    hourItems: DataType[];
    dayItems: DataType[];
    thousandItems: DataType[];
    decimalItems: DataType[];
    onChangeLanguage: (language: any) => void;
    onChangeDate: (date: any) => void;
    onChangeHour: (hour: any) => void;
    onChangeDay: (day: any) => void;
    onChangeThousand: (thousand: any) => void;
    onChangeDecimal: (decimal: any) => void;
};
