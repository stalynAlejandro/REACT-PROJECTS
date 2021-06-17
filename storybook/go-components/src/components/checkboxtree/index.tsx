import React, { useState, useEffect, useRef } from "react";
import { nodeType, CheckboxTreeProps } from "./interfaces";
import Button from "./components/Button";
import { icons, CheckModel, deepEqual, isEmptyObject } from "./utils";
import NodeModel from "./components/NodeModel";
import TreeNode from "./components/TreeNode";
import "./checkboxTree.scss";

const CheckboxTree = ({ ...props }: CheckboxTreeProps) => {
    const [state, setState] = useState({ model: new NodeModel(props) });
    const prevProps = useRef<CheckboxTreeProps>(props);

    useEffect(() => {
        if (isEmptyObject(state.model.flatNodes)) {
            state.model.flattenNodes(props.nodes);
            state.model.deserializeLists({
                checked: props.checked,
                expanded: props.expanded,
            });
        }
    }, [props.checked, props.expanded, props.nodes, state.model]);

    useEffect(() => {
        setState((currentState) => {
            if (!deepEqual(prevProps.current.nodes, props.nodes)) {
                currentState.model.flattenNodes(props.nodes);
            }
            currentState.model.deserializeLists({
                checked: props.checked,
                expanded: props.expanded,
            });
            return { ...currentState };
        });
        prevProps.current.nodes = props.nodes;
    }, [props.nodes, props.checked, props.expanded]);

    useEffect(() => {
        state.model.setProps(props);
    }, [props, state.model]);

    const onCheck = (nodeInfo: any) => {
        const { model } = state;
        const { checkModel, noCascade, onCheck } = props;
        const modelCloned = model.clone();
        const node = modelCloned.getNode(nodeInfo.value);

        model.toggleChecked(nodeInfo, nodeInfo.checked, checkModel, noCascade);
        onCheck(model.serializeList("checked"), { ...node, ...nodeInfo });
    };

    const onExpand = (nodeInfo: any) => {
        const { model } = state;
        const { onExpand } = props;
        const modelCloned = model.clone();
        const node = modelCloned.getNode(nodeInfo.value);

        modelCloned.toggleNode(nodeInfo.value, "expanded", nodeInfo.expanded);
        onExpand(modelCloned.serializeList("expanded"), {
            ...node,
            ...nodeInfo,
        });
    };

    const onNodeClick = (nodeInfo: any) => {
        const { model } = state;
        const { onClick } = props;
        const node = model.getNode(nodeInfo.value);

        onClick({ ...node, ...nodeInfo });
    };

    const onExpandAll = () => {
        expandAllNodes();
    };

    const onCollapseAll = () => {
        expandAllNodes(false);
    };

    const expandAllNodes = (expand = true) => {
        const { onExpand } = props;
        const { model } = state;

        onExpand(
            model.clone().expandAllNodes(expand).serializeList("expanded")
        );
    };

    const determineShallowCheckState = (node: nodeType, noCascade: boolean) => {
        const { model } = state;
        const flatNode = model.getNode(node.value);

        if (flatNode?.isLeaf || noCascade) {
            return flatNode?.checked ? 1 : 0;
        }

        if (isEveryChildChecked(node)) {
            return 1;
        }

        if (isSomeChildChecked(node)) {
            return 2;
        }

        return 0;
    };

    const isEveryChildChecked = (node: nodeType) => {
        const { model } = state;
        return node.children.every(
            (child) => model.getNode(child.value)?.checkState === 1
        );
    };

    const isSomeChildChecked = (node: nodeType) => {
        const { model } = state;
        return node.children.some(
            (child) => model.getNode(child.value)?.checkState > 0
        );
    };

    const renderTreeNodes = (nodes: any[], parent = { value: null }) => {
        const {
            expandDisabled,
            expandOnClick,
            icons,
            lang,
            noCascade,
            onClick,
            onlyLeafCheckboxes,
            optimisticToggle,
            showNodeTitle,
            showNodeIcon,
            showNodeCheckbox,
        } = props;
        const treeNodes = nodes.map((node) => {
            const { model } = state;
            const key = node.value;
            const flatNode = model.getNode(node.value);
            const children = flatNode?.isParent
                ? renderTreeNodes(node.children, node)
                : null;
            if (flatNode) {
                // Determine the check state after all children check states have been determined
                // This is done during rendering as to avoid an additional loop during the
                // deserialization of the `checked` property
                flatNode.checkState = determineShallowCheckState(
                    node,
                    noCascade
                );

                // Show checkbox only if this is a leaf node or showCheckbox is true
                const showCheckbox = showNodeCheckbox
                    ? onlyLeafCheckboxes
                        ? flatNode?.isLeaf
                        : flatNode?.showCheckbox
                    : false;

                // Render only if parent is expanded or if there is no root parent
                const parentExpanded = parent.value
                    ? model.getNode(parent.value!).expanded
                    : true;

                if (!parentExpanded) {
                    return null;
                }

                return (
                    <TreeNode
                        key={key}
                        checked={flatNode.checkState}
                        className={node.className}
                        disabled={flatNode.disabled}
                        expandDisabled={expandDisabled}
                        expandOnClick={expandOnClick}
                        expanded={flatNode.expanded}
                        icon={node.icon}
                        icons={{ ...icons }}
                        label={node.label}
                        lang={lang}
                        optimisticToggle={optimisticToggle}
                        isLeaf={flatNode.isLeaf}
                        isParent={flatNode.isParent}
                        showCheckbox={showCheckbox}
                        showNodeIcon={showNodeIcon}
                        title={
                            showNodeTitle
                                ? node.title || node.label
                                : node.title
                        }
                        treeId={props.id}
                        value={node.value}
                        onCheck={onCheck}
                        onClick={onClick && onNodeClick}
                        onExpand={onExpand}
                    >
                        {children}
                    </TreeNode>
                );
            } else {
                return null;
            }
        });

        return <ol>{treeNodes}</ol>;
    };

    const renderExpandAll = () => {
        const {
            // icons: { expandAll, collapseAll },
            lang,
            showExpandAll,
        } = props;

        if (!showExpandAll) {
            return null;
        }

        return (
            <div className="rct-options">
                <Button
                    className="rct-option rct-option-expand-all"
                    title={lang.expandAll}
                    onClick={onExpandAll}
                >
                    {icons.expandAll}
                </Button>
                <Button
                    className="rct-option rct-option-collapse-all"
                    title={lang.collapseAll}
                    onClick={onCollapseAll}
                >
                    {icons.collapseAll}
                </Button>
            </div>
        );
    };

    const renderHiddenInput = () => {
        const { name, nameAsArray } = props;

        if (name === undefined) {
            return null;
        }

        if (nameAsArray) {
            return renderArrayHiddenInput();
        }

        return renderJoinedHiddenInput();
    };

    const renderArrayHiddenInput = () => {
        const { checked, name: inputName } = props;

        return checked.map((value: string | number) => {
            const name = `${inputName}[]`;

            return (
                <input key={value} name={name} type="hidden" value={value} />
            );
        });
    };

    const renderJoinedHiddenInput = () => {
        const { checked, name } = props;
        const inputValue = checked.join(",");
        return <input name={name} type="hidden" value={inputValue} />;
    };

    const treeClassNames = `react-goaigua-checkbox-tree rct-icons-${
        props.iconsClass
    } ${props.disabled ? "rct-disabled" : ""} ${
        props.nativeCheckboxes ? "rct-native-display" : ""
    }`;

    return (
        <div className={treeClassNames} id={props.id}>
            {renderExpandAll()}
            {renderHiddenInput()}
            {renderTreeNodes(props.nodes)}
        </div>
    );
};

CheckboxTree.defaultProps = {
    checkModel: CheckModel.ALL,
    checked: [],
    disabled: false,
    expandDisabled: false,
    expandOnClick: false,
    expanded: [],
    icons,
    iconsClass: "idrica",
    id: null,
    lang: {
        collapseAll: "Collapse all",
        expandAll: "Expand all",
        toggle: "Toggle",
    },
    name: undefined,
    nameAsArray: false,
    nativeCheckboxes: false,
    noCascade: false,
    onlyLeafCheckboxes: false,
    optimisticToggle: false,
    showExpandAll: false,
    showNodeIcon: false,
    showNodeTitle: false,
    showNodeCheckbox: true,
    onCheck: () => {},
    onClick: null,
    onExpand: () => {},
};

export default CheckboxTree;
