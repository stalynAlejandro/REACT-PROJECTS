export type KpiIndicatorPropsType = {
    icon?: any;
    value?: number | string;
    label?: string;
    size?: "xl" | "l" | "m" | "s";
    type?: "primary" | "default";
    display?: "row" | "column" | "row-reverse";
    weight?: "bold" | "normal";
    iconColor?: string;
    groupPosition?: "icon-row" | "icon-column" | "group-column";
};
