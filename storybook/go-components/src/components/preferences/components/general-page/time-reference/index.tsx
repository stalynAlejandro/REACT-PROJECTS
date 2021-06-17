import React from "react";
import SelectorNames from "../../../../selectornames";
import { RegionPreferenceType } from "./types";
import { loadMessages } from "./languages";

const TimePreference = ({
    locale = "en-GB",
    dateItems,
    hourItems,
    dayItems,
    onChangeDate,
    onChangeHour,
    onChangeDay,
}: RegionPreferenceType) => {
    return (
        <div className="time-preference">
            <SelectorNames
                items={dateItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).DATE}
                size={"m"}
                css={"date-pref"}
                onChangeItems={onChangeDate}
            />
            <div className="separator"></div>
            <SelectorNames
                items={hourItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).HOUR}
                size={"m"}
                css={"hour-pref"}
                onChangeItems={onChangeHour}
            />
            <div className="separator"></div>
            <SelectorNames
                items={dayItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).FIRST_DAY}
                size={"m"}
                css={"first-day-pref"}
                onChangeItems={onChangeDay}
            />
        </div>
    );
};

export default TimePreference;
