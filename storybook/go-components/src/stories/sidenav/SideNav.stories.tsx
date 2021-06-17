import React from "react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Sidenav from "../../components/sidenav";
import { ButtonModelType } from "../../components/sidenav/types";
import { getSmartmeteringButtons } from "./buttons";

export default {
    title: "Sidenav",
    component: Sidenav,
    decorators: [withKnobs],
};

export const DefaultdSidenav = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const expanded: boolean = boolean("expanded", false);
    const buttons: Array<ButtonModelType> = getSmartmeteringButtons();
    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <Sidenav
                locale={language}
                expanded={expanded}
                defaultButton={buttons[1]}
                buttons={buttons}
                onSelected={action("selected button")}
            />
        </div>
    );
};

export const DashboardSidenav = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const selectedDma: string = text("selected dma", "Port Sagunt");
    const expanded: boolean = boolean("expanded", false);
    const buttons: Array<ButtonModelType> = getSmartmeteringButtons();
    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <Sidenav
                locale={language}
                selectedDma={selectedDma}
                expanded={expanded}
                defaultButton={buttons[1]}
                buttons={buttons}
                onSelected={action("selected button")}
            />
        </div>
    );
};

export const AlarmsSidenav = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const selectedDma: string = text("selected dma", "Port Sagunt");
    const expanded: boolean = boolean("expanded", false);
    const buttons: Array<ButtonModelType> = getSmartmeteringButtons();
    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <Sidenav
                locale={language}
                selectedDma={selectedDma}
                expanded={expanded}
                defaultButton={buttons[2]}
                buttons={buttons}
                onSelected={action("selected button")}
            />
        </div>
    );
};

export const NotificationSidenav = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const selectedDma: string = text("selected dma", "Port Sagunt");
    const expanded: boolean = boolean("expanded", false);
    const buttons: Array<ButtonModelType> = getSmartmeteringButtons();
    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <Sidenav
                locale={language}
                selectedDma={selectedDma}
                expanded={expanded}
                defaultButton={buttons[3]}
                buttons={buttons}
                onSelected={action("selected button")}
            />
        </div>
    );
};
