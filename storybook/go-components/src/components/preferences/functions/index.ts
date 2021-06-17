import { DataType, DateType } from "../types";

export const getSelectedItem = (items: DataType[]) => {
    const selected: DataType | undefined = items.find(
        (i: DataType) => i.selected
    );
    return selected === undefined ? null : selected;
};

export const hasChanged = (
    itemA: DataType | null,
    itemB: DataType | null
): boolean => {
    const strItemA = JSON.stringify(itemA);
    const strItemB = JSON.stringify(itemB);
    return strItemA === strItemB ? false : true;
};

export const translateDateWitLocale = (locale: string | undefined) => {
    if (locale === undefined) return null;
    const date = new Date();
    const optionsDate: any = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const optionsHour: any = {
        hour: "numeric",
        minute: "numeric",
    };
    const localeDate = new Intl.DateTimeFormat(locale, optionsDate).format(
        date
    );
    const localeHour = new Intl.DateTimeFormat(locale, optionsHour).format(
        date
    );
    const dateStr: DateType = {
        date: `${capitalizeFirstLetter(localeDate)},`,
        hour: localeHour,
    };
    return dateStr;
};

export const formatDateWithScheme = (scheme: string) => {
    const date = new Date();
    const dateDay: number = date.getDate();
    const dateMonth: number = date.getMonth() + 1;
    const dateYear: number = date.getFullYear();

    const day: string = dateDay < 10 ? `0${dateDay}` : `${dateDay}`;
    const month: string = dateMonth < 10 ? `0${dateMonth}` : `${dateMonth}`;

    const schemeUppercase = scheme.toUpperCase();
    scheme = scheme.replace("A", "Y");
    let countYears: number | undefined = schemeUppercase.match(
        new RegExp("Y", "g")
    )?.length;
    if (countYears === undefined) countYears = 4;

    const year: string =
        countYears === 4
            ? `${dateYear}`
            : date.getFullYear().toString().substr(-2);

    const yearTimes = "Y".repeat(countYears);
    scheme = scheme.replace("DD", day);
    scheme = scheme.replace("MM", month);
    scheme = scheme.replace(yearTimes, year);
    return scheme;
};

const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getHour = (type: string) => {
    const date = new Date();
    date.setHours(17);
    date.setMinutes(59);
    return type === "24" ? getHour24Format(date) : getHour12Format(date);
};

const getHour24Format = (date: Date) => {
    const options: any = {
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
    };
    const hour = date.toLocaleTimeString([], options);
    return hour;
};

const getHour12Format = (date: Date) => {
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours %= 12;
    hours = hours || 12;
    const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${strMinutes} ${ampm}`;
    return strTime;
};

export const getNumberWithSeparation = (value: number, separator: string) => {
    const reversedStr: string = reverseString(getIntNumber(value));
    const separatedStr: RegExpMatchArray | null = reversedStr.match(/.{1,3}/g);
    const applySeparator: string | undefined = separatedStr?.join(separator);
    if (!applySeparator) return "";
    const finalStr = reverseString(applySeparator);
    return finalStr;
};

const getIntNumber = (value: number) => {
    const strNumber: string = `${Math.trunc(value)}`;
    return strNumber;
};

const reverseString = (str: string) => {
    return str.split("").reverse().join("");
};

export const getDecimalWithSeparation = (value: number, separator: string) => {
    const strDecimal: string = `${getDecimals(value)}`;
    const splitedDecimal: string[] = strDecimal.split(".");
    let finalStr = "";
    if (splitedDecimal.length === 2) {
        finalStr = separator + splitedDecimal[1];
    } else if (splitedDecimal.length === 1) {
        finalStr = separator + splitedDecimal[0];
    }
    return finalStr;
};

const getDecimals = (n: number) => {
    // Note that maximumSignificantDigits defaults to 3 so your decimals will be rounded if not changed.
    const parts = n
        .toLocaleString("en-US", { maximumSignificantDigits: 18 })
        .split(".");
    return parts.length > 1 ? Number("0." + parts[1]) : 0;
};
