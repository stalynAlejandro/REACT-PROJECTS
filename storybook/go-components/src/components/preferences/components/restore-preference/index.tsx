import React from "react";
import Button from "../../../button";
import { RestorePreferenceType } from "./types";

const RestorePreference = ({
    text,
    disabled,
    onRestoreDefault,
}: RestorePreferenceType) => {
    return (
        <div className="restore-preferences">
            <Button
                textButton={text}
                color={"gray"}
                css={""}
                disabled={disabled}
                onClickedButton={onRestoreDefault}
            />
        </div>
    );
};

export default RestorePreference;
