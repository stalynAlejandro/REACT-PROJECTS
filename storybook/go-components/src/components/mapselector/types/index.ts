export type MapSelectorType = {
    itemBtns: Array<SelectorButtonType>;
    disabled?: boolean;
    onClikedItem: (newButtons: Array<SelectorButtonType>, id: number) => void;
};

export type SelectorButtonType = {
    id: number;
    title: string;
    active: boolean;
    performance: boolean;
};
