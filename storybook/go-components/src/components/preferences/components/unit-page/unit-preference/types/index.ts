import { DataType } from "./../../../../types/index";

export type UnitPreferenceType = {
    locale: string;
    unitItems: DataType[];
    onChangeUnitSystem: (unit: any) => void;
};
