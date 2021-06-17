export const getValueWithType = (
    value: string | number | undefined,
    locale: string
) => {
    if (value === undefined) return "";
    if (typeof value === "string") {
        return value;
    } else if (typeof value === "number") {
        return value?.toLocaleString(locale);
    } else {
        return "";
    }
};
