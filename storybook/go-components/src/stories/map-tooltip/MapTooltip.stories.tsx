import React from "react";
import {
    boolean,
    number,
    text,
    withKnobs,
    select,
} from "@storybook/addon-knobs";
import MapTooltip from "../../components/map-tooltip";
import { data } from "./detailviewdata";

export default {
    title: "MapTooltip",
    component: MapTooltip,
    decorators: [withKnobs],
};

export const DefaultMapTooltip: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const percentage: string = text("percentage", "10%");
    const isPerformance: boolean = boolean("isPerformance", true);
    const show: boolean = boolean("show", true);
    const name: string = text("name", "Zona A");
    const posX = number("posX", 100);
    const posY = number("posY", 100);
    const locale: string = select("locale", languages, languages[0]);
    const type: any = text("tooltip type", "default");
    const total = text("total", "30");

    return (
        <MapTooltip
            locale={locale}
            type={type}
            show={show}
            name={name}
            posX={posX}
            posY={posY}
            total={total}
            percentage={percentage}
            isPerformance={isPerformance}
            detailViewData={data}
            fixed={false}
        />
    );
};

export const MonitoringtMapTooltip: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const percentage: string = text("percentage", "10%");
    const isPerformance: boolean = boolean("isPerformance", true);
    const show: boolean = boolean("show", true);
    const name: string = text("name", "Zona A");
    const posX = number("posX", 100);
    const posY = number("posY", 100);
    const locale: string = select("locale", languages, languages[0]);
    const type: any = text("tooltip type", "monitoring");
    const total = text("total", "30");

    return (
        <MapTooltip
            locale={locale}
            type={type}
            show={show}
            name={name}
            posX={posX}
            posY={posY}
            total={total}
            percentage={percentage}
            isPerformance={isPerformance}
            detailViewData={data}
            fixed={false}
        />
    );
};

export const ModuleMapTooltip: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const percentage: string = text("percentage", "10%");
    const isPerformance: boolean = boolean("isPerformance", true);
    const show: boolean = boolean("show", true);
    const name: string = text("name", "Zona A");
    const posX = number("posX", 100);
    const posY = number("posY", 100);
    const locale: string = select("locale", languages, languages[0]);
    const type: any = text("tooltip type", "monitoring");
    const total = text("total", "30");

    return (
        <MapTooltip
            locale={locale}
            type={type}
            show={show}
            name={name}
            posX={posX}
            posY={posY}
            total={total}
            percentage={percentage}
            isPerformance={isPerformance}
            detailViewData={data}
            fixed={true}
        />
    );
};

export const DetailViewtMapTooltip: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const percentage: string = text("percentage", "10%");
    const isPerformance: boolean = boolean("isPerformance", true);
    const show: boolean = boolean("show", true);
    const name: string = text("name", "Zona A");
    const posX = number("posX", 800);
    const posY = number("posY", 200);
    const locale: string = select("locale", languages, languages[0]);
    const type: any = text("tooltip type", "detailview");
    const total = text("total", "30");

    return (
        <MapTooltip
            locale={locale}
            type={type}
            show={show}
            name={name}
            posX={posX}
            posY={posY}
            total={total}
            percentage={percentage}
            isPerformance={isPerformance}
            detailViewData={data}
            fixed={false}
        />
    );
};
