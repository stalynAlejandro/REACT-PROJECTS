import React from "react";
import Button from "./Button";
import { Checkbox } from "./checkbox";
import { icons, checkStates } from "../utils";

const TreeNode = ({
    value,
    icon,
    leaf,
    parentClose,
    parentOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    treeId,
    label,
    showNodeIcon,
    showCheckbox,
    title,
    disabled,
    children,
    onCheck,
    onExpand,
    optimisticToggle,
    expandDisabled,
    lang = {
        collapseAll: "Collapse all",
        expandAll: "Expand all",
        toggle: "Toggle",
    },
    checked,
    expandOnClick,
    isParent,
    onClick,
    className,
    isLeaf,
    expanded,
}: any) => {
    const handleOnCheck = () => {
        onCheck({ value, checked: getCheckState({ toggle: true }) });
    };

    const handleOnClick = () => {
        // Auto expand if enabled
        if (isParent && expandOnClick) {
            handleOnExpand();
        }
        onClick({ value, checked: getCheckState({ toggle: false }) });
    };

    const handleOnExpand = () => {
        onExpand({ value, expanded: !expanded });
    };

    const getCheckState = ({ toggle }: any) => {
        // Toggle off state to checked
        if (checked === checkStates.UNCHECKED && toggle) {
            return true;
        }

        // Node is already checked and we are not toggling
        if (checked === checkStates.CHECKED && !toggle) {
            return true;
        }

        // Get/toggle partial state based on cascade model
        if (checked === checkStates.SEMICHECKED) {
            return optimisticToggle;
        }

        return false;
    };

    const renderCollapseButton = () => {
        if (isLeaf) {
            return (
                <span className="rct-collapse">
                    <span className="rct-icon" />
                </span>
            );
        }

        return (
            <Button
                className="rct-collapse rct-collapse-btn"
                disabled={expandDisabled}
                title={lang.toggle}
                onClick={handleOnExpand}
            >
                {renderCollapseIcon()}
            </Button>
        );
    };

    const renderCollapseIcon = () => {
        if (!expanded) {
            return icons.expandClose;
        }

        return icons.expandOpen;
    };

    // const renderCheckboxIcon = () => {
    //     if (checked === checkStates.UNCHECKED) {
    //         return icons.uncheck;
    //     }

    //     if (checked === checkStates.CHECKED) {
    //         return icons.check;
    //     }

    //     return icons.halfCheck;
    // };

    const renderNodeIcon = () => {
        if (icon !== null) {
            return icon;
        }

        if (isLeaf) {
            return leaf;
        }

        if (!expanded) {
            return parentClose;
        }

        return parentOpen;
    };

    const renderBareLabel = (children: any) => {
        const clickable = onClick !== null;

        return (
            <span className="rct-bare-label" title={title}>
                {clickable ? (
                    <span
                        className="rct-node-clickable"
                        onClick={onClick}
                        onKeyPress={onClick}
                        role="button"
                        tabIndex={0}
                    >
                        {children}
                    </span>
                ) : (
                    children
                )}
            </span>
        );
    };

    const renderCheckboxLabel = () => {
        const clickable = onClick !== null;

        let checkboxRender = (
            <>
                {showNodeIcon ? (
                    <span className="rct-node-icon">{renderNodeIcon()}</span>
                ) : null}
                <span className="rct-checkbox">
                    {/* {renderCheckboxIcon()} */}
                    <Checkbox
                        label={label}
                        semiChecked={checked === checkStates.SEMICHECKED}
                        disabled={disabled}
                        checked={
                            checked === checkStates.CHECKED ||
                            checked === checkStates.SEMICHECKED
                        }
                        onClick={handleOnCheck}
                        labelSize={"normal"}
                        size={"small"}
                    />
                </span>
            </>
        );

        if (clickable) {
            checkboxRender = (
                <span
                    className="rct-node-clickable"
                    onClick={handleOnClick}
                    onKeyPress={handleOnClick}
                    role="link"
                    tabIndex={0}
                >
                    {checkboxRender}
                </span>
            );
        }

        return checkboxRender;
    };

    const renderLabel = () => {
        const labelChildren = [
            showNodeIcon ? (
                <span className="rct-node-icon">{renderNodeIcon()}</span>
            ) : null,
            <span key={label} className="rct-title">
                {label}
            </span>,
        ];

        if (!showCheckbox) {
            return renderBareLabel(labelChildren);
        }

        return renderCheckboxLabel();
    };

    const renderChildren = () => {
        if (!expanded) {
            return null;
        }

        return children;
    };

    const nodeClass = `rct-node ${
        isLeaf
            ? "rct-node-leaf"
            : "rct-node-parent " + expanded
            ? "rct-node-expanded"
            : "rct-node-collapsed"
    } ${disabled ? "rct-disabled" : ""} ${className}`;

    return (
        <li className={nodeClass}>
            <span className="rct-text">
                {renderCollapseButton()}
                {renderLabel()}
            </span>
            {renderChildren()}
        </li>
    );
};

export default TreeNode;
