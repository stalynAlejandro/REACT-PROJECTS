import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import EllipsisExport from "../../components/ellipsis-export";

export default {
    title: "ElipsisExport",
    component: EllipsisExport,
    decorators: [withKnobs],
};

export const EllipsisExportDefault: React.VFC<{}> = () => {
    const xlxsOption: boolean = boolean("xlsx", true);
    const pngOption: boolean = boolean("png", true);
    const pdfOption: boolean = boolean("pdf", true);
    return (
        <div
            style={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <EllipsisExport
                xlxs={xlxsOption}
                png={pngOption}
                pdf={pdfOption}
                onExport={action("option selected")}
            />
        </div>
    );
};
