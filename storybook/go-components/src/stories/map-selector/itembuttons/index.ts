type SelectorButtonType = {
    id: number;
    title: string;
    active: boolean;
    performance: boolean;
};

export const itemButtons: Array<SelectorButtonType> = [
    {
        id: 0,
        title: "Option A",
        active: true,
        performance: true,
    },
    {
        id: 1,
        title: "Option B",
        active: false,
        performance: false,
    },
];
