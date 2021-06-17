import React from "react";
import CheckSquareIcon from "../icons/check-square-light";
import SquareIcon from "../icons/square-light";
import MinusSquareIcon from "../icons/minus-square-light";
import ChevronRightIcon from "../icons/chevron-right-light";
import ChevronDownIcon from "../icons/chevron-down-light";
import ChevronUpIcon from "../icons/chevron-up-light";
import PencilIcon from "../icons/pencil-light";

export const icons = {
    check: (
        <span className="rct-icon rct-icon-check">
            <CheckSquareIcon />
        </span>
    ),
    uncheck: (
        <span className="rct-icon rct-icon-uncheck">
            <SquareIcon />
        </span>
    ),
    halfCheck: (
        <span className="rct-icon rct-icon-half-check">
            <MinusSquareIcon />
        </span>
    ),
    expandClose: (
        <span className="rct-icon rct-icon-expand-close">
            <ChevronRightIcon />
        </span>
    ),
    expandOpen: (
        <span className="rct-icon rct-icon-expand-open">
            <ChevronDownIcon />
        </span>
    ),
    expandAll: (
        <span className="rct-icon rct-icon-expand-all">
            <ChevronDownIcon />
        </span>
    ),
    collapseAll: (
        <span className="rct-icon rct-icon-collapse-all">
            <ChevronUpIcon />
        </span>
    ),
    parentClose: (
        <span className="rct-icon rct-icon-parent-close">
            <ChevronUpIcon />
        </span>
    ),
    parentOpen: (
        <span className="rct-icon rct-icon-parent-open">
            <ChevronDownIcon />
        </span>
    ),
    leaf: (
        <span className="rct-icon rct-icon-leaf">
            <PencilIcon />
        </span>
    ),
};
export const CheckModel = {
    ALL: "all",
    PARENT: "parent",
    LEAF: "leaf",
};

export enum checkStates {
    UNCHECKED = 0,
    CHECKED = 1,
    SEMICHECKED = 2,
}

export const deepEqual = (object1: any, object2: any) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isTypeObject(val1) && isTypeObject(val2);
        if (
            (areObjects && !deepEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)
        ) {
            return false;
        }
    }

    return true;
};

export const isEmptyObject = (obj: any) => {
    return Object.keys(obj).length === 0;
};

export const isTypeObject = (obj: any) => {
    var type = typeof obj;
    return type === "function" || (type === "object" && !!obj);
};
