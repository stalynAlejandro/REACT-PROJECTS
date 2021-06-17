import React, { useEffect, useState } from "react";
import { LIST_TABS, LIST_TABS_BORDER, LIST_ANCHOR } from "../constants";
import {
    ListTabsStyle,
    TabTitleItemStyle,
    ActiveTabBorderType,
    TabAnchorItemType,
    TabsContainerType,
    ReactTabsType,
} from "../types";

export const ListTabs = ({ detailView, children }: ListTabsStyle) => (
    <ul
        id={`${detailView ? LIST_TABS.DETAIL_VIEW : LIST_TABS.DEFAULT}`}
        className="list-tabs"
    >
        {children}
    </ul>
);

export const TabTitleItem = ({
    children,
    innerRef,
    ...restProps
}: TabTitleItemStyle) => (
    <li className="tab-title-item" ref={innerRef} {...restProps}>
        {children}
    </li>
);

export const ActiveTabBorder = ({
    activeTab,
    detailView,
    activeTabElement,
    ...restProps
}: ActiveTabBorderType) => {
    const [left, setLeft] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);

    useEffect((): any => {
        setTimeout(() => {
            const listId = detailView
                ? LIST_TABS_BORDER.DETAIL_VIEW
                : LIST_TABS_BORDER.DEFAULT;
            const tabButtons: any = document.getElementById(listId);
            if (tabButtons === null) return null;
            const tabButtonsPos: any = tabButtons.getBoundingClientRect();
            const tabButton = document.querySelector(
                "#" + activeTab + " .tab-item--active"
            );
            if (tabButton === null) return null;
            const tabButtonPos: any = tabButton?.getBoundingClientRect();

            setLeft(tabButtonPos.left - tabButtonsPos.left);
            setWidth(tabButton?.clientWidth);
            return null;
        }, 80);
    }, [activeTab]);

    return (
        <div
            className={`active-tab-border ${
                activeTabElement ? "active-tab-border--active" : ""
            }`}
            style={{
                width: width,
                left: left,
            }}
            {...restProps}
        />
    );
};

export const TabAnchorItem = ({
    activeTab,
    detailView,
    isActiveTab,
    children,
    tabIndex,
    ...restProps
}: TabAnchorItemType) => {
    const id = detailView ? activeTab : LIST_ANCHOR.DEFAULT;
    return (
        <button
            id={id}
            className={`tab-item tab-item-no-select ${
                isActiveTab ? "tab-item--active" : ""
            }`}
            tabIndex={tabIndex}
            {...restProps}
        >
            {children}
        </button>
    );
};

export const TabsContainer = ({
    children,
    ...restProps
}: TabsContainerType) => (
    <div className="tab-header" {...restProps}>
        {children}
    </div>
);

export const ReactTabs = ({
    scroll,
    children,
    ...restProps
}: ReactTabsType) => (
    <div
        className={`${scroll ? "tab-content-scroll" : "tab-content"}`}
        {...restProps}
    >
        {children}
    </div>
);
