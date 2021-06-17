import { useContext, useEffect, useCallback } from "react";
import { TabsContext } from "../tabcontext";
import { TabStyle } from "./types";

const Tab = ({ id, title, tabIndex, children, onSelectedTab }: TabStyle) => {
    const context = useContext(TabsContext);

    const addTabToContext = useCallback(() => {
        context.context.addTab({
            id: id,
            title: title,
            tabIndex: tabIndex,
        });
    }, [context.context, id, tabIndex, title]);

    useEffect(() => {
        addTabToContext();
    }, [addTabToContext]);

    const {
        context: {
            activeTab: { id: activeTabId },
        },
    } = context;
    const tabId: string = id;

    const onSelectTabHelper = useCallback(() => {
        if (onSelectedTab && context?.context.activeTab) {
            const contextTab: any = context.context.activeTab;
            onSelectedTab(contextTab.title);
        }
    }, [context]);

    useEffect(() => {
        onSelectTabHelper();
    }, [activeTabId]);

    return activeTabId === tabId && children ? children : null;
};

export default Tab;
