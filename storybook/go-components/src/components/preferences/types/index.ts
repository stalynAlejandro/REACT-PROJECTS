export type PreferencesType = {
    locale?: string;
    languageItems?: DataType[];
    unitItems?: DataType[];
    dateItems?: DataType[];
    hourItems?: DataType[];
    dayItems?: DataType[];
    thousandItems?: DataType[];
    decimalItems?: DataType[];
    flowItems?: DataType[];
    volumeItems?: DataType[];
    pressureItems?: DataType[];
    lengthItems?: DataType[];
    onCancel: () => void;
    onSave: (preferences: SavedPreferencesType[]) => void;
};

export type DataType = {
    id: number;
    description: string;
    selected: boolean;
    value: string;
};

export type SavedPreferencesType = {
    name: string;
    value: string | undefined;
};

export type TabType = {
    id: string;
    title: string;
};

export type DateType = {
    date: string;
    hour: string;
};
