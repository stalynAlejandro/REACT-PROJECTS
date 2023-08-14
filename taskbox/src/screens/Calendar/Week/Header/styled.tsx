import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { verticalScale, isMobile } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';

export const LeftArrow = styled(AntDesign)`
    color: ${props => props.theme.borderColor};
`;

export const DayOfTheWeekContainer = styled.TouchableOpacity`
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
`;

export const NameOfDay = styled.Text`
    color: ${props => props.theme.txtColor};
    font-size: ${verticalScale(16)}px;
    font-family: ${fontFamilies.CascadiaMono};
`;

export const NumberOfDay = styled.Text<{ selected: boolean }>`
    width: ${isMobile ? verticalScale(30) : 40}px;
    height: ${isMobile ? verticalScale(30) : 40}px;
    border: 2px;
    text-align: center;
    font-size: ${verticalScale(12)}px;
    border-radius: ${verticalScale(10)}px;
    line-height: ${isMobile ? verticalScale(30) : 30}px;
    font-family: ${fontFamilies.CascadiaMono};
    border-color: ${props => props.theme.selected};
    color: ${props => props.selected ? props.theme.txtSelected : props.theme.txtColor};
    background-color: ${props => props.selected ? props.theme.selected : props.theme.bgColor};
`;

export const ChooseDaysContainer = styled.View`
    width: 90%;
    height: 60%;
    flex-direction: row;
    justify-content: space-around;
`;

export const MonthText = styled.Text`
    color: ${props => props.theme.txtColor};
    font-size: ${verticalScale(fontSizes.large)}px;
    font-family: ${fontFamilies.CascadiaMono};
`;

export const MonthButton = styled.TouchableOpacity`
    height: ${verticalScale(40)}px;
    width: ${verticalScale(100)}px;
    align-items: center;
    justify-content:flex-end;
    flex-direction: row;
    margin-top: ${verticalScale(30)}px;
`;

export const HeaderMonth = styled.View`
    width: 90%;
    height: 50%;
    border-bottom-width: 2px;
    border-color: ${props => props.theme.borderColor};
    align-items:flex-end;
`;

export const HeaderContainer = styled.View`
    height: 20%;
    width: 100%;
    align-items: center;
`;
