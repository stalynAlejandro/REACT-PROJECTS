import React from "react";
import {
    withKnobs,
    select,
    boolean,
    number,
    text,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Toast from "../../components/toast";
import {
    toastSuccess,
    toastDanger,
    toastInfo,
    toastWarning,
} from "./toast-list";

export default {
    title: "Toast",
    component: Toast,
    decorators: [withKnobs],
};

export const GoSucessToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );

    return (
        <Toast
            size={"bigger"}
            locale={language}
            toastList={toastSuccess}
            position={position}
            type={"simple"}
            autoDelete={false}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const GoLoaderToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const title: string = text("title", "Loading ZeroLeaks map");
    const percentage: number = number("percentage", 75);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );

    return (
        <Toast
            size={"bigger"}
            loaderTitle={title}
            percentage={percentage}
            locale={language}
            toastList={toastSuccess}
            position={position}
            type={"loader"}
            autoDelete={false}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const GoCompletedToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );

    return (
        <Toast
            size={"bigger"}
            locale={language}
            toastList={toastSuccess}
            position={position}
            type={"completed"}
            autoDelete={false}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const GoErrorToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );

    return (
        <Toast
            size={"bigger"}
            locale={language}
            toastList={toastDanger}
            position={position}
            type={"simple"}
            autoDelete={false}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const GoWanrningToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        [
            "center",
            "none-center",
            "center",
            "top-right",
            "top-left",
            "bottom-left",
            "bottom-right",
        ],
        "center"
    );

    return (
        <Toast
            size={"default"}
            locale={language}
            toastList={toastWarning}
            position={position}
            type={"warning"}
            autoDelete={false}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const SuccessToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );
    const type: any = select(
        "type",
        ["simple", "normal", "loader", "warning", "completed"],
        "normal"
    );
    const autoDelete = boolean("auto delete", false);
    const dismissTime = number("dismiss time", 2000);
    const size: any = select("size", ["default", "bigger"], "default");
    const title: string = text("title", "Loading ZeroLeaks map");
    const percentage: number = number("percentage", 75);

    return (
        <Toast
            locale={language}
            loaderTitle={title}
            percentage={percentage}
            size={size}
            toastList={toastSuccess}
            position={position}
            type={type}
            autoDelete={autoDelete}
            dismissTime={dismissTime}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const DangerToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );
    const type: any = select(
        "type",
        ["simple", "normal", "loader", "warning", "completed"],
        "normal"
    );
    const autoDelete = boolean("auto delete", false);
    const dismissTime = number("dismiss time", 2000);
    const size: any = select("size", ["default", "bigger"], "default");
    const title: string = text("title", "Loading ZeroLeaks map");
    const percentage: number = number("percentage", 75);

    return (
        <Toast
            locale={language}
            loaderTitle={title}
            percentage={percentage}
            size={size}
            toastList={toastDanger}
            position={position}
            type={type}
            autoDelete={autoDelete}
            dismissTime={dismissTime}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const InfoToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );
    const type: any = select(
        "type",
        ["simple", "normal", "loader", "warning", "completed"],
        "normal"
    );
    const autoDelete = boolean("auto delete", false);
    const dismissTime = number("dismiss time", 2000);
    const size: any = select("size", ["default", "bigger"], "default");
    const title: string = text("title", "Loading ZeroLeaks map");
    const percentage: number = number("percentage", 75);

    return (
        <Toast
            locale={language}
            loaderTitle={title}
            percentage={percentage}
            size={size}
            toastList={toastInfo}
            position={position}
            type={type}
            autoDelete={autoDelete}
            dismissTime={dismissTime}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};

export const WarningToast: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);
    const position: any = select(
        "position",
        ["top-right", "top-left", "bottom-left", "bottom-right"],
        "top-right"
    );
    const type: any = select(
        "type",
        ["simple", "normal", "loader", "warning", "completed"],
        "normal"
    );
    const autoDelete = boolean("auto delete", false);
    const dismissTime = number("dismiss time", 2000);
    const size: any = select("size", ["default", "bigger"], "default");
    const title: string = text("title", "Loading ZeroLeaks map");
    const percentage: number = number("percentage", 75);

    return (
        <Toast
            locale={language}
            loaderTitle={title}
            percentage={percentage}
            size={size}
            toastList={toastWarning}
            position={position}
            type={type}
            autoDelete={autoDelete}
            dismissTime={dismissTime}
            onResult={action("callback")}
            onRemoveToast={action("removed toast")}
        />
    );
};
