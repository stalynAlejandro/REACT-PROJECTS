import { Months } from '../index';
import { LeftArrow } from '../Week/Header/styled';
import { useTranslation } from 'react-i18next';
import {
    CalendarNameOfDay,
    MonthButton,
    MonthContainer,
    MonthContent,
    MonthDaysContainer,
    MonthHeader,
    MonthText,
    YearButton,
    YearText,
} from './styled';
import { Text, View } from 'react-native';
import { Days } from '../../Calendar';

interface IMonth {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewWeek: () => void;
    onViewYear: () => void;
}
export const Month = ({
    selectedDay,
    setSelectedDay,
    onViewWeek,
    onViewYear,
}: IMonth) => {
    const { t } = useTranslation();
    const month = Months[selectedDay.getMonth()];

    return (
        <MonthContainer>
            <MonthHeader>
                <MonthButton onPress={onViewWeek}>
                    <LeftArrow name="left" size={24} />
                    <MonthText children={t(month)} />
                </MonthButton>
                <YearButton onPress={onViewYear}>
                    <YearText children={'2023'} />
                    <LeftArrow name="right" size={24} />
                </YearButton>
            </MonthHeader>
            <MonthContent>
                <MonthDaysContainer>
                    {Days.map((d: string, index: number) => (
                        <CalendarNameOfDay key={index}>
                            {t(d)}
                        </CalendarNameOfDay>
                    ))}
                </MonthDaysContainer>
                <View
                    style={{
                        height: '60%',
                        width: '90%',
                        backgroundColor: 'aliceblue',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                </View>
            </MonthContent>
        </MonthContainer>
    );
};
