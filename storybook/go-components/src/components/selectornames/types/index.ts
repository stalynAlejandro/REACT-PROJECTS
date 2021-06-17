export type SelectorComponentType = {
    items: Array<ItemType>;
    search: boolean;
    showActive?: boolean;
    locale: string;
    label?: string;
    size?: SizeType;
    css?: string;
    disabled?: boolean;
    onChangeItems: (items: ItemType) => void;
};

type SizeType = "xl" | "l" | "m" | "s";

export type ItemType = {
    id: number | string;
    description: string;
    selected: boolean;
};
