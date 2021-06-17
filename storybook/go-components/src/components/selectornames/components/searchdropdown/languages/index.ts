import { MESSAGES_ES } from "./es";
import { MESSAGES_EN } from "./en";

export const loadMessages = (locale: string) => {
    switch (locale) {
        case "es-ES":
            return MESSAGES_ES;
        case "en-US":
            return MESSAGES_EN;
        default:
            return MESSAGES_EN;
    }
};
