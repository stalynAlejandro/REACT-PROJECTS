import React from "react";
import SelectorNames from "../../../../selectornames";
import { RegionPreferenceType } from "./types";
import { loadMessages } from "./languages";

const RegionPreference = ({
    locale = "en-GB",
    languageItems,
    onChangeLanguage,
}: RegionPreferenceType) => {
    return (
        <div className="default-preference">
            <SelectorNames
                items={languageItems}
                locale={locale}
                search={true}
                showActive={true}
                label={loadMessages(locale).LANGUAGE}
                size={"m"}
                onChangeItems={onChangeLanguage}
            />
        </div>
    );
};

export default RegionPreference;
