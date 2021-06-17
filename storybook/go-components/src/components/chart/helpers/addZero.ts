/**
 * Add 0 to the left if its less than 10
 * @param value number - The number to evaluate
 * @returns number - string
 */
export const addZero = (value: number): string | number => {
    if (value < 10) {
        return `0${value}`;
    }

    return value;
};
