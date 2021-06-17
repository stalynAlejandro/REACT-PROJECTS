import { DateType } from "../../../types";

export type ExamplePreferenceType = {
    exampleMessage: string;
    fullDateStr: DateType | null;
    dateStr: string;
    hourStr: string;
    numberStr: string;
};
