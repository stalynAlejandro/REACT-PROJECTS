import React, { useEffect, useState } from "react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import Tabs from "../../components/tabs";
import Tab from "../../components/tabs/tab";
import "./styles/tabs-demo.scss";

export default {
    title: "Tabs",
    component: Tabs,
    decorators: [withKnobs],
};

export const DefaultTabs: React.VFC<{}> = () => {
    const tabs: any = [
        { id: "tab1", title: "Dashboard" },
        { id: "tab2", title: "Monitorización" },
        { id: "tab3", title: "Rendimiento" },
        { id: "tab4", title: "Grado de implantación" },
        { id: "tab5", title: "Alarmas" },
        { id: "tab6", title: "Puntos de suministro" },
    ];
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
    const showScroll: boolean = boolean("Show scroll", false);

    const tabIds: Array<string> = tabs.map((e) => e.id);
    const selectedTab: string = select("tab", tabIds, tabIds[0]);
    useEffect(() => {
        setActiveTab(selectedTab);
    }, [selectedTab]);

    const updateTab = (titleTab: string) => {
        if (titleTab == null) return;
        const currentTab = tabs.find((t) => t.title === titleTab);
        setActiveTab(currentTab.id);
    };

    return (
        <div className="tabs-demo">
            <Tabs
                detailView={false}
                tabsProps={{
                    style: {
                        textAlign: "left",
                    },
                }}
                activeTab={{
                    id: activeTab,
                }}
                showScroll={showScroll}
            >
                <Tab
                    id={tabs[0].id}
                    title={tabs[0].title}
                    onSelectedTab={updateTab}
                >
                    <div style={{ gridArea: "1 / 1 / 13 / 13" }}></div>
                </Tab>
                <Tab
                    id={tabs[1].id}
                    title={tabs[1].title}
                    onSelectedTab={() => updateTab}
                >
                    <div style={{ gridArea: "1 / 1 / 13 / 13" }}></div>
                </Tab>
                <Tab
                    id={tabs[2].id}
                    title={tabs[2].title}
                    onSelectedTab={() => updateTab}
                >
                    <div style={{ gridArea: "1 / 1 / 13 / 13" }}></div>
                </Tab>
                <Tab
                    id={tabs[3].id}
                    title={tabs[3].title}
                    onSelectedTab={updateTab}
                >
                    <div style={{ gridArea: "1 / 1 / 13 / 13" }}></div>
                </Tab>
                <Tab
                    id={tabs[4].id}
                    title={tabs[4].title}
                    onSelectedTab={() => updateTab}
                >
                    <div style={{ gridArea: "1 / 1 / 13 / 13" }}></div>
                </Tab>
                <Tab
                    id={tabs[5].id}
                    title={tabs[5].title}
                    onSelectedTab={() => updateTab}
                >
                    <div style={{ gridArea: "1 / 1 / 13 / 13" }}></div>
                </Tab>
            </Tabs>
        </div>
    );
};
