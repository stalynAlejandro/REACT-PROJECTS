export type CheckBoxType = {
    item: ItemType;
    onChangeItem: (item: ItemType) => void;
};

export type ItemType = {
    id: string | number;
    description: string;
    selected: boolean;
};
