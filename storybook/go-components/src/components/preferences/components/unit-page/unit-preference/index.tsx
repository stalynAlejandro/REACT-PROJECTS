import React from "react";
import SelectorNames from "../../../../selectornames";
import { UnitPreferenceType } from "./types";
import { loadMessages } from "./languages";

const UnitPreference = ({
    locale = "en-GB",
    unitItems,
    onChangeUnitSystem,
}: UnitPreferenceType) => {
    return (
        <div className="default-preference">
            <SelectorNames
                items={unitItems}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).UNIT_SYSTEM}
                size={"l"}
                onChangeItems={onChangeUnitSystem}
            />
        </div>
    );
};

export default UnitPreference;
