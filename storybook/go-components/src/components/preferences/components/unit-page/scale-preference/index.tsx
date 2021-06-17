import React from "react";
import SelectorNames from "../../../../selectornames";
import { loadMessages } from "./languages";
import { ScalePrefrenceType } from "./types";

const ScalePreferences = ({
    locale = "en-GB",
    flowItems,
    volumeItems,
    pressureItems,
    lengthItems,
    onChangeFlow,
    onChangeVolume,
    onChangePressure,
    onChangeLength,
}: ScalePrefrenceType) => {
    return (
        <div className="default-preference">
            <SelectorNames
                items={flowItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).FLOW}
                size={"s"}
                css={"unit-pref"}
                onChangeItems={onChangeFlow}
            />
            <div className="separator"></div>
            <SelectorNames
                items={volumeItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).VOLUME}
                size={"s"}
                css={"unit-pref"}
                onChangeItems={onChangeVolume}
            />
            <div className="separator"></div>
            <SelectorNames
                items={pressureItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).PRESSURE}
                size={"s"}
                css={"unit-pref"}
                onChangeItems={onChangePressure}
            />
            <div className="separator"></div>
            <SelectorNames
                items={lengthItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).LENGTH}
                size={"s"}
                css={"unit-pref"}
                onChangeItems={onChangeLength}
            />
        </div>
    );
};

export default ScalePreferences;
