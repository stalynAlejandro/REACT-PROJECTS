import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';
import { AntDesign } from '@expo/vector-icons';

export const LeftArrow = styled(AntDesign)`
    color: ${props => props.theme.borderColor};
`;

export const YearText = styled.Text`
    color: ${props => props.theme.txtColor};
    font-size: ${verticalScale(fontSizes.large)}px;
    font-family: ${fontFamilies.CascadiaMono};
`;

export const YearButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const YearContent = styled.View``;

export const YearHeader = styled.View`
    width: 90%;
    height: 10%;
    flex-direction: row;
    align-items: flex-end;
    border-bottom-width: 2px;
    justify-content: space-between;
    border-color: ${props => props.theme.borderColor};
`;

export const YearContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;
