import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { newNotifications } from "../../../stories/alarm-bar/mocked-data/new-notifications";
import { readedNotifications } from "../../../stories/alarm-bar/mocked-data/readed-notifications";
// import { render } from "@testing-library/react";

import Alarmbar from "../index";

let container: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("alarm-bar", () => {
    it("It Renders", () => {
        const nullFunction = () => {};
        act(() => {
            ReactDOM.render(
                <Alarmbar
                    newNotifications={newNotifications}
                    readNotifications={readedNotifications}
                    show={true}
                    locale={"en-GB"}
                    onUpdatePage={nullFunction}
                    onChangeValue={nullFunction}
                    onReadNotification={nullFunction}
                    onMassiveUpdate={nullFunction}
                    onShowRead={nullFunction}
                />,
                container
            );
        });

        const rootElement = container.querySelector(".alarmbar-sidebar");
        expect(rootElement).not.toBe(null);
    });

    it("Check Values", () => {
        const nullFunction = () => {};
        act(() => {
            ReactDOM.render(
                <Alarmbar
                    newNotifications={newNotifications}
                    readNotifications={readedNotifications}
                    show={true}
                    locale={"en-GB"}
                    onUpdatePage={nullFunction}
                    onChangeValue={nullFunction}
                    onReadNotification={nullFunction}
                    onMassiveUpdate={nullFunction}
                    onShowRead={nullFunction}
                />,
                container
            );
        });

        // Check notification show
        let title = container.querySelector(".notification-title");
        expect(title.textContent).toBe("Mock wrench");
        let description = container.querySelector(
            ".notification-content-description span"
        );
        expect(description.textContent).toBe(
            newNotifications.pageData[0].message
        );

        // Check readed notification
        container
            .querySelector(".alarmbar-show-read [type=checkbox]")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        title = container.querySelector(".notification-title");
        expect(title.textContent).toBe("Sensor negative values");
        description = container.querySelector(
            ".notification-content-description span"
        );
        expect(description.textContent).toBe(
            readedNotifications.pageData[0].message
        );
    });

    it("Check outputs", () => {
        const handleOnUpdatePage = jest.fn();
        const handleOnChangeValue = jest.fn();
        const handleOnReadNotification = jest.fn();
        const handleOnMassiveUpdate = jest.fn();
        const handleOnShowRead = jest.fn();

        act(() => {
            ReactDOM.render(
                <Alarmbar
                    newNotifications={newNotifications}
                    readNotifications={readedNotifications}
                    show={true}
                    locale={"en-GB"}
                    onUpdatePage={handleOnUpdatePage}
                    onChangeValue={handleOnChangeValue}
                    onReadNotification={handleOnReadNotification}
                    onMassiveUpdate={handleOnMassiveUpdate}
                    onShowRead={handleOnShowRead}
                />,
                container
            );
        });

        // Check load more notifications
        container
            .querySelector(".load-more-notifications")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(handleOnUpdatePage).toBeCalled();

        // Check readed notification
        container
            .querySelector(".notification-read svg")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(handleOnReadNotification).toBeCalled();

        // Check MarkAll
        container
            .querySelector(".alarmbar-mark .--enabled")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(handleOnMassiveUpdate).toBeCalled();

        // Check selector
        container
            .querySelector(".alarmbar-show-read [type=checkbox]")
            .dispatchEvent(new MouseEvent("click", { bubbles: true })); // Readed must be active
        container
            .querySelector(".select-comunication-icon")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        container
            .querySelector(".select-comunication-item:nth-child(1)")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(handleOnChangeValue).toBeCalled();
    });
});
