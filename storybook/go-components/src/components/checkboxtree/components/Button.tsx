import React from "react";
import { ButtonProps } from "../interfaces";

class Button extends React.PureComponent<ButtonProps> {
    render() {
        const { children, title, ...props } = this.props;

        return (
            <button aria-label={title} title={title} type="button" {...props}>
                {children}
            </button>
        );
    }
}

export default Button;
