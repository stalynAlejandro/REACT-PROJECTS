import { Year } from './Year';
import { Week } from './Week';
import { Month } from './Month';
import { useState } from 'react';
import { CalendarContainer } from './styled';

export const Months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

export const Days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

type CalendarView = 'week' | 'month' | 'year';

export function Calendar() {
    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
    const [view, setView] = useState<CalendarView>('month');

    return (
        <CalendarContainer>
            {view === 'week' && (
                <Week
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    onViewMonth={() => setView('month')}
                />
            )}
            {view === 'month' && (
                <Month
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    onViewWeek={() => setView('week')}
                    onViewYear={() => setView('year')}
                />
            )}
            {view === 'year' && (
                <Year
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    onViewMonth={() => setView('month')}
                />
            )}
        </CalendarContainer>
    );
}
