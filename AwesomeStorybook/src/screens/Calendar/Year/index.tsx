import {
    LeftArrow,
    YearButton,
    YearContainer,
    YearContent,
    YearHeader,
    YearText,
} from './styled';

interface IYear {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewMonth: () => void;
}
export const Year = ({ selectedDay, setSelectedDay, onViewMonth }: IYear) => {
    return (
        <YearContainer>
            <YearHeader>
                <YearButton onPress={onViewMonth}>
                    <LeftArrow name="left" size={24} />
                    <YearText children="2023" />
                </YearButton>
            </YearHeader>
            <YearContent></YearContent>
        </YearContainer>
    );
};
