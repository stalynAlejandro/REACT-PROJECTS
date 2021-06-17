export type numericRangeInputPropsType = {
    label?: string;
    onChange: (values: number[]) => void;
    minValuePlaceholder?: string;
    maxValuePlaceholder?: string;
    size?: "l" | "m" | "s";
    disabled?: boolean;
    alternative?: boolean;
};
