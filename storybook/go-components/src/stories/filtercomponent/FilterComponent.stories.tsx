import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean , select } from "@storybook/addon-knobs";
import FilterComponent from "../../components/filtercomponent";
import { CategoryType } from "../../components/filtercomponent/types";

export default {
    title: "FilterComponent",
    component: FilterComponent,
    decorators: [withKnobs],
};

export const DefaultFilterComponent: React.VFC<{}> = () => {
    const items: Array<CategoryType> = [
        { id: 0, title: "item 1" },
        { id: 1, title: "item 2" },
    ];
    const firstSelected: boolean = boolean("firstSelected", true);
    const disabled: boolean = boolean("disabled", false);
    const sizes: string[] = ["l" , "m" , "s"] ;
    const size: "l" | "m" | "s" = select("size", sizes, sizes[1]) as "l" | "m" | "s";
    const alternative: boolean = boolean("alternative", false);

    return (
        <FilterComponent
            firstSelected={firstSelected}
            firstCategory={items[0]}
            secondCategory={items[1]}
            disabled={disabled}
            onChangeCategory={action("changed category")}
            size={size}
            alternative={alternative}
        />
    );
};
