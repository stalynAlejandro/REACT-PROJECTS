export type ListDropdownType = {
    search: boolean;
    items: Array<ItemType>;
    filterText: string;
    onUpdate: (itemSelected: ItemType) => void;
};

export type ItemType = {
    id: number | string;
    description: string;
    selected: boolean;
};
