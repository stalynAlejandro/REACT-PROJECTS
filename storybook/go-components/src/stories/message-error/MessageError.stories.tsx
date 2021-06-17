import React from "react";
import { text, withKnobs, select } from "@storybook/addon-knobs";
import MessageError from "../../components/message-error";

export default {
    title: "MessageError",
    component: MessageError,
    decorators: [withKnobs],
};

export const DefaultMessageError: React.VFC<{}> = () => {
    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];
    const locale: any = select("locale", languages, languages[0]);
    const message = text("message", "Supercalifragilisticoespialidoso");

    return <MessageError locale={locale} text={message} />;
};
