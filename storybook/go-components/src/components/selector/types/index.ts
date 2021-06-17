export type SelectorType = {
    locale?: string;
    showSearch?: boolean;
    options: Array<OptionType>;
    label?: string;
    value: string;
    disabled?: boolean;
    onChange: (event: string) => void;
};

export type OptionType = {
    name: string;
    value: string;
};
