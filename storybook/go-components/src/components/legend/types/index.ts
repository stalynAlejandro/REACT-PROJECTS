export type LegendPropsType = {
    title?: string;
    items?: Array<LegendItemType>;
    header: boolean;
    ids?: boolean;
};

export type LegendItemType = {
    id?: number;
    text: string;
    color: string;
};
