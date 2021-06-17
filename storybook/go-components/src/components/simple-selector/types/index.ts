export type SimpleSelectorType = {
    firstItem: SelectorItemType;
    secondItem: SelectorItemType;
    selectedItemId?: number;
    onSelectedItem: (item: SelectorItemType) => void;
    size?: "l" | "m" | "s";
};

export type SelectorItemType = {
    id: number;
    title: string;
};
