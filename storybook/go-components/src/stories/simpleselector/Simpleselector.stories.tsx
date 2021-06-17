import React, { useState } from "react";
import { withKnobs , select } from "@storybook/addon-knobs";
import SimpleSelector from "../../components/simple-selector";

export default {
    title: "SimpleSelector",
    component: SimpleSelector,
    decorators: [withKnobs],
};

export const DefaultSimpleSelector = () => {
    const [selectedItemId, setSelectedItemId]: any = useState<number>(1);
    const sizes: string[] = ["l", "m" , "s"] ;
    const firstItem = { id: 0, title: "Mapa" };    
    const secondItem = { id: 1, title: "Tabla" };
    const size: "l" | "m" | "s" = select("size", sizes, sizes[1]) as "l" | "m" | "s";

    const updateTab = (tab: any) => {
        setSelectedItemId(tab.id); 
    };

    return (
        <SimpleSelector
            firstItem={firstItem}
            secondItem={secondItem}
            selectedItemId={selectedItemId}
            onSelectedItem={updateTab}
            size={size}
        />
    );
};
