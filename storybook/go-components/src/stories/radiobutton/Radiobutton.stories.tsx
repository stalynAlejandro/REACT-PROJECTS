import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import RadioButton from "../../components/radiobutton";

export default {
    title: "RadioButton",
    component: RadioButton,
    decorators: [withKnobs],
};

export const DefaultRadioButton = () => {
    const title: string = text("title", "Coma (,)");
    const checked: boolean = boolean("checked: ", true);
    const showTitle: boolean = boolean("show title: ", true);
    const size: any = select("size: ", ["s", "m", "l"], "l");
    const disabled: boolean = boolean("disabled: ", false);

    return (
        <RadioButton
            item={{
                id: 0,
                description: "Punto (.)",
                value: ".",
                selected: true,
            }}
            checked={checked}
            title={title}
            showTitle={showTitle}
            size={size}
            disabled={disabled}
            onChange={action("Changed!")}
        />
    );
};
