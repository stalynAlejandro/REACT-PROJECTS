import {
    getCountrBetweenDayClass,
    getCountrBetweenDayActiveClass,
    isMonthFirstDay,
    isMonthLastDay,
    checkIfDayIsLastDayOfMonthAlone,
    checkIfDayIsFirstDayOfMonthAlone,
    resetHoursDateTimestamp,
} from "../../helpers/calendar-helpers";
import { datePickerTabsSelectedDatesType } from "../../types/types";
import { DATE_TYPE, TABS } from "./constants";

/**
 * Determines if a day is between the established start and end days
 * @param selectedCurrentDay Date - current day object
 * @param selectedDate Object - object with active days
 * @returns boolean
 */
const dayIsBetweenStartAndEndDate = (
    selectedCurrentDay: Date,
    selectedDate: datePickerTabsSelectedDatesType
) => {
    return (
        selectedDate?.startDate &&
        selectedDate?.endDate &&
        selectedCurrentDay >= selectedDate.startDate &&
        selectedCurrentDay <= selectedDate.endDate
    );
};

/**
 * The name of the class to define the styles
 * @param selectedCurrentDay Date - current day object
 * @param localMinDate Date - minDate on local
 * @param selectedDate Object - object with active days
 * @param day number - current day
 * @param maxDate Date - min date that can select user
 * @param minDate Date - max date that can select user
 * @param locale string - selected locale
 * @returns string
 */
export const getDayClassName = (
    selectedCurrentDay: Date,
    localMinDate: Date | null,
    selectedDate: datePickerTabsSelectedDatesType,
    day: number,
    maxDate?: Date,
    minDate?: Date,
    locale = "en-GB"
) => {
    if (maxDate && selectedCurrentDay > maxDate) {
        return "disabled-day";
    }

    if (
        (minDate && selectedCurrentDay < minDate) ||
        (localMinDate && selectedCurrentDay < localMinDate)
    ) {
        return "disabled-day";
    }

    if (
        day &&
        selectedDate.startDate &&
        selectedDate.startDate &&
        resetHoursDateTimestamp(selectedCurrentDay) ===
            resetHoursDateTimestamp(selectedDate.startDate) &&
        selectedDate.startDate.getDay() ===
            getCountrBetweenDayActiveClass(locale, DATE_TYPE.START_DATE)
    ) {
        return "start-date-active end-week";
    }

    if (
        day &&
        selectedDate.startDate &&
        selectedDate.endDate &&
        resetHoursDateTimestamp(selectedCurrentDay) ===
            resetHoursDateTimestamp(selectedDate.endDate) &&
        selectedDate.endDate.getDay() ===
            getCountrBetweenDayActiveClass(locale, DATE_TYPE.END_DATE)
    ) {
        return "end-date-active start-week";
    }

    if (
        day &&
        !isMonthLastDay(selectedCurrentDay) &&
        selectedDate.startDate &&
        selectedDate.endDate &&
        resetHoursDateTimestamp(selectedDate.startDate) !==
            resetHoursDateTimestamp(selectedDate.endDate) &&
        resetHoursDateTimestamp(selectedCurrentDay) ===
            resetHoursDateTimestamp(selectedDate.startDate)
    ) {
        return "start-date-active";
    }

    if (
        day &&
        selectedDate.startDate &&
        selectedDate.endDate &&
        resetHoursDateTimestamp(selectedDate.startDate) !==
            resetHoursDateTimestamp(selectedDate.endDate) &&
        resetHoursDateTimestamp(selectedCurrentDay) ===
            resetHoursDateTimestamp(selectedDate.endDate)
    ) {
        return "end-date-active";
    }

    if (
        day &&
        selectedDate.startDate &&
        selectedDate.endDate &&
        dayIsBetweenStartAndEndDate(selectedCurrentDay, selectedDate) &&
        (checkIfDayIsLastDayOfMonthAlone(selectedCurrentDay, locale) ||
            checkIfDayIsFirstDayOfMonthAlone(selectedCurrentDay, locale))
    ) {
        return "between-dates-alone";
    }

    if (
        day &&
        selectedDate.startDate &&
        selectedDate.endDate &&
        dayIsBetweenStartAndEndDate(selectedCurrentDay, selectedDate) &&
        (isMonthFirstDay(selectedCurrentDay) ||
            selectedCurrentDay.getDay() ===
                getCountrBetweenDayClass(locale, DATE_TYPE.START_DATE))
    ) {
        return "between-dates-start";
    }

    if (
        day &&
        selectedDate.startDate &&
        selectedDate.endDate &&
        dayIsBetweenStartAndEndDate(selectedCurrentDay, selectedDate) &&
        ((isMonthLastDay(selectedCurrentDay) &&
            resetHoursDateTimestamp(selectedCurrentDay) !==
                resetHoursDateTimestamp(selectedDate.startDate)) ||
            selectedCurrentDay.getDay() ===
                getCountrBetweenDayClass(locale, DATE_TYPE.END_DATE))
    ) {
        return "between-dates-end";
    }

    if (
        day &&
        selectedDate?.startDate &&
        selectedDate?.endDate &&
        dayIsBetweenStartAndEndDate(selectedCurrentDay, selectedDate) &&
        resetHoursDateTimestamp(selectedDate.startDate) !==
            resetHoursDateTimestamp(selectedDate.endDate) &&
        !isMonthLastDay(selectedCurrentDay)
    ) {
        return "between-dates-day";
    }

    return "";
};

/**
 * Determines whether to display the active day style
 * @param selectedCurrentDay Date - current day object
 * @param selectedDate Object - object with active days
 * @returns boolean
 */
export const getDayActive = (
    selectedCurrentDay: Date,
    selectedDate: datePickerTabsSelectedDatesType
) => {
    if (
        selectedDate?.startDate &&
        resetHoursDateTimestamp(selectedCurrentDay) ===
            resetHoursDateTimestamp(selectedDate.startDate)
    ) {
        return true;
    }

    if (
        selectedDate?.endDate &&
        resetHoursDateTimestamp(selectedCurrentDay) ===
            resetHoursDateTimestamp(selectedDate.endDate)
    ) {
        return true;
    }

    return false;
};

/**
 * Determine the active class text in the tabs
 * @param selectedTab string - active selected tab
 * @param tabToCompare string - tab to compare
 * @returns string
 */
export const getActiveTabTextClasses = (
    selectedTab: string,
    tabToCompare: string
) => {
    if (selectedTab === tabToCompare) {
        return "calendar__tabs-text active-tab";
    }

    return "calendar__tabs-text";
};

/**
 * Determine the active class in the tabs
 * @param selectedTab string - active selected tab
 * @param tabToCompare string - tab to compare
 * @returns string
 */
export const getActiveTabClasses = (
    selectedTab: string,
    tabToCompare: string
) => {
    if (selectedTab === tabToCompare && tabToCompare === TABS.FROM) {
        return "calendar__single-tab active-right-tab";
    } else if (selectedTab === tabToCompare && tabToCompare === TABS.TO) {
        return "calendar__single-tab active-left-tab";
    }

    return "calendar__single-tab";
};

export const getCurrentActivePath = (
    selectedTab: string,
    currentDate: Date,
    selectedDate: datePickerTabsSelectedDatesType
) => {
    if (
        selectedDate?.startDate &&
        selectedTab === TABS.FROM &&
        selectedDate.startDate.toString() === currentDate.toString()
    ) {
        return "calendar__active-path-day current-path";
    }

    if (
        selectedDate?.endDate &&
        selectedTab === TABS.TO &&
        selectedDate.endDate.toString() === currentDate.toString()
    ) {
        return "calendar__active-path-day current-path";
    }

    return "calendar__active-path-day";
};
