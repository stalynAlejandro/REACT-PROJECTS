import { DataType } from "./../../../../types/index";

export type ScalePrefrenceType = {
    locale: string;
    flowItems: DataType[];
    volumeItems: DataType[];
    pressureItems: DataType[];
    lengthItems: DataType[];
    onChangeFlow: (flow: any) => void;
    onChangeVolume: (volume: any) => void;
    onChangePressure: (pressure: any) => void;
    onChangeLength: (length: any) => void;
};
