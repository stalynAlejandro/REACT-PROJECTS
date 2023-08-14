import styled from 'styled-components/native';
import { Screens, fontFamilies, fontSizes } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export interface ISideMenu {
    options: IOption[];
    setOptions: (options: IOption[]) => void;
}

export interface IOption {
    text: string;
    selected?: boolean;
    lastOne?: boolean;
}

export const initOptions: IOption[] = [
    {
        text: Screens.TODAY,
        selected: false,
        lastOne: false,
    },
    {
        text: Screens.CALENDAR,
        selected: true,
        lastOne: false,
    },
    {
        text: Screens.GOALS,
        selected: false,
        lastOne: false,
    },
    {
        text: Screens.PROFILE,
        selected: false,
        lastOne: true,
    },
];

export const TextContainer = styled.Text<{ selected?: boolean }>`
    width: ${isMobile ? '180px' : '100%'};
    text-align: center;
    align-self: center;
    font-family: ${fontFamilies.Cascadia};
    font-size: ${isMobile ? verticalScale(fontSizes.small) : 22}px;
    transform: ${isMobile ? 'rotate(-90deg)' : ''};
    color: ${props => (props.selected ? props.theme.txtSelected : props.theme.txtColor)};
`;

export const OptionContainer = styled.TouchableOpacity<{ selected?: boolean; lastOne?: boolean }>`
    right: 0px;
    bottom: ${props => (props.lastOne ? -10 : 2)}px;
    height: 20%;
    width: 100%;
    align-content: center;
    justify-content: center;
    border: ${props => `1px solid ${props.theme.borderColor}`};
    border-right-width: 0px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    position: ${props => (props.lastOne ? 'absolute' : 'relative')};
    background-color: ${props => (props.selected ? props.theme.selected : props.theme.bgColor)};
`;

export const SideMenuContainer = styled.View`
    width: 10%;
    height: 100%;
    max-width: 120px;
    min-width: ${isMobile ? 0 : 110}px;
    border-left-width: 0px;
    border-right-width: 1.5px;
    border-top-left-radius: 8px;
    border: 3px solid ${props => props.theme.borderColor};
`;

export const MenuContainer = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: row;
    padding-top: ${isMobile ? 25 : 0}px;
    border: ${props => (isMobile ? `2px solid ${props.theme.borderColor}` : 'none')};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${props => props.theme.bgColor};
`;

export const Content = styled.View`
    width: 90%;
    height: 100%;
    border-top-width: 2px;
    border-top-right-radius: 8px;
    border-color: ${props => props.theme.borderColor};
`;
