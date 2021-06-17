import React from "react";
import AbacusIcon from "../../icons/acabus-icon";
import RulerIcon from "../../icons/ruler-icon";
import DefaultRow from "../default-row";
import UnitPreference from "./unit-preference";
import ScalePreferences from "./scale-preference";
import { loadMessages } from "./languages";
import { UnitsPageType } from "./types";

const UnitsPage = ({
    locale = "en-GB",
    unitItems,
    flowItems,
    volumeItems,
    pressureItems,
    lengthItems,
    onChangeUnitSystem,
    onChangeFlow,
    onChangeVolume,
    onChangePressure,
    onChangeLength,
}: UnitsPageType) => {
    return (
        <React.Fragment>
            <div className="default-preferences">
                <DefaultRow
                    icon={<AbacusIcon />}
                    message={loadMessages(locale).UNITS}
                    borderSize={"s"}
                />
                <UnitPreference
                    locale={locale}
                    unitItems={unitItems}
                    onChangeUnitSystem={onChangeUnitSystem}
                />
            </div>
            <div className="default-preferences">
                <DefaultRow
                    icon={<RulerIcon />}
                    message={loadMessages(locale).SCALE}
                    borderSize={"s"}
                />
                <ScalePreferences
                    locale={locale}
                    flowItems={flowItems}
                    volumeItems={volumeItems}
                    pressureItems={pressureItems}
                    lengthItems={lengthItems}
                    onChangeFlow={onChangeFlow}
                    onChangeVolume={onChangeVolume}
                    onChangePressure={onChangePressure}
                    onChangeLength={onChangeLength}
                />
            </div>
        </React.Fragment>
    );
};

export default UnitsPage;
