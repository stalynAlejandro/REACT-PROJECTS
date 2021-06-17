import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import DetailViewPopover from "../../components/detailviewpopover";

export default {
    title: "DetailViewPopover",
    component: DetailViewPopover,
    decorators: [withKnobs],
};

export const DetailViewPopoverDefault: React.VFC<{}> = () => {
    return (
        <DetailViewPopover
            headerComponent={null}
            onClose={action("close detail view")}
        >
            <div></div>
        </DetailViewPopover>
    );
};
