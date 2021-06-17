export type CheckBoxType = {
    item: ItemType;
    onChangeItem: (item: ItemType) => void;
};

type ItemType = {
    id: number;
    description: string;
    selected: boolean;
};
