import React from "react";
import { TabProvider, TabConsumer } from "./tabcontext";
import {
    ListTabs,
    TabTitleItem,
    ActiveTabBorder,
    TabAnchorItem,
    TabsContainer,
    ReactTabs,
} from "./functions";
import { TabsProps, TabsState } from "./types";
import "./styles/tabs.scss";

class Tabs extends React.Component<TabsProps, TabsState> {
    state = {
        tabsElements: [],
    };

    render() {
        return (
            <TabProvider
                redraw={this.props.redraw || false}
                activeTab={this.props.activeTab}
            >
                <TabConsumer>
                    {(value: any) => {
                        if (!Array.isArray(value?.context?.tabs)) return null;
                        return (
                            <React.Fragment>
                                <TabsContainer>
                                    {/* tab container */}
                                    <ListTabs
                                        detailView={this.props.detailView}
                                    >
                                        {value &&
                                            value?.context &&
                                            value?.context?.tabs &&
                                            value?.context?.tabs.map(
                                                (tab: any, index: number) => {
                                                    return (
                                                        <TabTitleItem
                                                            key={index}
                                                            id={tab.id}
                                                            innerRef={(
                                                                tabElement: HTMLElement
                                                            ) => {
                                                                if (
                                                                    !this.state
                                                                        .tabsElements[
                                                                        tab.id
                                                                    ]
                                                                ) {
                                                                    this.setState(
                                                                        (prevState: {
                                                                            tabsElements: any[];
                                                                        }) => {
                                                                            const tabsElements =
                                                                                prevState.tabsElements;
                                                                            tabsElements[
                                                                                tab.id
                                                                            ] = tabElement;
                                                                            return {
                                                                                tabsElements,
                                                                            };
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <TabAnchorItem
                                                                activeTab={
                                                                    this.props
                                                                        .activeTab
                                                                        .id
                                                                }
                                                                detailView={
                                                                    this.props
                                                                        .detailView
                                                                }
                                                                isActiveTab={
                                                                    value
                                                                        .context
                                                                        .activeTab
                                                                        .id ===
                                                                    tab.id
                                                                }
                                                                onClick={value.context.onClick(
                                                                    tab
                                                                )}
                                                                tabIndex={
                                                                    tab.tabIndex ||
                                                                    index
                                                                }
                                                                onKeyPress={(
                                                                    event: any
                                                                ) => {
                                                                    const code =
                                                                        event.keyCode ||
                                                                        event.which;

                                                                    if (
                                                                        code ===
                                                                        13
                                                                    ) {
                                                                        value.context.onClick(
                                                                            tab
                                                                        )(
                                                                            event
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                {tab.title}
                                                            </TabAnchorItem>
                                                        </TabTitleItem>
                                                    );
                                                }
                                            )}
                                    </ListTabs>
                                    <ActiveTabBorder
                                        activeTab={this.props.activeTab.id}
                                        detailView={this.props.detailView}
                                        activeTabElement={
                                            this.state.tabsElements[
                                                value.context.activeTab.id
                                            ]
                                        }
                                    />
                                </TabsContainer>
                                <ReactTabs scroll={this.props.showScroll}>
                                    {/*  tab content */}
                                    {this.props.children}
                                </ReactTabs>
                            </React.Fragment>
                        );
                    }}
                </TabConsumer>
            </TabProvider>
        );
    }
}

export default Tabs;
