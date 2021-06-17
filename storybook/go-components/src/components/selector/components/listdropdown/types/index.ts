export type ListDropdownType = {
    items: Array<ItemType>;
    filterText: string;
    itemSelected: ItemType;
    onUpdate: (itemSelected: ItemType) => void;
};

export type ItemType = {
    id: number;
    description: string;
    selected: boolean;
};
