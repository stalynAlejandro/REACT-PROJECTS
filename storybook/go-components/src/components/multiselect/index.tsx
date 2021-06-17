import React, { useEffect, useState, useRef } from "react";
import TagItems from "./components/tagitems";
import SearchDropDown from "./components/searchdropdown";
import ListDropdown from "./components/listdropdown";
import BottomDropdownType from "./components/bottomdropdown";
import CheckboxTree from "./components/checkboxtree";
import { MultiSelectType, ItemType, MultiselectCheckboxType } from "./types";
import {
    initializeItems,
    initializeNodeItems,
    updateNodesItems,
    selectAll,
    replaceItemInArray,
    updateArray,
    getAllNodeIds,
    removeNode,
    searchByTitleDmas,
} from "./functions";
import "./styles/multiselect.scss";

const MultiSelect = ({
    items,
    selected,
    search = false,
    locale = "en-GB",
    label,
    size = "l",
    disabled = false,
    error = false,
    errorMessage = "",
    type = MultiselectCheckboxType.CHECKLIST,
    nodes = [],
    nodesCheckedByDefault = [],
    nodesExpandedByDefault = [],
    onChangeItems,
    onChangeNodes,
    alternative = false,
}: MultiSelectType) => {
    const refMultiSelect: any = useRef();
    const [enabled, setEnabled] = useState<boolean>(false);
    const [all, setAll] = useState<boolean>(false);
    const [clear, setClear] = useState<boolean>(false);
    const [selectedItems, setSelectedItems] = useState<Array<ItemType>>([]);
    const [filterText, setFilterText] = useState<string>("");
    const [nodesChecked, setNodesChecked] = useState<Array<string>>(
        nodesCheckedByDefault
    );
    const [nodesExpanded, setNodesExpanded] = useState<Array<string>>(
        nodesExpandedByDefault
    );
    const [nodesFiltered, setNodesFiltered] = useState<any>([]);

    const handleClickOutSide = (event: MouseEvent) => {
        if (
            refMultiSelect.current &&
            !refMultiSelect.current.contains(event.target)
        ) {
            setEnabled(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    });

    useEffect(() => {
        if (nodes && type === MultiselectCheckboxType.CHECKTREE) {
            const initializedItems: Array<ItemType> = initializeNodeItems(
                nodes,
                selected
            );
            setSelectedItems(initializedItems);
            setNodesFiltered(nodes);
            if (selected) {
                const nodesSelected = getAllNodeIds(nodes);
                setNodesChecked(nodesSelected);
            } else {
                setNodesChecked([]);
            }
        }
    }, [nodes, type, selected]);

    useEffect(() => {
        if (items && type === MultiselectCheckboxType.CHECKLIST) {
            const initializedItems: Array<ItemType> = initializeItems(
                items,
                selected
            );
            setSelectedItems(initializedItems);
        }
    }, [items, type, selected]);

    useEffect(() => {
        if (type === MultiselectCheckboxType.CHECKTREE) {
            if (!filterText) {
                setNodesFiltered(nodes);
            } else {
                const updatedNodes = searchByTitleDmas(nodes, filterText);
                setNodesFiltered(updatedNodes);
            }
        }
    }, [nodes, type, filterText]);

    const removeTag = (item: ItemType) => {
        const updatedSelectedItems: Array<ItemType> = updateArray(
            item,
            selectedItems
        );
        setSelectedItems(updatedSelectedItems);
        onChangeItems && onChangeItems(updatedSelectedItems);
        if (type === MultiselectCheckboxType.CHECKTREE) {
            const selectedNodes = removeNode(nodes, nodesChecked, item);
            setNodesChecked(selectedNodes);
            onChangeNodes && onChangeNodes(selectedNodes, nodesExpanded);
        }
    };

    const updateEnabled = (): void => {
        const status = !enabled;
        if (!disabled) {
            setEnabled(status);
        }
    };

    const updateItems = (itemSelected: ItemType) => {
        const updatedItems: Array<ItemType> = replaceItemInArray(
            itemSelected,
            selectedItems
        );
        setSelectedItems(updatedItems);
        onChangeItems && onChangeItems(updatedItems);
    };

    const updateSelectedNodes = (nodesChecked: any) => {
        const updatedItems: Array<ItemType> = updateNodesItems(
            nodes,
            nodesChecked
        );
        setSelectedItems(updatedItems);
    };

    const updateSearchItems = (filterText: string) => {
        setFilterText(filterText);
    };

    const selectAllItems = () => {
        const updatedItems: Array<ItemType> = selectAll(selectedItems, true);
        setSelectedItems(updatedItems);
        onChangeItems && onChangeItems(updatedItems);
        if (type === MultiselectCheckboxType.CHECKTREE) {
            const nodesSelected = getAllNodeIds(nodes);
            setNodesChecked(nodesSelected);
            onChangeNodes && onChangeNodes(nodesSelected, nodesExpanded);
        }
        setAll(true);
    };

    const clearItems = () => {
        const updatedItems: Array<ItemType> = selectAll(selectedItems, false);
        setSelectedItems(updatedItems);
        onChangeItems && onChangeItems(updatedItems);
        if (type === MultiselectCheckboxType.CHECKTREE) {
            setNodesChecked([]);
            onChangeNodes && onChangeNodes([], nodesExpanded);
        }
        setClear(true);
        setFilterText("");
    };

    const updateCleared = (): void => {
        setClear(false);
    };

    const updateAll = (): void => {
        setAll(false);
    };

    const onCheck = (checked: Array<string>) => {
        setNodesChecked(checked);
        updateSelectedNodes(checked);
        onChangeNodes && onChangeNodes(checked, nodesExpanded);
    };

    const onExpand = (expanded: Array<string>) => {
        setNodesExpanded(expanded);
        onChangeNodes && onChangeNodes(nodesChecked, expanded);
    };

    return (
        <div
            className={`multiselect ${
                disabled ? "disabled" : ""
            } multiselect--${size} multiselect-no-select`}
            ref={refMultiSelect}
        >
            {label && <div className="multiselect-label">{label}</div>}
            <TagItems
                size={size}
                locale={locale}
                clear={clear}
                all={all}
                error={error}
                enabled={enabled}
                disabled={disabled}
                items={selectedItems}
                onRemove={removeTag}
                onCleared={updateCleared}
                onAll={updateAll}
                onUpdateEnabled={updateEnabled}
                alternative={alternative}
            />
            {error && <div className="multiselect-error">{errorMessage}</div>}
            {enabled && (
                <div className="multiselect-dropdown-container">
                    <div
                        className={`multiselect-dropdown multiselect-dropdown--${size} ${
                            type === MultiselectCheckboxType.CHECKTREE
                                ? "--checkboxtree"
                                : ""
                        }`}
                    >
                        {search && (
                            <SearchDropDown
                                size={size}
                                locale={locale}
                                clearSerchText={clear}
                                onCleared={updateCleared}
                                onUpdateItems={updateSearchItems}
                            />
                        )}
                        {type === MultiselectCheckboxType.CHECKLIST ? (
                            <ListDropdown
                                search={search}
                                items={selectedItems}
                                filterText={filterText}
                                onUpdate={updateItems}
                            />
                        ) : (
                            <div
                                className={`multiselect-dropdown-content ${
                                    !search
                                        ? "multiselect-dropdown-content-top"
                                        : ""
                                } custom-scrollbar`}
                            >
                                <div className="multiselect-dropdown-items">
                                    <CheckboxTree
                                        checked={nodesChecked}
                                        expanded={nodesExpanded}
                                        nodes={nodesFiltered}
                                        onCheck={onCheck}
                                        onExpand={onExpand}
                                    />
                                </div>
                            </div>
                        )}
                        <BottomDropdownType
                            locale={locale}
                            onSelectAll={selectAllItems}
                            onClear={clearItems}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export { MultiSelect, MultiselectCheckboxType };
