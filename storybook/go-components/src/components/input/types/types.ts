export type inputPropsType = {
    name?: string;
    type?: "text" | "number" | "password" | "color";
    value: string;
    onChangeInput: (text: string) => void;
    placeholder?: string;
    label?: string;
    size?: "l" | "m" | "s";
    disabled?: boolean;
    alternative?: boolean;
    autoComplete?: "on" | "off";
};
