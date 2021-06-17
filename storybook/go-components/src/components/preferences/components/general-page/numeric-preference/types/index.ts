import { DataType } from "../../../../types";

export type RegionPreferenceType = {
    locale: string;
    thousandItems: DataType[];
    decimalItems: DataType[];
    onChangeThousand: (thousand: any) => void;
    onChangeDecimal: (decimal: any) => void;
};
