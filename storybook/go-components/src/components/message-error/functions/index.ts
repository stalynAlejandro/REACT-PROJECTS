import { EMPTY_TEXT } from "../constants";
import { LocaleString } from "../types";

export const formatText = (
    text: string | null,
    size: number | undefined,
    locale: LocaleString
): string => {
    if (!size || !text) return EMPTY_TEXT;
    const maxSize = getMaxSlice(locale);
    const formatedText: string =
        size <= maxSize ? text : text?.slice(0, maxSize) + "...";
    return formatedText;
};

const getMaxSlice = (locale: LocaleString): number => {
    switch (locale) {
        case "en-GB":
            return 30;
        case "en-US":
            return 30;
        case "es-ES":
            return 10;
        case "ca-ES":
            return 22;
        default:
            return 10;
    }
};
