import React from "react";
import {
    TabProviderProps,
    TabProviderState,
    TabType,
    ActiveType,
    TabsContextType,
} from "./types";

const TabsContext: TabsContextType = React.createContext({
    context: {
        prevActiveTab: {},
        activeTab: { id: null },
        tabs: [],
        addTab: (tab: TabType) => {
            console.log("tab: ", tab);
        },
        removeTab: (tab: string) => {
            console.log("tab: ", tab);
        },
        onClick: (tab: TabType) => () => {
            console.log("tab: ", tab);
        },
    },
});

class TabProvider extends React.Component<TabProviderProps, TabProviderState> {
    state: any = {
        tabs: [],
        prevActiveTab: {},
        activeTab: this.props.activeTab,
    };

    componentDidUpdate(prevProps: TabProviderProps) {
        if (
            (prevProps.redraw !== this.props.redraw && this.props.redraw) ||
            prevProps.activeTab.id !== this.props.activeTab.id
        ) {
            const prevActiveTab = Object.assign({}, prevProps.activeTab);
            const tabs = [...this.state.tabs];
            this.setState({
                tabs: tabs,
                prevActiveTab: prevActiveTab,
                activeTab: this.props.activeTab,
            });
        }
    }

    addTab = (tab: TabType) => {
        const isTabExist = this.state.tabs.find(
            (t: TabType) => tab.id === t.id
        );
        if (!isTabExist) {
            this.setState((prevState: { tabs: Array<TabType> }) => {
                return {
                    tabs: prevState.tabs.concat(tab),
                };
            });
        }
    };

    removeTab = (tabId: string) => {
        this.setState((prevState: { tabs: Array<TabType> }) => {
            return {
                tabs: prevState.tabs.filter((tab: TabType) => tab.id !== tabId),
            };
        });
    };

    onClick = (tab: TabType) => () => {
        this.setState((prevState: { activeTab: ActiveType }) => {
            return {
                prevActiveTab: prevState.activeTab,
                activeTab: tab,
            };
        });
    };

    render() {
        return (
            <TabsContext.Provider
                value={{
                    context: {
                        ...this.state,
                        addTab: this.addTab,
                        removeTab: this.removeTab,
                        onClick: this.onClick,
                    },
                }}
            >
                {this.props.children}
            </TabsContext.Provider>
        );
    }
}

const TabConsumer = TabsContext.Consumer;

export { TabProvider, TabsContext, TabConsumer };
