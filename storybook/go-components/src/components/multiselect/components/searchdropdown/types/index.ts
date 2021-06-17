export type SearchDropDownType = {
    locale?: string;
    clearSerchText: boolean;
    size: SizeTypes;
    onCleared: () => void;
    onUpdateItems: (items: string) => void;
};

type SizeTypes = "l" | "m";
