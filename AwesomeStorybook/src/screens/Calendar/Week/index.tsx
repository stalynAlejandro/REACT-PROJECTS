import { IToday } from '@types';
import { useDays } from 'hooks/useDays';
import { Content } from 'screens/Today';
import { WeekHeader } from './Header';
import { ContentContainer, WeekContainer } from './styled';

const emptyDay: IToday = {
    date: '',
    fields: [
        { key: 'time', value: { hours: 0, minutes: 0 } },
        { key: 'publications', value: 0 },
        { key: 'videos', value: 0 },
        { key: 'return_visits', value: 0 },
        { key: 'bible_studies', value: 0 },
    ],
    comment: '',
    image: null,
};

interface IWeekContent {
    selectedDay: Date;
}
const WeekContent = ({ selectedDay }: IWeekContent) => {
    const [days] = useDays();
    const cl = () => null;

    const seDay = days.find(d => ((selectedDay && new Date(d.date).getDate() === selectedDay.getDate()) ? d : null))

    return (
        <ContentContainer>
            <Content
                day={seDay ?? emptyDay}
                onChangeImage={cl}
                onChangeComment={cl}
                onChangeField={cl}
                editable={false}
            />
        </ContentContainer>
    );
};

interface IWeekComponent {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewMonth: () => void;
}
export const Week = ({ selectedDay, setSelectedDay, onViewMonth }: IWeekComponent) => {
    return (
        <WeekContainer>
            <WeekHeader selectedDay={selectedDay} setSelectedDay={setSelectedDay} onViewMonth={onViewMonth} />
            <WeekContent selectedDay={selectedDay} />
        </WeekContainer>
    );
};
