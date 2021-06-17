export type SelectedItemType = {
    locale?: string;
    enabled: boolean;
    item: ItemType;
    onUpdateEnabled: () => void;
};

export type ItemType = {
    id: number;
    description: string;
    selected: boolean;
};
