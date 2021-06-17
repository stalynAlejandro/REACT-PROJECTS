export type ButtonType = {
    textButton: string;
    color?: "blue" | "gray" | "transparent" | "transparent-outlined";
    onClickedButton: () => void;
    css: string;
    disabled: boolean;
    iconButton?: React.ReactNode;
    size?: "l" | "m" | "s";
    ctaButton?: boolean;
};
