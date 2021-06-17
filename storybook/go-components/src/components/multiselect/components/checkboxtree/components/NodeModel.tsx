import { CheckModel } from "../utils";
import { CheckboxTreeProps, Nodes, nodeType } from "../interfaces";

class NodeModel {
    flatNodes: Nodes;
    props: CheckboxTreeProps;
    constructor(props: CheckboxTreeProps, nodes = {}) {
        this.props = props;
        this.flatNodes = nodes;
    }

    public setProps(props: CheckboxTreeProps) {
        this.props = props;
    }

    public clone() {
        const clonedNodes: Nodes = {};

        // Re-construct nodes one level deep to avoid shallow copy of mutable characteristics
        Object.keys(this.flatNodes).forEach((value) => {
            const node = this.flatNodes[value];
            clonedNodes[value] = { ...node };
        });

        return new NodeModel(this.props, clonedNodes);
    }

    public getNode(value: string) {
        return this.flatNodes[value];
    }

    public flattenNodes(nodes: Nodes, parent?: any, depth = 0) {
        if (!Array.isArray(nodes) || nodes.length === 0) {
            return;
        }

        const { disabled, noCascade } = this.props;

        // Flatten the `node` property for internal lookups
        nodes.forEach((node, index) => {
            const isParent = this.nodeHasChildren(node);

            this.flatNodes[node.value] = {
                label: node.label,
                value: node.value,
                children: node.children,
                parent,
                isChild: parent?.value !== undefined,
                isParent,
                isLeaf: !isParent,
                showCheckbox:
                    node.showCheckbox !== undefined ? node.showCheckbox : true,
                disabled: this.getDisabledState(
                    node,
                    parent,
                    disabled,
                    noCascade
                ),
                treeDepth: depth,
                index,
            };
            this.flattenNodes(node.children, node, depth + 1);
        });
    }

    public nodeHasChildren(node: nodeType) {
        return Array.isArray(node?.children) && node.children.length > 0;
    }

    public getDisabledState(
        node: nodeType,
        parent: nodeType,
        disabledProp: boolean,
        noCascade: boolean
    ) {
        if (disabledProp) {
            return true;
        }

        if (!noCascade && parent?.disabled) {
            return true;
        }

        return Boolean(node.disabled);
    }

    public deserializeLists(lists: any) {
        const listKeys = ["checked", "expanded"];

        // Reset values to false
        Object.keys(this.flatNodes).forEach((value) => {
            listKeys.forEach((listKey) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                this.flatNodes[value][listKey] = false;
            });
        });

        // Deserialize values and set their nodes to true
        listKeys.forEach((listKey) => {
            lists[listKey].forEach((value: string) => {
                if (this.flatNodes[value] !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    this.flatNodes[value][listKey] = true;
                }
            });
        });
    }

    public serializeList(key: string) {
        const list: string[] = [];

        Object.keys(this.flatNodes).forEach((value) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            if (this.flatNodes[value][key]) {
                list.push(value);
            }
        });

        return list;
    }

    public expandAllNodes(expand: boolean) {
        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value].isParent) {
                this.flatNodes[value].expanded = expand;
            }
        });

        return this;
    }

    public toggleChecked(
        node: nodeType,
        isChecked: boolean,
        checkModel: any,
        noCascade: boolean,
        percolateUpward = true
    ) {
        const flatNode = this.flatNodes[node.value];
        const modelHasParents =
            [CheckModel.PARENT, CheckModel.ALL].indexOf(checkModel) > -1;
        const modelHasLeaves =
            [CheckModel.LEAF, CheckModel.ALL].indexOf(checkModel) > -1;

        if (flatNode.isLeaf || noCascade) {
            if (node.disabled) {
                return this;
            }

            this.toggleNode(node.value, "checked", isChecked);
        } else {
            if (modelHasParents) {
                this.toggleNode(node.value, "checked", isChecked);
            }

            if (modelHasLeaves) {
                // Percolate check status down to all children
                flatNode.children.forEach((child) => {
                    this.toggleChecked(
                        child,
                        isChecked,
                        checkModel,
                        noCascade,
                        false
                    );
                });
            }
        }

        // Percolate check status up to parent
        // The check model must include parent nodes and we must not have already covered the
        // parent (relevant only when percolating through children)
        if (
            percolateUpward &&
            !noCascade &&
            flatNode.isChild &&
            modelHasParents
        ) {
            this.toggleParentStatus(flatNode.parent, checkModel);
        }

        return this;
    }

    public toggleParentStatus(node: nodeType, checkModel: any) {
        const flatNode = this.flatNodes[node.value];

        if (flatNode.isChild) {
            if (checkModel === CheckModel.ALL) {
                this.toggleNode(
                    node.value,
                    "checked",
                    this.isEveryChildChecked(flatNode)
                );
            }

            this.toggleParentStatus(flatNode.parent, checkModel);
        } else {
            this.toggleNode(
                node.value,
                "checked",
                this.isEveryChildChecked(flatNode)
            );
        }
    }

    public isEveryChildChecked(node: nodeType) {
        return node.children.every(
            (child) => this.getNode(child.value).checked
        );
    }

    public toggleNode(nodeValue: string, key: string, toggleValue: any) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.flatNodes[nodeValue][key] = toggleValue;
        return this;
    }
}

export default NodeModel;
