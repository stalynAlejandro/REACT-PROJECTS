export type SearchComponentType = {
    locale?: string;
    size?: "l" | "m" | "s";
    alternative?: boolean;
    defaultText?: string;
    onChangeText: (text: string) => void;
};
