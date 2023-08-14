import { days, months } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import {
    HeaderContainer,
    DateContainer,
    Month,
    ButtonText,
    Day,
} from './styled';

export function Header(props: { date: Date | string }) {
    const { date } = props;
    const { t } = useTranslation();

    const day = date instanceof Date ? date.getDate() : '';
    const dayName = date instanceof Date ? days[date.getDay()] : '';
    const month = date instanceof Date ? months[date.getMonth()] : '';

    return (
        <HeaderContainer>
            <DateContainer>
                <Month>{t(month)}</Month>
                <Day>
                    {day}.{t(dayName)}
                </Day>
            </DateContainer>
            <ButtonText style={{ fontFamily: 'Cascadia' }}>Progress</ButtonText>
        </HeaderContainer>
    );
}
