import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import Alarmbar from "../../components/alarm-bar";
import { newNotifications } from "./mocked-data/new-notifications";
import { readedNotifications } from "./mocked-data/readed-notifications";

export default {
    title: "Alarmbar",
    component: Alarmbar,
    decorators: [withKnobs],
};

export const AlarmbarDefault: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const language: any = select("locale", languages, languages[0]);
    const show: boolean = boolean("show", true);
    return (
        <Alarmbar
            newNotifications={newNotifications}
            readNotifications={readedNotifications}
            show={show}
            locale={language}
            onShowRead={action("show read")}
            onUpdatePage={action("load new page")}
            onChangeValue={action("filter not readed notifications")}
            onReadNotification={action("mark readed the notification")}
            onMassiveUpdate={action("mark readed all notifications")}
        />
    );
};
