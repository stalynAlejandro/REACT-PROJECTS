export type SidenavType = {
    locale?: string;
    selectedDma?: string;
    expanded?: boolean;
    buttons?: Array<ButtonModelType>;
    defaultButton: ButtonModelType;
    onSelected: (button: ButtonModelType | null) => void;
};

export type ButtonModelType = {
    id: number;
    name: string;
    position: string;
    Component: React.ReactNode | null;
};

export type Position = "top" | "middle" | "bottom";
