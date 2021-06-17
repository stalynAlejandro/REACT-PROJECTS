import React, { useState, useEffect } from "react";
import OutsideClick from "../../helpers/outside-click";
import {
    CURRENT_MONTH,
    CURRENT_YEAR,
    getMonthDays,
    monthNames,
    firstWeekdayOfMonth,
    getSelectedDay,
    weekDaySlicer,
    getCountryStartDate,
    resetHoursDate,
} from "../../helpers/calendar-helpers";
import { datePickerSimplePropsType } from "../../types/types";

import "../../styles/date-simple-picker.scss";
import AngleUp from "../../../../assets/icons/angle-up-light";

const DatePickerSimple = ({
    startWeekDay,
    locale = "en-GB",
    selectedDate,
    setSelectedDate,
    setShowCalendar,
    maxDate,
    minDate,
}: datePickerSimplePropsType) => {
    const [currentMonth, setCurrentMonth] = useState(
        selectedDate ? new Date(selectedDate).getMonth() + 1 : CURRENT_MONTH
    );
    const [currentYear, setCurrentYear] = useState(
        selectedDate ? new Date(selectedDate).getFullYear() : CURRENT_YEAR
    );

    useEffect(() => {
        if (currentMonth < 1) {
            setCurrentMonth(12);
            setCurrentYear(currentYear - 1);
        }

        if (currentMonth > 12) {
            setCurrentMonth(1);
            setCurrentYear(currentYear + 1);
        }
    }, [currentMonth]);

    const renderCalendarHeader = () => {
        return (
            <div className="calendar__header">
                <div
                    className="calendar__back-arrow"
                    onClick={() => {
                        setCurrentMonth(currentMonth - 1);
                    }}
                >
                    <AngleUp />
                </div>
                <div className="calendar__month-name">
                    {monthNames(locale)[currentMonth - 1]} {currentYear}
                </div>
                <div
                    className="calendar__forward-arrow"
                    onClick={() => {
                        setCurrentMonth(currentMonth + 1);
                    }}
                >
                    <AngleUp />
                </div>
            </div>
        );
    };

    const renderCalendarWeekDays = () => {
        const localStartWeekDay = startWeekDay
            ? startWeekDay
            : getCountryStartDate(locale);
        const myweekDays = weekDaySlicer(localStartWeekDay, locale);

        return myweekDays.map((weekDay: string, index: number) => {
            return (
                <div className="calendar__weekday" key={`${weekDay}-${index}`}>
                    {weekDay}
                </div>
            );
        });
    };

    const getDayClassName = (selectedCurrentDay: Date) => {
        if (maxDate && selectedCurrentDay > maxDate) {
            return "disabled-day";
        }

        if (minDate && selectedCurrentDay < minDate) {
            return "disabled-day";
        }

        return "";
    };

    const getDayActive = (selectedCurrentDay: Date) => {
        if (
            selectedDate &&
            resetHoursDate(selectedCurrentDay).getTime() ===
                resetHoursDate(selectedDate).getTime()
        ) {
            return true;
        }

        return false;
    };

    const handleDaySelection = (parsedDay: Date) => {
        if (parsedDay) {
            return setSelectedDate(parsedDay);
        }
    };

    const renderCalendarDays = () => {
        const localStartWeekDay = startWeekDay
            ? startWeekDay
            : getCountryStartDate(locale);
        const totalMonthDays = getMonthDays(currentMonth, currentYear);
        const daysList: any = [];

        const firstWeekday = firstWeekdayOfMonth(
            currentMonth,
            currentYear,
            localStartWeekDay
        );

        for (let i = 0; i < firstWeekday - 1; i++) {
            daysList.push("");
        }

        for (let i = 1; i <= totalMonthDays; i++) {
            daysList.push(i);
        }

        return daysList.map((day: number, index: number) => {
            const parsedDay = getSelectedDay(day, currentMonth, currentYear);
            const disableFutureDay = maxDate && parsedDay > maxDate;
            const disablePastDay = minDate && parsedDay < minDate;

            return (
                <div
                    key={`${parsedDay.getTime().toString()}${index}`}
                    className={`calendar__single-day ${getDayClassName(
                        parsedDay
                    )}`}
                    onClick={() => {
                        if (parsedDay && !disableFutureDay && !disablePastDay) {
                            handleDaySelection(parsedDay);
                            setShowCalendar(false);
                        }
                    }}
                >
                    {getDayActive(parsedDay) && day && (
                        <div className="calendar__active-path-day"></div>
                    )}
                    <div className="calendar__day-text">{day}</div>
                </div>
            );
        });
    };

    return (
        <OutsideClick handleClickOutside={() => setShowCalendar(false)}>
            <div className="calendar__main-container">
                <div className="calendar__header-main-container">
                    {renderCalendarHeader()}
                </div>
                <div className="calendar__weekday-container">
                    {renderCalendarWeekDays()}
                </div>
                <div className="calendar__month-container">
                    {renderCalendarDays()}
                </div>
            </div>
        </OutsideClick>
    );
};

export default DatePickerSimple;
