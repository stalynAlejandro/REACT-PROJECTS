export type MapTooltipType = {
    locale?: string;
    type: SelectedType;
    name?: string;
    percentage?: string;
    isPerformance?: boolean;
    total?: string;
    posX: number;
    posY: number;
    detailViewData?: any;
    show: boolean;
    fixed?: boolean;
};

export type SelectedType = "default" | "monitoring" | "detailview";

export type ModuleColorType = {
    value: string;
    color: string;
};
