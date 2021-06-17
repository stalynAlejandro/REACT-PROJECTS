import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Preferences from "../../components/preferences";
import { languageItems, unitItems } from "./mocked-data/region-filters";
import { dateItems, hourItems, dayItems } from "./mocked-data/time-filters";
import { thousandItems, decimalItems } from "./mocked-data/numeric-filters";
import {
    flowItems,
    volumeItems,
    pressureItems,
    lengthItems,
} from "./mocked-data/unit-filters";

export default {
    title: "Preferences",
    component: Preferences,
    decorators: [withKnobs],
};

export const DefaultPreferences = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[2]);

    return (
        <Preferences
            locale={language}
            languageItems={languageItems}
            unitItems={unitItems}
            dateItems={dateItems}
            hourItems={hourItems}
            dayItems={dayItems}
            thousandItems={thousandItems}
            decimalItems={decimalItems}
            flowItems={flowItems}
            volumeItems={volumeItems}
            pressureItems={pressureItems}
            lengthItems={lengthItems}
            onCancel={action("Canceled preferences")}
            onSave={action("Saved preferences")}
        />
    );
};
