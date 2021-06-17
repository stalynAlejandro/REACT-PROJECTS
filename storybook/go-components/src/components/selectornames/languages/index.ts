import { MESSAGES_ES } from "./es";
import { MESSAGES_EN } from "./en";
import { MESSAGES_CA } from "./ca";
import { MESSAGES_ENGB } from "./en-gb";

export const loadMessages = (locale: string) => {
    switch (locale) {
        case "es-ES":
            return MESSAGES_ES;
        case "en-US":
            return MESSAGES_EN;
        case "en-GB":
            return MESSAGES_ENGB;
        case "ca-ES":
            return MESSAGES_CA;
        default:
            return MESSAGES_ENGB;
    }
};
