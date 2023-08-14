import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { verticalScale, isMobile } from 'utils/scaleFunctions';

export const ButtonText = styled.Text`
    text-align: center;
    font-size: ${verticalScale(fontSizes.small)}px;
    font-family: ${fontFamilies.Cascadia};
    color: ${props => props.theme.borderColor};
`;

export const SubButtonContainer = styled.TouchableOpacity`
    text-align: center;
    width: ${isMobile ? verticalScale(28) : 35}px;
    height: ${isMobile ? verticalScale(28) : 35}px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export const AddButtonContainer = styled.TouchableOpacity`
    text-align: center;
    width: ${isMobile ? verticalScale(28) : 35}px;
    height: ${isMobile ? verticalScale(28) : 35}px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${props => props.theme.gray};
`;

export const ControlContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.borderColor};
`;

export const ValueContainer = styled.View`
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const Value = styled.Text`
    margin-right: 20px;
    color: ${props => props.theme.txtColor};
    font-family: ${fontFamilies.Cascadia};
    font-size: ${isMobile ? verticalScale(fontSizes.normal) : 30}px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.txtColor};
    font-family: ${fontFamilies.Cascadia};
    font-size: ${isMobile ? verticalScale(fontSizes.normal) : 30}px;
`;

export const FieldView = styled.View`
    width: 85%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const FieldContainer = styled.View`
    height: 30%;
    width: 100%;
    min-width: ${isMobile ? 200 : 100}px;
    align-items: center;
    justify-content: space-around;
    margin-top: ${verticalScale(20)}px;
`;
