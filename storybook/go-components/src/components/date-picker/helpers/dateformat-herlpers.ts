export const getDateFormatWithLocale = (locale: string) => {
    const date: Date = new Date();
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    const dateStr: string = new Intl.DateTimeFormat(locale).format(date);
    const character = getCharacterNotNumeric(dateStr);
    const updatedFormat = replaceCharacterNotNumeric(dateStr, character);
    const splitedFormat: string[] = updatedFormat.split(character);
    const dayPosition: number = findValueInPosition(day, splitedFormat);
    const monthPosition: number = findValueInPosition(month, splitedFormat);
    const yearPosition: number = findValueInPosition(year, splitedFormat);
    const dateFormat = dateConstructor(
        dayPosition,
        monthPosition,
        yearPosition,
        character
    );
    return dateFormat;
};

const replaceCharacterNotNumeric = (dateScheme: string, character: string) => {
    return dateScheme.replace(/\D/g, character);
};

const getCharacterNotNumeric = (dateScheme: string) => {
    const RegEx = /[^0-9]/;
    const values: RegExpMatchArray | null = dateScheme.match(RegEx);
    if (values === null) return "/";
    const character = values[0];
    return character;
};

const findValueInPosition = (dayValue: number, items: string[]) => {
    let position = 0;
    items.forEach((item: string, index: number) => {
        const value = parseInt(item);
        if (value === dayValue) {
            position = index;
        }
    });
    return position;
};

const dateConstructor = (
    dayPosition: number,
    monthPosition: number,
    yearPosition: number,
    character: string
) => {
    if (dayPosition < monthPosition && monthPosition < yearPosition) {
        return `DD${character}MM${character}YYYY`;
    } else if (monthPosition < dayPosition && dayPosition < yearPosition) {
        return `MM${character}DD${character}YYYY`;
    } else {
        if (dayPosition < monthPosition) {
            return `YYYY${character}DD${character}MM`;
        } else {
            return `YYYY${character}MM${character}DD`;
        }
    }
};
