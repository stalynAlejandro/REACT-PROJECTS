import React, { useState } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import CheckboxTree from "../../components/checkboxtree";
import { example } from "./checkbox-tree-values";

export default {
    title: "CheckboxTree",
    component: CheckboxTree,
    decorators: [withKnobs],
    argTypes: {
        onCheck: { action: "on check!" },
        onExpand: { action: "on expand!" },
    },
};

export const DefaultCheckBoxTree = () => {
    const [nodesChecked, setNodesChecked] = useState(["2"]);
    const [nodesExpanded, setNodesExpanded] = useState(["1"]);
    const disabled: boolean = boolean("disabled", false);
    const expandDisabled: boolean = boolean("expandDisabled", false);
    const showNodeIcon: boolean = boolean("showNodeIcon", false);
    const onlyLeafCheckboxes: boolean = boolean("onlyLeafCheckboxes", false);
    const optimisticToggle: boolean = boolean("optimisticToggle", false);
    const showExpandAll: boolean = boolean("showExpandAll", false);
    const noCascade: boolean = boolean("showExpandAll", false);

    return (
        <CheckboxTree
            checked={nodesChecked}
            expanded={nodesExpanded}
            nodes={example}
            onCheck={(checked: Array<string>) => {
                setNodesChecked(checked);
            }}
            onExpand={(expanded: Array<string>) => {
                setNodesExpanded(expanded);
            }}
            disabled={disabled}
            expandDisabled={expandDisabled}
            showNodeIcon={showNodeIcon}
            onlyLeafCheckboxes={onlyLeafCheckboxes}
            optimisticToggle={optimisticToggle}
            showExpandAll={showExpandAll}
            noCascade={noCascade}
        />
    );
};
