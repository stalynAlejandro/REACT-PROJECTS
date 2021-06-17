export type SearchDropDownType = {
    size: SizeType;
    locale?: string;
    clearSerchText: boolean;
    onCleared: () => void;
    onUpdateItems: (items: string) => void;
};

type SizeType = "xl" | "l" | "m" | "s";
