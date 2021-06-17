export type ListDropdownType = {
    items: Array<ItemType>;
    filterText: string;
    itemSelected: ItemType;
    enabled: boolean;
    onUpdate: (itemSelected: ItemType) => void;
};

export type ItemType = {
    id: number | string;
    description: string;
    selected: boolean;
};
