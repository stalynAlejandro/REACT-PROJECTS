export type HeaderType = {
    expanded: boolean;
    title?: string;
    icons: Array<IconType>;
    logo?: React.ReactNode | null;
    PopoverAvatar?: React.ReactNode | null;
    LinearIcon?: React.ReactNode | null;
    Breadcumb?: React.ReactNode | null;
    onChangeExpanded: (expanded: boolean) => void;
};

export type IconType = {
    visible: boolean;
    Component: React.ReactNode | null;
};
