export type ProgressBarType = {
    value?:number;
    totalValue?:number;
    percentValue: number;
    height: number;
    color: "lightblue" | "blue" | "lightgreen";
    withLabel?: boolean;
    labelName?: string;
};
