import { dateConfigurationType} from "../types/types";
import { addZero } from "../helpers/addZero";

export const formatNumber = (value: number, locale: string): string => {
    const currentLocale: string = locale === "es-ES" ? "de-DE" : locale;
    const formatedNumber: string = new Intl.NumberFormat(currentLocale).format(
        value
    );
    return formatedNumber;
};

export const getFullNumber = (
    value: number,
    locale: string,
    thousandSeparator?: string,
    decimalSeparator?: string,
): string => {
    if (thousandSeparator === undefined || decimalSeparator === undefined) return formatNumber(value,locale);
    const intValue: string = getNumberWithSeparation(value, thousandSeparator);
    const decimalValue: string = getDecimalWithSeparation(
        value,
        decimalSeparator
    );
    return `${intValue}${decimalValue}`;
};

export const getNumberWithSeparation = (value: number, separator: string) => {
    const isNegative = value < 0 ? true : false;
    let valueStr: string = getIntNumber(value);
    valueStr = isNegative ? valueStr.replace("-", "") : valueStr;
    const reversedStr: string = reverseString(valueStr);
    const separatedStr: RegExpMatchArray | null = reversedStr.match(/.{1,3}/g);
    const applySeparator: string | undefined = separatedStr?.join(separator);
    if (!applySeparator) return "";
    let finalStr = reverseString(applySeparator);
    finalStr = isNegative ? `-${finalStr}` : finalStr;
    return finalStr;
};

const getIntNumber = (value: number) => {
    const strNumber = `${Math.trunc(value)}`;
    return strNumber;
};

const reverseString = (str: string) => {
    return str.split("").reverse().join("");
};

const getDecimalWithSeparation = (value: number, separator: string) => {
    const decimals: number = getDecimals(value);
    if (decimals === 0) return "";
    const strDecimal = `${decimals}`;
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
    const parts = n
        .toLocaleString("en-US", { maximumSignificantDigits: 5 })
        .split(".");
    return parts.length > 1 ? Number("0." + parts[1]) : 0;
};

export const formatDateWithScheme = (date: Date, locale: string, dateFormatType: dateConfigurationType , scheme?: string) => {
    if (scheme === undefined) return (date.toLocaleDateString(locale, dateFormatType));
    const dateDay: number = date.getDate();
    const dateMonth: number = date.getMonth() + 1;
    const dateYear: number = date.getFullYear();

    const day: string = dateDay < 10 ? `0${dateDay}` : `${dateDay}`;
    const month: string = dateMonth < 10 ? `0${dateMonth}` : `${dateMonth}`;

    scheme = scheme?.replace("A", "Y");
    let schemeUppercase = scheme?.toUpperCase();
    let countYears: number | undefined = schemeUppercase?.match(
        new RegExp("Y", "g")
    )?.length;
    if (countYears === undefined) countYears = 4;

    const year: string =
        countYears === 4
            ? `${dateYear}`
            : date.getFullYear().toString().substr(-2);

    const yearTimes = "Y".repeat(countYears);
    schemeUppercase = schemeUppercase?.replace("DD", day);
    schemeUppercase = schemeUppercase?.replace("MM", month);
    schemeUppercase = schemeUppercase?.replace(yearTimes, year);
    return schemeUppercase;
};

export const getHour = (date: Date, format: string | undefined) => {
    if (format === undefined) return (addZero(date.getHours()) + ":" + addZero(date.getMinutes()));
    return format === "24" ? getHour24Format(date) : getHour12Format(date);

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
    const minutes: number = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours %= 12;
    hours = hours || 12;
    const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${strMinutes} ${ampm}`;
    return strTime;
}; 