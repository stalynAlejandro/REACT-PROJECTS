import React from "react";

import { DefaultButtonProps } from "../interfaces/interfaces";

const DefaultButton = (props: DefaultButtonProps) => {
    return <button {...props}>{props.children}</button>;
};

export default DefaultButton;
