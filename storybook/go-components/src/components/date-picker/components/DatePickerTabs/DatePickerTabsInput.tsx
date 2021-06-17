import React, { useState, useEffect, useRef } from "react";
import {
    datePickerTabsSelectedDatesType,
    datePickerTabsInputPropsType,
} from "../../types/types";
import { initialDatesValues } from "./constants";

import DatePickerTabs from "./DatePickerTabs";
import Calendar from "../../icons/calendar";
import { usePrevious } from "../../hooks/usePrevious";
import {
    diferentDayCheckNotToday,
    formatEndDateWithHourTimestamp,
    formatInitDateWithHourTimestamp,
    resetHoursDate,
    resetHoursDateTimestamp,
    sameDayCheck,
    formatDateWithScheme,
} from "../../helpers/calendar-helpers";

import "../../styles/date-tabs-picker.scss";

const DatePickerTabsInput = ({
    startWeekDay = 0,
    locale = "en-GB",
    onSelectDate,
    inputDate,
    maxDate,
    minDate,
    inputLabel,
    inputSize = "m",
    disabled,
    calendarInputIcon,
    alternative,
    dateFormat,
}: datePickerTabsInputPropsType) => {
    const [
        selectedDate,
        setSelectedDate,
    ] = useState<datePickerTabsSelectedDatesType>(initialDatesValues);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [applyDate, setApplyDate] = useState<boolean>(false);
    const calendarInput = useRef<HTMLInputElement | null>(null);

    const prevInputDate = usePrevious(inputDate);

    useEffect(() => {
        if (onSelectDate && selectedDate?.startDate && selectedDate?.endDate) {
            // If we select the same day, the hours will be from 00:00 to 23:59, if
            // we select different days, the hours will be those at the time of
            // selection
            if (
                sameDayCheck(selectedDate?.startDate, selectedDate?.endDate) ||
                diferentDayCheckNotToday(
                    selectedDate?.startDate,
                    selectedDate?.endDate
                )
            ) {
                return onSelectDate({
                    startDate: formatInitDateWithHourTimestamp(
                        selectedDate?.startDate
                    ),
                    endDate: formatEndDateWithHourTimestamp(
                        selectedDate?.endDate
                    ),
                });
            }

            return onSelectDate({
                startDate: selectedDate?.startDate,
                endDate: selectedDate?.endDate,
            });
        }
    }, [applyDate]);

    useEffect(() => {
        const parsedInputDate = inputDate as datePickerTabsSelectedDatesType;

        if (
            parsedInputDate?.startDate &&
            parsedInputDate?.endDate &&
            (resetHoursDateTimestamp(parsedInputDate.startDate) !==
                resetHoursDateTimestamp(prevInputDate?.startDate) ||
                resetHoursDateTimestamp(parsedInputDate.endDate) !==
                    resetHoursDateTimestamp(prevInputDate?.endDate))
        ) {
            setSelectedDate({
                startDate: resetHoursDate(parsedInputDate?.startDate),
                endDate: resetHoursDate(parsedInputDate?.endDate),
            });
        }
    }, [inputDate]);

    return (
        <div className="calendar__global-container">
            <div className="datepicker-tabs-input__main-container">
                {inputLabel && (
                    <label
                        className={`datepicker-tabs-input__label ${inputSize}`}
                    >
                        {inputLabel}
                    </label>
                )}
                <div
                    className="datepicker-tabs-input__group"
                    onClick={() => setShowCalendar(true)}
                >
                    <input
                        type="text"
                        value={`${formatDateWithScheme(
                            selectedDate?.startDate,
                            dateFormat
                        )} - ${formatDateWithScheme(
                            selectedDate.endDate,
                            dateFormat
                        )}`}
                        className={`datepicker-tabs-input__input ${inputSize} ${
                            disabled ? "disabled" : ""
                        } ${alternative ? "alternative" : ""}`}
                        disabled={disabled}
                        readOnly
                        ref={calendarInput}
                    ></input>
                    <div
                        onClick={() => {
                            if (calendarInput?.current) {
                                calendarInput.current?.focus();
                            }
                        }}
                        className={`datepicker-tabs-input__icon ${inputSize} ${
                            disabled ? "disabled" : ""
                        }`}
                    >
                        {calendarInputIcon ? calendarInputIcon : <Calendar />}
                    </div>
                </div>
            </div>
            {showCalendar && !disabled && (
                <DatePickerTabs
                    locale={locale}
                    startWeekDay={startWeekDay}
                    selectedDate={selectedDate}
                    setShowCalendar={setShowCalendar}
                    setSelectedDate={setSelectedDate}
                    maxDate={maxDate}
                    minDate={minDate}
                    applyDate={applyDate}
                    setApplyDate={setApplyDate}
                />
            )}
        </div>
    );
};

export default DatePickerTabsInput;
