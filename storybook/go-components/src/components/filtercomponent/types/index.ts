export type FilterComponentType = {
    firstSelected: boolean;
    firstCategory: CategoryType;
    secondCategory: CategoryType;
    disabled?: boolean;
    onChangeCategory: (category: CategoryType) => void;
    size?: "l" |"m" | "s";
    alternative?: boolean;
};

export type CategoryType = {
    id: number | string;
    title: string;
};
