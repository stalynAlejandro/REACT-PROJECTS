export type MultipleCalendarType = {
    locale: string;
    single: boolean;
    disabled: boolean;
    numberOfMonths?: number;
    addedDays?: number;
    initialStartDate?: Date;
    initialEndDate?: Date;
    onSelectedDates: (startDate: string, endDate: string) => void;
};
