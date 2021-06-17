import React from "react";
import { WidgetType } from "./types";
import "./styles/widget.scss";
import "./styles/widgetpopover.scss";

const Widget = ({
    title,
    children,
    expanded = false,
    showExpanded = false,
    hasOptions = false,
    ellipsisMenu,
    expandIcon,
    style,
}: WidgetType) => {
    return (
        <React.Fragment>
            <div className="widget" style={style}>
                <div className="widget__header">
                    <div
                        className="widget__header-title"
                        data-testid="widget__header__title-test"
                    >
                        {title}
                    </div>
                    <div className="icons">
                        <React.Fragment>
                            {showExpanded && expandIcon}
                            {hasOptions && ellipsisMenu}
                        </React.Fragment>
                    </div>
                </div>
                <div className="widget__content">{children}</div>
            </div>
            {expanded && (
                <div className="widget-popver">
                    <div className="widget-container">
                        <div className="widget-header">
                            {title}

                            <div className="widget-icons">
                                <React.Fragment>
                                    {showExpanded && expandIcon}
                                    {hasOptions && ellipsisMenu}
                                </React.Fragment>
                            </div>
                        </div>
                        <div className="widget-content">{children}</div>
                    </div>
                </div>
            )}
        </React.Fragment>

    );
};

export default Widget;
