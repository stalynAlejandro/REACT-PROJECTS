import moment from "moment";

export const forceStartDate = (date: moment.Moment) => {
    return date.set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    });
};

export const forceEndDate = (date: moment.Moment) => {
    return date.set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 0,
    });
};

export const getLocaleDateFormat = (locale: string) => {
    return moment.localeData(locale).longDateFormat("L");
};

export const defaultDateParser = "YYYY-MM-DD";
