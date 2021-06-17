export type SelectorType = {
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
