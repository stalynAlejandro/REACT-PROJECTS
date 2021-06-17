import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import "moment/locale/ca";
import "moment/locale/en-gb";
import {
    DateRangePicker,
    isInclusivelyAfterDay,
    SingleDatePicker,
} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { MultipleCalendarType } from "./types";
import {
    forceEndDate,
    forceStartDate,
    getLocaleDateFormat,
    defaultDateParser,
} from "./functions";
import { loadMessages } from "./languages";
import "./styles/datecalendar.scss";

/**
 * @deprecated since version 2.1.5
 */
const MultipleCalendar = ({
    locale = "en-GB",
    single = false,
    disabled,
    numberOfMonths = 2,
    addedDays = 15,
    initialStartDate,
    initialEndDate,
    onSelectedDates,
}: MultipleCalendarType) => {
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    const [focused, setFocused] = useState<boolean>(false);
    const [focusedInput, setFocusedInput] = useState<
        "startDate" | "endDate" | null
    >(null);

    const changedDate = (date: moment.Moment | null) => {
        const selectedDay: Date | undefined = date?.toDate();
        const momentDay = moment(selectedDay);
        setStartDate(momentDay);
        selectedDates(momentDay);
    };

    const selectedDates = (momentDay?: moment.Moment | null) => {
        let dateStart: string | undefined;
        let dateEndDate: string;
        if (single) {
            dateStart = momentDay?.format(defaultDateParser);
            if (dateStart) {
                onSelectedDates(dateStart, "");
            }
        } else {
            dateStart = moment(startDate).format(defaultDateParser);
            dateEndDate = moment(endDate).format(defaultDateParser);

            onSelectedDates(dateStart, dateEndDate);
        }
    };

    useEffect(() => {
        moment.locale(locale);
    }, [locale]);

    useEffect(() => {
        let momentStartDate: moment.Moment;
        let momentEndDate: moment.Moment;
        if (!single) {
            if (initialStartDate && initialEndDate) {
                momentStartDate = moment(initialStartDate);
                momentEndDate = moment(initialEndDate);
            } else {
                momentStartDate = moment();
                momentEndDate = moment().add(addedDays, "days");
            }
            setStartDate(momentStartDate);
            setEndDate(momentEndDate);
        } else {
            if (initialStartDate) {
                momentStartDate = moment(initialStartDate);
            } else {
                momentStartDate = moment();
            }
            setStartDate(momentStartDate);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="date-calendar">
            {!single && (
                <DateRangePicker
                    numberOfMonths={numberOfMonths}
                    showDefaultInputIcon
                    inputIconPosition={"after"}
                    startDate={startDate}
                    startDateId="startdate"
                    endDate={endDate}
                    endDateId="enddate"
                    displayFormat={() => getLocaleDateFormat(locale)}
                    disabled={disabled}
                    onDatesChange={({ startDate, endDate }) => {
                        //Force to be 0h on startDate, and 23:59:59 on endDate
                        if (startDate !== null) {
                            startDate = forceStartDate(startDate);
                        }
                        if (endDate !== null) {
                            endDate = forceEndDate(endDate);
                        }
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) =>
                        setFocusedInput(focusedInput)
                    }
                    keepOpenOnDateSelect
                    hideKeyboardShortcutsPanel
                    isOutsideRange={(day) =>
                        isInclusivelyAfterDay(day, moment().add(1, "days"))
                    }
                    renderCalendarInfo={() => (
                        <div className="react__dates-action-buttons">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setFocusedInput(null)}
                            >
                                {loadMessages(locale)?.Cancel}
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setFocusedInput(null);
                                    selectedDates();
                                }}
                            >
                                {loadMessages(locale)?.Accept}
                            </button>
                        </div>
                    )}
                    customArrowIcon={<div>&#x268A;</div>}
                />
            )}
            {single && (
                <SingleDatePicker
                    date={startDate}
                    disabled={disabled}
                    numberOfMonths={1}
                    showDefaultInputIcon
                    onDateChange={changedDate}
                    focused={focused}
                    isOutsideRange={() => false}
                    hideKeyboardShortcutsPanel
                    onFocusChange={({ focused }) => setFocused(focused)}
                    id="single-date-picker"
                />
            )}
        </div>
    );
};

export default MultipleCalendar;
