import { DataType } from "./../../../types/index";

export type UnitsPageType = {
    locale: string;
    unitItems: DataType[];
    flowItems: DataType[];
    volumeItems: DataType[];
    pressureItems: DataType[];
    lengthItems: DataType[];
    onChangeUnitSystem: (unit: any) => void;
    onChangeFlow: (flow: any) => void;
    onChangeVolume: (volume: any) => void;
    onChangePressure: (pressure: any) => void;
    onChangeLength: (lenght: any) => void;
};
