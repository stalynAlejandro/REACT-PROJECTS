import React from "react";
import GlobeIcon from "../../icons/globe-icon";
import CalendarIcon from "../../icons/calendar-icon";
import CalculatorIcon from "../../icons/calculator-icon";
import DefaultRow from "../../components/default-row";
import RegionPreference from "../../components/general-page/region-preference";
import TimePreference from "../../components/general-page/time-reference";
import NumericPreference from "../../components/general-page/numeric-preference";
import { loadMessages } from "./languages";
import { GeneralPageType } from "./types";

const GeneralPage = ({
    locale = "en-GB",
    languageItems,
    dateItems,
    hourItems,
    dayItems,
    thousandItems,
    decimalItems,
    onChangeLanguage,
    onChangeDate,
    onChangeHour,
    onChangeDay,
    onChangeThousand,
    onChangeDecimal,
}: GeneralPageType) => {
    return (
        <React.Fragment>
            <div className="default-preferences">
                <DefaultRow
                    icon={<GlobeIcon />}
                    message={loadMessages(locale).REGION}
                    borderSize={"s"}
                />
                <RegionPreference
                    locale={locale}
                    languageItems={languageItems}
                    onChangeLanguage={onChangeLanguage}
                />
            </div>
            <div className="default-preferences">
                <DefaultRow
                    icon={<CalendarIcon />}
                    message={loadMessages(locale).TIME}
                    borderSize={"m"}
                />
                <TimePreference
                    locale={locale}
                    dateItems={dateItems}
                    hourItems={hourItems}
                    dayItems={dayItems}
                    onChangeDate={onChangeDate}
                    onChangeHour={onChangeHour}
                    onChangeDay={onChangeDay}
                />
            </div>
            <div className="default-preferences">
                <DefaultRow
                    icon={<CalculatorIcon />}
                    message={loadMessages(locale).NUMBER}
                    borderSize={"l"}
                />
                <NumericPreference
                    locale={locale}
                    thousandItems={thousandItems}
                    decimalItems={decimalItems}
                    onChangeThousand={onChangeThousand}
                    onChangeDecimal={onChangeDecimal}
                />
            </div>
        </React.Fragment>
    );
};

export default GeneralPage;
