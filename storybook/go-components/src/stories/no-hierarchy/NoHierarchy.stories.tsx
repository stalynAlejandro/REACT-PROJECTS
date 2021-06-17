import React from "react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import NoHierarchyMask from "../../components/no-hierarchy";

export default {
    title: "NoHierarchyMask",
    component: NoHierarchyMask,
    decorators: [withKnobs],
};

export const NoHierarchyMaskDefault: React.VFC<{}> = () => {
    const enabled: boolean = boolean("active", true);
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: string = select("locale", languages, languages[0]);

    return (
        <div style={{ display: "grid", height: "100vh" }}>
            <NoHierarchyMask noHierarchy={enabled} locale={language} />
        </div>
    );
};
