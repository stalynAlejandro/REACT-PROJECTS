import { DATE_TYPE } from "../components/DatePickerTabs/constants";
import { loadMessages } from "../languages";

export const CURRENT_YEAR = +new Date().getFullYear();
export const CURRENT_MONTH = +new Date().getMonth() + 1;

/**
 * Determines the number of days of the month
 * @param month number - Provided month
 * @param year number - Provided year
 * @returns number
 */
export const getMonthDays = (month = CURRENT_MONTH, year = CURRENT_YEAR) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = year % 4 === 0;

    return month === 2
        ? leapYear
            ? 29
            : 28
        : months30.includes(month)
        ? 30
        : 31;
};

/**
 * Determines if the day is the first day of the month and is only in the week
 * @param selectedCurrentDay Date - Provided day
 * @param locale string - Selected locale
 * @returns boolean
 */
export const checkIfDayIsFirstDayOfMonthAlone = (
    selectedCurrentDay: Date,
    locale: string
) => {
    return (
        selectedCurrentDay.getDate() === 1 &&
        selectedCurrentDay.getDay() === getCountryFirstDayOfMonthAlone(locale)
    );
};

/**
 * Determines if the day is the last day of the month and is only in the week
 * @param selectedCurrentDay Date - Provided day
 * @param locale string - Selected locale
 * @returns boolean
 */
export const checkIfDayIsLastDayOfMonthAlone = (
    selectedCurrentDay: Date,
    locale: string
) => {
    const currentMonth = selectedCurrentDay.getMonth() + 1;
    const currentYear = selectedCurrentDay.getFullYear();

    const monthDays = getMonthDays(currentMonth, currentYear);

    return (
        selectedCurrentDay.getDate() === monthDays &&
        selectedCurrentDay.getDay() === getCountryLastDayOfMonthAlone(locale)
    );
};

/**
 * Provide the name of the month depending on the language
 * @param locale string - Selected locale
 * @returns string
 */
export const monthNames = (locale: string) => [
    loadMessages(locale).JANUARY,
    loadMessages(locale).FEBRUARY,
    loadMessages(locale).MARCH,
    loadMessages(locale).APRIL,
    loadMessages(locale).MAY,
    loadMessages(locale).JUNE,
    loadMessages(locale).JULY,
    loadMessages(locale).AUGUST,
    loadMessages(locale).SEPTEMBER,
    loadMessages(locale).OCTOBER,
    loadMessages(locale).NOVEMBER,
    loadMessages(locale).DECEMBER,
];

/**
 * Determines if the number should have a leading zero
 * @param value number - Number of the day
 * @param length number - Length of the day
 * @returns string
 */
export const zeroPad = (value: number, length: number) => {
    return `${value}`.padStart(length, "0");
};

/**
 * Determines the number of blanks that must have the first week of the month
 * @param month number - Number of the month
 * @param year number - Number of the year
 * @param startWeekDay number - Number of start day of week
 * @returns number
 */
export const firstWeekdayOfMonth = (
    month = CURRENT_MONTH,
    year = CURRENT_YEAR,
    startWeekDay: number
) => {
    // En función del día que pongamos como primer día de la semana tendremos un
    // valor a añadir o no
    // Lunes: 0
    // Martes: 1...
    let firstWeekdayModifier = startWeekDay;

    if (startWeekDay === 6) {
        firstWeekdayModifier = 1;
    } else if (startWeekDay === 5) {
        firstWeekdayModifier = 2;
    } else if (startWeekDay === 4) {
        firstWeekdayModifier = 3;
    } else if (startWeekDay === 3) {
        firstWeekdayModifier = 4;
    } else if (startWeekDay === 2) {
        firstWeekdayModifier = 5;
    } else if (startWeekDay === 1) {
        firstWeekdayModifier = 6;
    }

    // Calculamos los espacios en blanco que habrá en el calendario
    let remainingSpaces =
        getRemainingSpacesOfMonth(month, year) + firstWeekdayModifier;

    // En el caso de que sean más de 7, para que no haya una línea entera sin
    // nada, restamos 7
    if (remainingSpaces > 7) {
        remainingSpaces = remainingSpaces - 7;
    }

    // Devolvemos la posición del día en la semana más el extra por día empezado
    return remainingSpaces;
};

/**
 * Get the remaining spaces of the fist week of month
 * @param month number - Current month
 * @param year number - Current year
 * @returns number
 */
export const getRemainingSpacesOfMonth = (month: number, year: number) => {
    const remainingSpacesOfMonth = +new Date(
        `${year}-${zeroPad(month, 2)}-01`
    ).getDay();

    if (remainingSpacesOfMonth === 0) {
        return 7;
    } else if (remainingSpacesOfMonth === 1) {
        return 1;
    } else if (remainingSpacesOfMonth === 2) {
        return 2;
    } else if (remainingSpacesOfMonth === 3) {
        return 3;
    } else if (remainingSpacesOfMonth === 4) {
        return 4;
    } else if (remainingSpacesOfMonth === 5) {
        return 5;
    } else {
        return 6;
    }
};

/**
 * Returns a date object with numerical parameters of day month and year
 * @param day number - Number of the day
 * @param month number - Number of the month
 * @param year number - Number of the year
 * @returns Date
 */
export const getSelectedDay = (day: number, month: number, year: number) => {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    const parsedDate = new Date(
        year,
        month - 1,
        day,
        currentHour,
        currentMinutes
    );

    return parsedDate;
};

/**
 * Returns the list of days of the month depending on the language
 * @param day number - Number of the day
 * @param locale string - Selected locale
 * @returns string[]
 */
export const weekDaySlicer = (day: number, locale: string) => {
    const weekDays = [
        loadMessages(locale).MONDAY,
        loadMessages(locale).TUESDAY,
        loadMessages(locale).WEDNESDAY,
        loadMessages(locale).THURSDAY,
        loadMessages(locale).FRIDAY,
        loadMessages(locale).SATURDAY,
        loadMessages(locale).SUNDAY,
    ];

    if (day === 0) {
        return weekDays;
    }

    return [...weekDays.slice(day, weekDays.length), ...weekDays.slice(0, day)];
};

/**
 * Returns the first day of the week depending on the language
 * @param locale string - Selected locale
 * @returns number
 */
export const getCountryStartDate = (locale: string) => {
    if (locale === "es-ES") {
        return 0;
    } else if (locale === "ca-ES") {
        return 0;
    } else if (locale === "en-US") {
        return 6;
    } else {
        return 0;
    }
};

/**
 * Provides the number of the last day of the month in case of staying only in
 * the week depending on the selected language
 * @param locale string - Selected locale
 * @returns number
 */
export const getCountryLastDayOfMonthAlone = (locale: string) => {
    if (locale === "es-ES") {
        return 1;
    } else if (locale === "ca-ES") {
        return 1;
    } else if (locale === "en-US") {
        return 0;
    } else {
        return 1;
    }
};

/**
 * Provides the number of the first day of the month in case of staying only in
 * the week depending on the selected language
 * @param locale string - Selected locale
 * @returns number
 */
export const getCountryFirstDayOfMonthAlone = (locale: string) => {
    if (locale === "es-ES") {
        return 0;
    } else if (locale === "ca-ES") {
        return 0;
    } else if (locale === "en-US") {
        return 6;
    } else {
        return 0;
    }
};

/**
 * Determines the start and weekend numbers for the classes "between"
 * @param locale string - Selected locale
 * @param dayType string - Type of day (start - end)
 * @returns number
 */
export const getCountrBetweenDayClass = (locale: string, dayType: string) => {
    if (locale === "es-ES") {
        return dayType === DATE_TYPE.START_DATE ? 1 : 0;
    } else if (locale === "ca-ES") {
        return dayType === DATE_TYPE.START_DATE ? 1 : 0;
    } else if (locale === "en-US") {
        return dayType === DATE_TYPE.START_DATE ? 0 : 6;
    } else {
        return dayType === DATE_TYPE.START_DATE ? 1 : 0;
    }
};

/**
 * Determines the start and weekend numbers for the classes "active"
 * @param locale string - Selected locale
 * @param dayType string - Type of day (start - end)
 * @returns number
 */
export const getCountrBetweenDayActiveClass = (
    locale: string,
    dayType: string
) => {
    if (locale === "es-ES") {
        return dayType === DATE_TYPE.START_DATE ? 0 : 1;
    } else if (locale === "ca-ES") {
        return dayType === DATE_TYPE.START_DATE ? 0 : 1;
    } else if (locale === "en-US") {
        return dayType === DATE_TYPE.START_DATE ? 6 : 0;
    } else {
        return dayType === DATE_TYPE.START_DATE ? 0 : 1;
    }
};

/**
 * Determine if the day is the end of the month
 * @param day Date - The day object Date
 * @returns boolean
 */
export const isMonthLastDay = (day: Date) => {
    return new Date(day.getTime() + 86400000).getDate() === 1;
};

/**
 * Determine if the day is the start of the month
 * @param day Date - The day object Date
 * @returns boolean
 */
export const isMonthFirstDay = (day: Date) => {
    return new Date(day.getTime()).getDate() === 1;
};

/**
 * Get a new object Date with hours to 0
 * @param date Date - The current date
 * @returns Date
 */
export const resetHoursDate = (date: Date): Date => {
    return new Date(new Date(date).setHours(0, 0, 0, 0));
};

/**
 * Get a new timestamp based on Date with hours to 0
 * @param date Date - The current date
 * @returns number
 */
export const resetHoursDateTimestamp = (date: Date): number | undefined => {
    return new Date(date).setHours(0, 0, 0, 0);
};

/**
 * Check if startDate and endDate are the same day
 * @param startDate Date - The startDate selected
 * @param endDate Date - The endDate selected
 * @returns boolean
 */
export const sameDayCheck = (startDate: Date, endDate: Date) => {
    return (
        startDate.getFullYear() === endDate.getFullYear() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getDate() === endDate.getDate()
    );
};

/**
 * Check if startDate and endDate are diferent day and endDate is not today
 * @param startDate Date - The startDate selected
 * @param endDate Date - The endDate selected
 * @returns boolean
 */
export const diferentDayCheckNotToday = (
    startDate: Date,
    endDate: Date
): boolean => {
    const today = new Date();
    const diferentDay: boolean =
        startDate.getFullYear() !== endDate.getFullYear() ||
        startDate.getMonth() !== endDate.getMonth() ||
        startDate.getDate() !== endDate.getDate();
    const notToday: boolean =
        endDate.getFullYear() !== today.getFullYear() ||
        endDate.getMonth() !== today.getMonth() ||
        endDate.getDate() !== today.getDate();
    return diferentDay && notToday;
};

/**
 * Returns a string date with time with space instead of T character
 * @param initDate Date - The START date to transform
 * @returns string
 */
export const formatInitDateWithHourTimestamp = (initDate: Date): Date => {
    return new Date(new Date(initDate).setHours(0, 0, 0, 0));
};

/**
 * Returns a string date with time with space instead of T character
 * @param endDate Date - The END date to transform
 * @returns string
 */
export const formatEndDateWithHourTimestamp = (endDate: Date): Date => {
    return new Date(new Date(endDate).setHours(23, 59, 59, 0));
};

/**
 * Returns date format in uppercase 
 * @param date Date - The date to apply the sheme
 * @param scheme string - The date format
 * @returns string
 */
export const formatDateWithScheme = (date: Date | null, scheme?: string) => {
    if (date === null) return "--/--/--";
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




