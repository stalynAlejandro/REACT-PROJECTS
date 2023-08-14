import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';

export const ContentContainer = styled.View`
    margin-top: ${verticalScale(5)}px;
    width: 100%;
    height: 80%;
`;

export const WeekContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;
