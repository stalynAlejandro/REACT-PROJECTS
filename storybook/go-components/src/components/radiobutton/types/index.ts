export type RadioButtonType = {
    item: any;
    checked: boolean | undefined;
    title?: string;
    showTitle: boolean;
    size: SizeType;
    disabled?: boolean;
    css?: string;
    onChange: (item: any) => void;
};

type SizeType = "l" | "m" | "s";
