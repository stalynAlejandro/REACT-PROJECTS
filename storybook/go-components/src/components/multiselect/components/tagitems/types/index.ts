export type TagItemsType = {
    locale?: string;
    size: SizeTypes;
    enabled: boolean;
    disabled: boolean;
    clear: boolean;
    all: boolean;
    error?: boolean;
    items: Array<ItemType>;
    onCleared: () => void;
    onAll: () => void;
    onRemove: (item: ItemType) => void;
    onUpdateEnabled: (e: React.MouseEvent) => void;
    alternative?: boolean;
};

export type ItemType = {
    id: number | string;
    description: string;
    selected: boolean;
};

type SizeTypes = "l" | "m";
