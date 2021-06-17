import { MESSAGES_ES } from "./es";
import { MESSAGES_CA } from "./ca";
import { MESSAGES_ENGB } from "./en-gb";
import { MESSAGES_EN } from "./en";

export const loadMessages = (locale: string) => {
    switch (locale) {
        case "es-ES":
            return MESSAGES_ES;
        case "ca-ES":
            return MESSAGES_CA;
        case "en-US":
            return MESSAGES_EN;
        case "en-GB":
            return MESSAGES_ENGB;
        default:
            return MESSAGES_EN;
    }
};
