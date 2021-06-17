import React, { useState } from "react";
import { SidenavType, ButtonModelType } from "./types";
import { ICON_POSITION } from "./constants";
import { calculateNumTopButtons } from "./functions";
import { loadMessages } from "./languages";
import "./styles/sidenav.scss";

const Sidenav = ({
    locale = "en-GB",
    selectedDma = loadMessages(locale).MESSAGE,
    expanded = false,
    buttons,
    defaultButton,
    onSelected,
}: SidenavType) => {
    const [topButton, setTopButton] = useState<ButtonModelType | null>(null);

    const onSelectedTopButton = (button: ButtonModelType) => {
        if (Array.isArray(buttons)) {
            if (topButton?.id === button?.id) {
                setTopButton(null);
                onSelected(null);
            } else {
                const foundedButton: ButtonModelType | undefined = buttons.find(
                    (b: ButtonModelType) => b?.id === button?.id
                );
                if (foundedButton) {
                    setTopButton(foundedButton);
                    onSelected(foundedButton);
                }
            }
        }
    };

    return (
        <React.Fragment>
            <div
                style={{ alignItems: expanded ? "" : "center" }}
                className={`sidenav__wrapper sidenav-no-select ${
                    expanded ? "sidenav__wrapper--expanded" : ""
                }`}
            >
                <div className="sidenav__top-menu">
                    <div
                        className={`${
                            buttons && calculateNumTopButtons(buttons) > 0
                                ? "top-buttons"
                                : "no-sidenav-icons"
                        }`}
                    >
                        {buttons &&
                            buttons.map(
                                (button: ButtonModelType, index: number) => {
                                    const TopButton = button.Component;
                                    return button.position !==
                                        ICON_POSITION.TOP ? null : (
                                        <React.Fragment
                                            key={`${button.name}-${index}`}
                                        >
                                            <div
                                                className={`sidenav-icon-top ${
                                                    button?.id === topButton?.id
                                                        ? "sidenav-icon-top--active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    onSelectedTopButton(button)
                                                }
                                            >
                                                {TopButton}
                                                {expanded && (
                                                    <span className="sidenav-nameicon-top">
                                                        {selectedDma}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="sidenav-icon-space"></div>
                                        </React.Fragment>
                                    );
                                }
                            )}
                    </div>
                    <div
                        className={`${
                            expanded
                                ? "menu-separator--expanded"
                                : "menu-separator"
                        }`}
                    ></div>
                    <div className="middle-buttons">
                        {buttons &&
                            buttons.map(
                                (button: ButtonModelType, index: number) => {
                                    const MiddleButton = button.Component;
                                    return button.position !==
                                        ICON_POSITION.MIDDLE ? null : (
                                        <React.Fragment
                                            key={`${button.name}-${index}`}
                                        >
                                            <div
                                                className={`sidenav-icon ${
                                                    button.id ===
                                                    defaultButton?.id
                                                        ? "sidenav-icon--active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    onSelected(button)
                                                }
                                            >
                                                {MiddleButton}
                                                {expanded && (
                                                    <span className="sidenav-nameicon">
                                                        {button.name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="sidenav-icon-space"></div>
                                        </React.Fragment>
                                    );
                                }
                            )}
                    </div>
                </div>
                <div className="sidenav__bottom-menu">
                    <div className="bottom-buttons">
                        {buttons &&
                            buttons.map(
                                (button: ButtonModelType, index: number) => {
                                    const BottomButtons = button.Component;
                                    return button.position !==
                                        ICON_POSITION.BOTTOM ? null : (
                                        <React.Fragment
                                            key={`${button.name}-${index}`}
                                        >
                                            <div
                                                className={`sidenav-icon ${
                                                    button.id ===
                                                    defaultButton?.id
                                                        ? "sidenav-icon--active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    onSelected(button)
                                                }
                                            >
                                                {BottomButtons}
                                            </div>
                                            <div className="sidenav-icon-space"></div>
                                        </React.Fragment>
                                    );
                                }
                            )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidenav;
