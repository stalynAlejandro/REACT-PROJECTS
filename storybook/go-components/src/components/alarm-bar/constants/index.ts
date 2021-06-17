import { loadMessages } from "../languages";
import { OptionType } from "../types";

export const generateOptions = (locale: string) => {
    const options: Array<OptionType> = [
        { name: loadMessages(locale)?.SELECT_OPTION, value: INIT_OPTION },
        { name: loadMessages(locale)?.ALL_DAYS, value: OPTION_ALL_DAYS },
        { name: loadMessages(locale)?.DAYS_30, value: OPTION_DAYS_30 },
        { name: loadMessages(locale)?.DAYS_7, value: OPTION_DAYS_7 },
        { name: loadMessages(locale)?.DAYS_1, value: OPTION_DAYS_1 },
    ];
    return options;
};

export const INIT_OPTION = "-1";
export const OPTION_ALL_DAYS = "0";
export const OPTION_DAYS_30 = "30";
export const OPTION_DAYS_7 = "7";
export const OPTION_DAYS_1 = "1";

export const MINIM_PAGE = 1;
