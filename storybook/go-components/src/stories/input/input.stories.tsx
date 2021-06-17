import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Input from "../../components/input";

export default {
    title: "Input",
    component: Input,
    decorators: [withKnobs],
};

export const InputDefault: React.VFC<{}> = () => {
    const name: string = text("name", "Name");
    const value: string = text("value", "");
    const placeholder: string = text("placeholder", "Placeholder...");
    const label: string = text("label", "label");
    const size: any = select("size", ["l", "m", "s"], "s");
    const type: any = select(
        "type",
        ["text", "password", "number", "color"],
        "text"
    );
    const disabled: boolean = boolean("disabled", false);
    const alternative: boolean = boolean("alternative", false);

    return (
        <div style={{ maxWidth: 440 }}>
            <Input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                label={label}
                size={size}
                onChangeInput={action("changed")}
                disabled={disabled}
                alternative={alternative}
            />
        </div>
    );
};
