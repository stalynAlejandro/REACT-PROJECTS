export type SelectedItemType = {
    locale?: string;
    enabled: boolean;
    active: boolean;
    item: ItemType;
    onUpdateEnabled: () => void;
};

export type ItemType = {
    id: number | string;
    description: string;
    selected: boolean;
};
