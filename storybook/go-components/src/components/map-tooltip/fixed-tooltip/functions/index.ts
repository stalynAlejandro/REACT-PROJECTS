export const getColor = (property: any) => {
    return property?.color ? property?.color : property;
};

export const getValue = (property: any) => {
    return property?.value ? property?.value : property;
};
