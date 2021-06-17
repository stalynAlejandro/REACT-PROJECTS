import React from "react";
import AngleUp from "../../../../assets/icons/angle-up-light";
import { monthNames } from "../../helpers/calendar-helpers";
import { loadMessages } from "../../languages";
import { datePickerTabsSelectedDatesType } from "../../types/types";

import { TABS } from "./constants";
import {
    getActiveTabClasses,
    getActiveTabTextClasses,
} from "./datepicker-tabs-helpers";

export const renderCalendarHeader = (
    currentMonth: number,
    currentYear: number,
    setCurrentMonth: (month: number) => void,
    locale: string
) => {
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

export const renderCalendarTabs = (
    selectedTab: string,
    selectedDate: datePickerTabsSelectedDatesType,
    setLocalMinDate: (minDate: Date | null) => void,
    handleTabChange: (tab: string) => void,
    locale: string
) => {
    return (
        <div className="calendar__tabs-container">
            <div
                className={getActiveTabClasses(selectedTab, TABS.FROM)}
                onClick={() => {
                    if (selectedDate.startDate) {
                        setLocalMinDate(null);
                    }

                    handleTabChange(TABS.FROM);
                }}
            >
                <div
                    className={getActiveTabTextClasses(selectedTab, TABS.FROM)}
                >
                    {loadMessages(locale).TAB_FROM}
                </div>
                <div
                    className={`calendar__tabs-hidder ${
                        selectedTab === TABS.TO ? "right-hide" : ""
                    }`}
                ></div>
                <div className="calendar__calendar-hidder"></div>
            </div>
            <div
                className={getActiveTabClasses(selectedTab, TABS.TO)}
                onClick={() => {
                    if (selectedDate.startDate) {
                        setLocalMinDate(selectedDate.startDate);
                    }

                    handleTabChange(TABS.TO);
                }}
            >
                <div className={getActiveTabTextClasses(selectedTab, TABS.TO)}>
                    {loadMessages(locale).TAB_TO}
                </div>
            </div>
        </div>
    );
};
