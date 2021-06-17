import React, { useState, useEffect, useRef } from "react";

import { datePickerSimpleInputPropsType } from "../../types/types";
import DatePickerSimple from "./DatePickerSimple";
import Calendar from "../../icons/calendar";
import { resetHoursDate , formatDateWithScheme } from "../../helpers/calendar-helpers";

import "../../styles/date-simple-picker.scss";

const DatePickerSimpleInput = ({
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
    dateFormat,
}: datePickerSimpleInputPropsType) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const calendarInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputDate && inputDate instanceof Date) {
            setSelectedDate(resetHoursDate(inputDate));
        }
    }, [inputDate]);

    const onDateSelected = (date: Date) => {
        setSelectedDate(resetHoursDate(date));
        if (onSelectDate) {
            onSelectDate(resetHoursDate(date));
        }
    };

    return (
        <div className="calendar__global-container">
            <div className="datepicker-simple-input__main-container">
                {inputLabel && (
                    <label
                        className={`datepicker-simple-input__label ${inputSize}`}
                    >
                        {inputLabel}
                    </label>
                )}
                <div
                    className="datepicker-simple-input__group"
                    onClick={() => {
                        if (!disabled) {
                            setShowCalendar(true);
                        }
                    }}
                >
                    <input
                        type="text"
                        value={formatDateWithScheme(selectedDate, 
                            dateFormat
                        )}
                        className={`datepicker-simple-input__input ${inputSize} ${
                            disabled ? "disabled" : ""
                        }  ${alternative ? "alternative" : ""}`}
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
                        className={`datepicker-simple-input__icon ${inputSize} ${
                            disabled ? "disabled" : ""
                        }`}
                    >
                        {calendarInputIcon ? calendarInputIcon : <Calendar />}
                    </div>
                </div>
            </div>
            {showCalendar && (
                <DatePickerSimple
                    startWeekDay={startWeekDay}
                    locale={locale}
                    selectedDate={selectedDate}
                    setSelectedDate={onDateSelected}
                    setShowCalendar={setShowCalendar}
                    maxDate={maxDate}
                    minDate={minDate}
                />
            )}
        </div>
    );
};

export default DatePickerSimpleInput;
