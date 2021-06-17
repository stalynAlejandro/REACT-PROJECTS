export type datePickerPropsType = {
    type?: "simple" | "tabs";
    startWeekDay?: number;
    locale?: string;
    inputLabel?: string;
    inputSize?: "l" | "m" | "s";
    onSelectDate?: (date: Date | datePickerTabsSelectedDatesType) => void;
    inputDate?: Date | datePickerTabsSelectedDatesType;
    maxDate?: Date;
    minDate?: Date;
    disabled?: boolean;
    calendarInputIcon?: any;
    alternative?: boolean;
    dateFormat?: string;
};

export type datePickerSimpleInputPropsType = {
    startWeekDay?: number;
    locale?: string;
    inputLabel?: string;
    inputSize?: "l" | "m" | "s";
    onSelectDate?: (date: Date) => void;
    inputDate?: Date | datePickerTabsSelectedDatesType;
    maxDate?: Date;
    minDate?: Date;
    disabled?: boolean;
    calendarInputIcon?: any;
    alternative?: boolean;
    dateFormat?: string;
};

export type datePickerSimplePropsType = {
    startWeekDay?: number;
    locale?: string;
    selectedDate: Date | null;
    setSelectedDate: (date: Date) => void;
    setShowCalendar: (state: boolean) => void;
    maxDate?: Date;
    minDate?: Date;
};

export type datePickerTabsSelectedDatesType = {
    startDate: Date | null;
    endDate: Date | null;
};

export type datePickerTabsInputPropsType = {
    startWeekDay?: number;
    locale?: string;
    onSelectDate?: (date: datePickerTabsSelectedDatesType) => void;
    inputDate?: Date | datePickerTabsSelectedDatesType;
    maxDate?: Date;
    minDate?: Date;
    inputLabel?: string;
    inputSize?: "l" | "m" | "s";
    disabled?: boolean;
    calendarInputIcon?: any;
    alternative?: boolean;
    dateFormat?: string;
};

export type datePickerTabsPropsType = {
    startWeekDay?: number;
    locale?: string;
    selectedDate: datePickerTabsSelectedDatesType;
    setShowCalendar: (state: boolean) => void;
    setSelectedDate: (date: datePickerTabsSelectedDatesType) => void;
    maxDate?: Date;
    minDate?: Date;
    applyDate: boolean;
    setApplyDate: (state: boolean) => void;
};

export type dateConfigurationType = {
    day?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit";
    year?: "numeric" | "2-digit";
};
