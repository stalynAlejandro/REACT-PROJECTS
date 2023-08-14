import { useState } from 'react';
import { Months, Days } from '../../index';
import { useTranslation } from 'react-i18next';
import {
    HeaderContainer,
    HeaderMonth,
    ChooseDaysContainer,
    MonthText,
    MonthButton,
    LeftArrow,
    DayOfTheWeekContainer as WeekTouchable,
    NameOfDay,
    NumberOfDay,
} from './styled';


function getWeekDays(selectedDay: Date): IWeekDay[] {
    const daysInWeek = 7;
    const weekDays: IWeekDay[] = [];

    // Get the day of the week (0 for Sunday, 1 for Monday, etc.) of the selected day
    const selectedDayKey: number = selectedDay.getDay();

    // Calculate the difference in keys between the selected day and Monday (to get the start of the week)
    const daysUntilMonday: number = (selectedDayKey + daysInWeek - 1) % daysInWeek;
    const startOfWeek: Date = new Date(selectedDay);
    startOfWeek.setDate(selectedDay.getDate() - daysUntilMonday);

    // Add the rest of the days of the week (from Monday to Sunday) to the weekDays array
    for (let i = 0; i < daysInWeek; i++) {
        const day: Date = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        weekDays.push({
            key: i,
            name: Days[i],
            number: day.getDate(),
            date: day, // Add the `date` property with the `day` Date object
        });
    }

    return weekDays;
}

const WeekDay = ({
    nameDay,
    numberDay,
    selected,
    setSelected,
}: {
    nameDay: string;
    numberDay: number;
    selected: boolean;
    setSelected: () => void;
}) => {
    return (
        <WeekTouchable onPress={setSelected}>
            <NameOfDay children={nameDay} />
            <NumberOfDay selected={selected} children={numberDay} />
        </WeekTouchable>
    );
};

interface IWeekDay {
    key: number;
    name: string;
    number: number;
    date: Date;
}
const ChooseDays = ({ selectedDay, setSelectedDay }: { selectedDay: Date, setSelectedDay: (date: Date) => void }) => {
    const { t } = useTranslation();
    const [weekDays] = useState<IWeekDay[]>(getWeekDays(selectedDay));
    const [selected, setSelected] = useState<number>(selectedDay.getDate());

    return (
        <ChooseDaysContainer>
            {weekDays.map((d, index) => (
                <WeekDay
                    key={index}
                    nameDay={t(d.name)}
                    numberDay={d.number}
                    selected={d.number === selected}
                    setSelected={() => {
                        setSelected(d.number);
                        setSelectedDay(d.date)
                    }
                    }
                />
            ))}
        </ChooseDaysContainer>
    );
};

interface IWeekHeader {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewMonth: () => void;
}

export const WeekHeader = ({ selectedDay, setSelectedDay, onViewMonth }: IWeekHeader) => {
    const { t } = useTranslation();
    const month = Months[selectedDay.getMonth()];

    return (
        <HeaderContainer>
            <HeaderMonth>
                <MonthButton onPress={onViewMonth}>
                    <MonthText children={t(month)} />
                    <LeftArrow name="right" size={24} />
                </MonthButton>
            </HeaderMonth>
            <ChooseDays selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </HeaderContainer>
    );
};
