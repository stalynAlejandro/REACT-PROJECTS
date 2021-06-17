import { DataType } from "../../../../types";

export type RegionPreferenceType = {
    locale: string;
    languageItems: DataType[];
    onChangeLanguage: (language: any) => void;
};
