import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import MapSelector from "../../components/mapselector";
import { itemButtons } from "./itembuttons";

export default {
    title: "MapSelector",
    component: MapSelector,
    decorators: [withKnobs],
};

export const MapSelectorWithButtonst: React.VFC<{}> = () => {
    return (
        <MapSelector
            itemBtns={itemButtons}
            onClikedItem={action("clicked item")}
        />
    );
};
