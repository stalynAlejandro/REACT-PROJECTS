import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Checkbox from "../../components/checkbox";
import { CheckboxSize } from "../../components/checkbox/constants";

export default {
    title: "Checkbox",
    component: Checkbox,
    decorators: [withKnobs],
};

export const DefaultCheckBox = () => {
    const label: string = text("label", "Default text");
    const size: CheckboxSize = select(
        "size",
        [CheckboxSize.SMALL, CheckboxSize.NORMAL, CheckboxSize.LARGE],
        CheckboxSize.NORMAL
    );
    const semiChecked: boolean = boolean("semiChecked", false);
    const disabled: boolean = boolean("disabled", false);

    return (
        <Checkbox
            size={size}
            onChange={action("on change!")}
            onClick={action("on click!")}
            label={label}
            semiChecked={semiChecked}
            disabled={disabled}
        />
    );
};
