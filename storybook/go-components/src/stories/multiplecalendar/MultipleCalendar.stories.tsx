import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, select, number } from "@storybook/addon-knobs";
import MultipleCalendar from "../../components/multiplecalendar";

export default {
    title: "MultipleCalendar",
    component: MultipleCalendar,
    decorators: [withKnobs],
};

export const DefaultMultipleCalendar: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const single: boolean = boolean("single", false);
    const disabled: boolean = boolean("disabled", false);

    return (
        <MultipleCalendar
            locale={language}
            single={single}
            disabled={disabled}
            onSelectedDates={action("changed dates")}
        />
    );
};

export const SingleMultipleCalendar: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const single: boolean = boolean("single", true);
    const disabled: boolean = boolean("disabled", false);
    const numberOfMonths: number = number("numberOfMonths", 2);
    const addedDays: number = number("addedDays", 15);
    const initialStartDate: Date = new Date();
    const initialEndDate: Date = new Date();
    initialEndDate.setDate(initialEndDate.getDate() + 30);

    return (
        <MultipleCalendar
            locale={language}
            single={single}
            disabled={disabled}
            numberOfMonths={numberOfMonths}
            addedDays={addedDays}
            initialStartDate={initialStartDate}
            initialEndDate={initialEndDate}
            onSelectedDates={action("changed dates")}
        />
    );
};
