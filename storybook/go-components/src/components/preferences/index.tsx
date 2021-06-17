import React, { useEffect, useState } from "react";
import Button from "../button";
import Tabs from "../tabs";
import Tab from "../tabs/tab";
import CloseIcon from "./icons/close-icon";
import GeneralPage from "./components/general-page";
import UnitsPage from "./components/unit-page";
import ExamplePreference from "./components/example-preference";
import RestorePreference from "./components/restore-preference";
import { loadMessages } from "./languages";
import { BACK, DEFAULT_NUMBER } from "./constants";
import {
    getDecimalWithSeparation,
    getNumberWithSeparation,
    translateDateWitLocale,
    formatDateWithScheme,
    getSelectedItem,
    hasChanged,
    getHour,
} from "./functions";
import {
    SavedPreferencesType,
    PreferencesType,
    DataType,
    DateType,
    TabType,
} from "./types";
import "./styles/preferences.scss";

const Preferences = ({
    locale = "en-GB",
    languageItems = [],
    unitItems = [],
    dateItems = [],
    hourItems = [],
    dayItems = [],
    thousandItems = [],
    decimalItems = [],
    flowItems = [],
    volumeItems = [],
    pressureItems = [],
    lengthItems = [],
    onCancel,
    onSave,
}: PreferencesType) => {
    const tabs: TabType[] = [
        {
            id: loadMessages(locale).TAB_GENERAL,
            title: loadMessages(locale).TAB_GENERAL,
        },
        {
            id: loadMessages(locale).TAB_UNITS,
            title: loadMessages(locale).TAB_UNITS,
        },
    ];
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [restore, setRestore] = useState<boolean>(false);

    const [initLanguage, setInitLanguage] = useState<DataType | null>(null);
    const [initUnit, setInitUnit] = useState<DataType | null>(null);
    const [initDate, setInitDate] = useState<DataType | null>(null);
    const [initHour, setInitHour] = useState<DataType | null>(null);
    const [initDays, setInitDays] = useState<DataType | null>(null);
    const [initThousand, setInitThousand] = useState<DataType | null>(null);
    const [initDecimals, setInitDecimals] = useState<DataType | null>(null);
    const [initFlow, setInitFlow] = useState<DataType | null>(null);
    const [initVolume, setInitVolume] = useState<DataType | null>(null);
    const [initPressure, setInitPressure] = useState<DataType | null>(null);
    const [initLength, setInitLenth] = useState<DataType | null>(null);

    const [language, setLanguage] = useState<DataType | null>(null);
    const [unit, setUnit] = useState<DataType | null>(null);
    const [date, setDate] = useState<DataType | null>(null);
    const [hour, setHour] = useState<DataType | null>(null);
    const [day, setDay] = useState<DataType | null>(null);
    const [thousand, setThoudsand] = useState<DataType | null>(null);
    const [decimals, setDecimals] = useState<DataType | null>(null);
    const [flow, setFlow] = useState<DataType | null>(null);
    const [volume, setVolume] = useState<DataType | null>(null);
    const [pressure, setPressure] = useState<DataType | null>(null);
    const [length, setLength] = useState<DataType | null>(null);

    const [nameDate, setNameDate] = useState<DateType | null>(null);
    const [formatDate, setFormatDate] = useState<string>("");
    const [formatHour, setFormatHour] = useState<string>("");
    const [formatNumber, setFormatNumber] = useState<string>("");

    const onSavePreferences = () => {
        const preferences: SavedPreferencesType[] = [
            { name: BACK.LOCALE, value: language?.value },
            { name: BACK.SYSTEMS, value: unit?.value },
            { name: BACK.VOLUME, value: volume?.value },
            { name: BACK.FLOW, value: flow?.value },
            { name: BACK.PRESSURE, value: pressure?.value },
            { name: BACK.LENGTH, value: length?.value },
            { name: BACK.DATE, value: date?.value },
            { name: BACK.TIME, value: hour?.value },
            { name: BACK.FIRST_DAY, value: day?.value },
            { name: BACK.DECIMAL, value: decimals?.value },
            { name: BACK.THOUSAND, value: thousand?.value },
        ];
        onSave(preferences);
    };

    const restoreDefault = () => {
        setRestore(true);
        setLanguage(initLanguage);
        setUnit(initUnit);
        setDate(initDate);
        setHour(initHour);
        setDay(initDays);
        setThoudsand(initThousand);
        setDecimals(initDecimals);
        setFlow(initFlow);
        setVolume(initVolume);
        setPressure(initPressure);
        setLength(initLength);
    };

    const checkChanges = () => {
        const languageStatus = hasChanged(initLanguage, language);
        const unitStatus = hasChanged(initUnit, unit);
        const dateStatus = hasChanged(initDate, date);
        const hourStatus = hasChanged(initHour, hour);
        const dayStatus = hasChanged(initDays, day);
        const thousandStatus = hasChanged(initThousand, thousand);
        const decimalStatus = hasChanged(initDecimals, decimals);
        const flowStatus = hasChanged(initFlow, flow);
        const volumeStatus = hasChanged(initVolume, volume);
        const pressureStatus = hasChanged(initPressure, pressure);
        const lengthStatus = hasChanged(initLength, length);

        languageStatus ||
        unitStatus ||
        dateStatus ||
        hourStatus ||
        dayStatus ||
        thousandStatus ||
        decimalStatus ||
        flowStatus ||
        volumeStatus ||
        pressureStatus ||
        lengthStatus
            ? setDisabled(false)
            : setDisabled(true);
    };

    const onChangeTab = (tab: string | null) => {
        if (tab === null) return;
        const currentTab: TabType | undefined = tabs.find(
            (t) => t.title === tab
        );
        if (currentTab === undefined) return;
        setActiveTab(currentTab?.id);
    };

    useEffect(() => {
        if (restore) {
            setRestore(false);
        }
    }, [restore]);

    useEffect(() => {
        checkChanges();
    }, [
        language,
        unit,
        date,
        hour,
        thousand,
        decimals,
        day,
        flow,
        volume,
        pressure,
        length,
    ]);

    useEffect(() => {
        const selectedLanguage = getSelectedItem(languageItems);
        const selectedUnits = getSelectedItem(unitItems);
        const selectedDate = getSelectedItem(dateItems);
        const selectedHour = getSelectedItem(hourItems);
        const selectedDay = getSelectedItem(dayItems);
        const selectedThousands = getSelectedItem(thousandItems);
        const selectedDecimals = getSelectedItem(decimalItems);
        const selectedFlow = getSelectedItem(flowItems);
        const selectedVolume = getSelectedItem(volumeItems);
        const selectedPressure = getSelectedItem(pressureItems);
        const selectedLength = getSelectedItem(lengthItems);

        setInitLanguage(selectedLanguage);
        setInitUnit(selectedUnits);
        setInitDate(selectedDate);
        setInitHour(selectedHour);
        setInitDays(selectedDay);
        setInitThousand(selectedThousands);
        setInitDecimals(selectedDecimals);
        setInitFlow(selectedFlow);
        setInitVolume(selectedVolume);
        setInitPressure(selectedPressure);
        setInitLenth(selectedLength);

        setLanguage(selectedLanguage);
        setUnit(selectedUnits);
        setDate(selectedDate);
        setHour(selectedHour);
        setDay(selectedDay);
        setThoudsand(selectedThousands);
        setDecimals(selectedDecimals);
        setFlow(selectedFlow);
        setVolume(selectedVolume);
        setPressure(selectedPressure);
        setLength(selectedLength);
    }, []);

    useEffect(() => {
        if (language !== undefined) {
            const name: DateType | null = translateDateWitLocale(
                language?.value
            );
            if (name === null) return;
            setNameDate(name);
        }
    }, [language]);

    useEffect(() => {
        if (date !== null) {
            const formated = formatDateWithScheme(date?.value);
            setFormatDate(formated);
        }
    }, [date]);

    useEffect(() => {
        if (hour !== null) {
            const hourTime = getHour(hour?.value);
            setFormatHour(hourTime);
        }
    }, [hour]);

    useEffect(() => {
        if (thousand !== null && decimals !== null) {
            const strInteger: string = getNumberWithSeparation(
                DEFAULT_NUMBER,
                thousand.value
            );
            const strDecimal: string = getDecimalWithSeparation(
                DEFAULT_NUMBER,
                decimals.value
            );
            const finalValue: string = strInteger + strDecimal;
            setFormatNumber(finalValue);
        }
    }, [thousand, decimals]);

    return (
        <React.Fragment>
            <div className="go-preferences-overlay"></div>
            <div className="go-user-preferences go-user-preferences-no-select">
                <div className="go-user-preferences-container">
                    <div className="header-preferences">
                        <div className="header-content">
                            <div className="title">
                                {loadMessages(locale).HEADER}
                            </div>
                            <div className="icon" onClick={onCancel}>
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                    <div className="body-preferences">
                        {!restore && (
                            <React.Fragment>
                                <Tabs
                                    detailView={false}
                                    tabsProps={{
                                        style: {
                                            textAlign: "left",
                                        },
                                    }}
                                    activeTab={{
                                        id: activeTab,
                                    }}
                                    showScroll={false}
                                >
                                    <Tab
                                        id={tabs[0].id}
                                        title={tabs[0].title}
                                        onSelectedTab={(tab: string | null) =>
                                            onChangeTab(tab)
                                        }
                                    >
                                        <React.Fragment>
                                            <GeneralPage
                                                locale={locale}
                                                languageItems={languageItems}
                                                dateItems={dateItems}
                                                hourItems={hourItems}
                                                dayItems={dayItems}
                                                thousandItems={thousandItems}
                                                decimalItems={decimalItems}
                                                onChangeLanguage={(
                                                    language: DataType
                                                ) => setLanguage(language)}
                                                onChangeDate={(
                                                    date: DataType
                                                ) => setDate(date)}
                                                onChangeHour={(
                                                    hour: DataType
                                                ) => setHour(hour)}
                                                onChangeDay={(day: DataType) =>
                                                    setDay(day)
                                                }
                                                onChangeThousand={(
                                                    thousand: DataType
                                                ) => setThoudsand(thousand)}
                                                onChangeDecimal={(
                                                    decimal: DataType
                                                ) => setDecimals(decimal)}
                                            />
                                        </React.Fragment>
                                    </Tab>
                                    <Tab
                                        id={tabs[1].id}
                                        title={tabs[1].title}
                                        onSelectedTab={(tab: string | null) =>
                                            onChangeTab(tab)
                                        }
                                    >
                                        <React.Fragment>
                                            <UnitsPage
                                                locale={locale}
                                                unitItems={unitItems}
                                                flowItems={flowItems}
                                                volumeItems={volumeItems}
                                                pressureItems={pressureItems}
                                                lengthItems={lengthItems}
                                                onChangeUnitSystem={(
                                                    unit: DataType
                                                ) => setUnit(unit)}
                                                onChangeFlow={(
                                                    flow: DataType
                                                ) => setFlow(flow)}
                                                onChangeVolume={(
                                                    volume: DataType
                                                ) => setVolume(volume)}
                                                onChangePressure={(
                                                    pressure: DataType
                                                ) => setPressure(pressure)}
                                                onChangeLength={(
                                                    length: DataType
                                                ) => setLength(length)}
                                            />
                                        </React.Fragment>
                                    </Tab>
                                </Tabs>
                            </React.Fragment>
                        )}
                    </div>
                    <div className="body-bottom">
                        <ExamplePreference
                            exampleMessage={loadMessages(locale).EXAMPLE}
                            fullDateStr={nameDate}
                            dateStr={formatDate}
                            hourStr={formatHour}
                            numberStr={formatNumber}
                        />
                        <RestorePreference
                            text={loadMessages(locale).RESTORE}
                            disabled={disabled}
                            onRestoreDefault={restoreDefault}
                        />
                    </div>
                    <div className="footer-preferences">
                        <div className="footer-buttons">
                            <div className="cancel-button" onClick={onCancel}>
                                {loadMessages(locale).FOOTER_CANCEL}
                            </div>
                            <Button
                                textButton={loadMessages(locale).FOOTER_SAVE}
                                color={"blue"}
                                css={""}
                                disabled={disabled}
                                onClickedButton={onSavePreferences}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Preferences;
