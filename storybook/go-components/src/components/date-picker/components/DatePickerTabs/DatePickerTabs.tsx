import React, { useState, useEffect } from "react";

import { datePickerTabsPropsType } from "../../types/types";
import { TABS } from "./constants";
import {
    CURRENT_MONTH,
    CURRENT_YEAR,
    firstWeekdayOfMonth,
    getMonthDays,
    getSelectedDay,
    weekDaySlicer,
    getCountryStartDate,
} from "../../helpers/calendar-helpers";
import {
    getCurrentActivePath,
    getDayActive,
    getDayClassName,
} from "./datepicker-tabs-helpers";
import Button from "../../../button";
import {
    renderCalendarHeader,
    renderCalendarTabs,
} from "./datepickertabs-helper-components";
import { loadMessages } from "../../languages";
import OutsideClick from "../../helpers/outside-click";

import "../../styles/date-tabs-picker.scss";

const DatePickerTabs = ({
    locale = "en-GB",
    startWeekDay,
    selectedDate,
    setShowCalendar,
    setSelectedDate,
    maxDate,
    minDate,
    applyDate,
    setApplyDate,
}: datePickerTabsPropsType) => {
    const [selectedTab, setSelectedTab] = useState<string>(TABS.FROM);
    const [currentMonth, setCurrentMonth] = useState(
        selectedDate?.startDate
            ? new Date(selectedDate?.startDate).getMonth() + 1
            : CURRENT_MONTH
    );
    const [currentYear, setCurrentYear] = useState(
        selectedDate?.startDate
            ? new Date(selectedDate?.startDate).getFullYear()
            : CURRENT_YEAR
    );
    const [localMinDate, setLocalMinDate] = useState<Date | null>(null);

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

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
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

    const handleDaySelection = (parsedDay: Date) => {
        if (selectedTab === TABS.FROM) {
            setSelectedTab(TABS.TO);
            setLocalMinDate(parsedDay);

            return setSelectedDate({
                startDate: parsedDay,
                endDate: null,
            });
        }

        if (selectedTab === TABS.TO) {
            return setSelectedDate({
                startDate: selectedDate.startDate,
                endDate: parsedDay,
            });
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
            const disablePastDay =
                (minDate && parsedDay < minDate) ||
                (localMinDate && parsedDay < localMinDate);

            return (
                <div
                    key={`${parsedDay.getTime().toString()}${index}`}
                    className={`calendar__single-day ${getDayClassName(
                        parsedDay,
                        localMinDate,
                        selectedDate,
                        day,
                        maxDate,
                        minDate,
                        locale
                    )}`}
                    onClick={() => {
                        if (parsedDay && !disableFutureDay && !disablePastDay) {
                            handleDaySelection(parsedDay);
                        }
                    }}
                >
                    {day && getDayActive(parsedDay, selectedDate) && (
                        <div
                            className={getCurrentActivePath(
                                selectedTab,
                                parsedDay,
                                selectedDate
                            )}
                        ></div>
                    )}
                    <div className="calendar__day-text">{day}</div>
                </div>
            );
        });
    };

    return (
        <OutsideClick handleClickOutside={() => setShowCalendar(false)}>
            <div className="calendar__global-tabs-container">
                {renderCalendarTabs(
                    selectedTab,
                    selectedDate,
                    setLocalMinDate,
                    handleTabChange,
                    locale
                )}
                <div className="calendar__main-tabs-container">
                    <div className="calendar__header-main-container">
                        {renderCalendarHeader(
                            currentMonth,
                            currentYear,
                            setCurrentMonth,
                            locale
                        )}
                    </div>
                    <div className="calendar__weekday-container">
                        {renderCalendarWeekDays()}
                    </div>
                    <div className="calendar__month-container">
                        {renderCalendarDays()}
                    </div>
                    <div className="calendar__buttons-container">
                        <div
                            className="calendar__cancel-button"
                            onClick={() => setShowCalendar(false)}
                        >
                            {loadMessages(locale).CANCEL}
                        </div>
                        <Button
                            textButton={loadMessages(locale).APPLY}
                            color="blue"
                            disabled={
                                !selectedDate.startDate || !selectedDate.endDate
                            }
                            onClickedButton={() => {
                                setShowCalendar(false);
                                setApplyDate(!applyDate);
                            }}
                            size="s"
                            css=""
                        ></Button>
                    </div>
                </div>
            </div>
        </OutsideClick>
    );
};

export default DatePickerTabs;
