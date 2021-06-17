import { OptionType } from "../../../components/alarm-bar/components/selector/types";
import { loadMessages } from "./languages";

export const generateOptions = (locale: string) => {
    const options: Array<OptionType> = [
        { name: loadMessages(locale)?.SELECT_OPTION, value: "-1" },
        { name: loadMessages(locale)?.ALL_DAYS, value: "100" },
        { name: loadMessages(locale)?.DAYS_30, value: "30" },
        { name: loadMessages(locale)?.DAYS_7, value: "7" },
        { name: loadMessages(locale)?.DAYS_1, value: "1" },
    ];
    return options;
};
