import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';

export const YearText = styled.Text`
    color: ${props => props.theme.txtColor};
    font-size: ${verticalScale(fontSizes.large)}px;
    font-family: ${fontFamilies.CascadiaMono};
`;

export const MonthButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MonthText = styled(YearText)``;

export const YearButton = styled.TouchableOpacity`
    height: ${verticalScale(35)}px;
    width: ${verticalScale(100)}px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${verticalScale(30)}px;
`;

export const CalendarNameOfDay = styled.Text`
    color: ${props => props.theme.txtColor};
    font-size: ${verticalScale(16)}px;
    font-family: ${fontFamilies.CascadiaMono};
`;

export const MonthDaysContainer = styled.View`
    height: 10%;
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const MonthContent = styled.View`
    width: 100%;
    height: 90%;
    align-items: center;
`;

export const MonthHeader = styled.View`
    width: 90%;
    height: 10%;
    flex-direction: row;
    align-items: flex-end;
    border-bottom-width: 2px;
    justify-content: space-between;
    border-color: ${props => props.theme.borderColor};
`;

export const MonthContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;
