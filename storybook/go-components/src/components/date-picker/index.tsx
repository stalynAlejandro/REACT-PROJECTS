import React from "react";
import DatePickerSimpleInput from "./components/DatePickerSimple/DatePickerSimpleInput";
import DatePickerTabsInput from "./components/DatePickerTabs/DatePickerTabsInput";
import { getDateFormatWithLocale } from "./helpers/dateformat-herlpers";
import { datePickerPropsType } from "./types/types";

const DatePicker = ({
    type = "simple",
    startWeekDay = 0,
    locale = "en-GB",
    inputLabel,
    inputSize = "m",
    onSelectDate,
    inputDate,
    maxDate,
    minDate,
    disabled,
    calendarInputIcon,
    alternative,
    dateFormat = getDateFormatWithLocale(locale),
}: datePickerPropsType) => {
    if (type === "simple") {
        return (
            <DatePickerSimpleInput
                startWeekDay={startWeekDay}
                locale={locale}
                inputLabel={inputLabel}
                inputSize={inputSize}
                onSelectDate={onSelectDate}
                inputDate={inputDate}
                maxDate={maxDate}
                minDate={minDate}
                disabled={disabled}
                calendarInputIcon={calendarInputIcon}
                alternative={alternative}
                dateFormat={dateFormat}
            />
        );
    }

    if (type === "tabs") {
        return (
            <DatePickerTabsInput
                startWeekDay={startWeekDay}
                locale={locale}
                inputLabel={inputLabel}
                inputSize={inputSize}
                onSelectDate={onSelectDate}
                inputDate={inputDate}
                maxDate={maxDate}
                minDate={minDate}
                disabled={disabled}
                calendarInputIcon={calendarInputIcon}
                alternative={alternative}
                dateFormat={dateFormat}
            />
        );
    }

    return null;
};

export default DatePicker;
