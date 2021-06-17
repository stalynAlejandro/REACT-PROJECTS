export type CheckboxProps = {
    checked?: boolean;
    label?: string;
    semiChecked?: boolean;
    size?: "small" | "normal" | "large";
    labelSize?: "small" | "normal" | "large";
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export enum CheckboxSize {
    SMALL = "small",
    NORMAL = "normal",
    LARGE = "large",
}
