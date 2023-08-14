import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { verticalScale, isMobile } from 'utils/scaleFunctions';

export const ButtonText = styled.Text`
    text-align: center;
    font-size: ${verticalScale(fontSizes.small)}px;
    font-family: ${fontFamilies.Cascadia};
    color: ${props => props.theme.borderColor};
`;

export const Month = styled.Text`
    font-family: ${fontFamilies.CascadiaItalic};
    font-size: ${isMobile ? verticalScale(fontSizes.small) : 22}px;
    color: ${props => props.theme.txtColor};
`;

export const Day = styled.Text`
    font-family: ${fontFamilies.CascadiaMono};
    font-size: ${isMobile ? verticalScale(fontSizes.large) : 40}px;
    color: ${props => props.theme.txtColor};
`;

export const DateContainer = styled.View``;

export const HeaderContainer = styled.View`
    width: 90%;
    height: 10%;
    min-height: 80px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom-width: 2px;
    border-color: ${props => props.theme.borderColor};
`;
