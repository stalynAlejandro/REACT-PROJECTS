import styled from 'styled-components/native';
import { windowHeight } from 'utils/scaleFunctions';
// import { fontSizes } from 'utils/constants';
// import { isMobile, verticalScale, windowHeight } from 'utils/scaleFunctions';

export const CalendarContainer = styled.View`
    align-items: center;
    height: ${windowHeight}px;
    border-top-right-radius: 8px;
`;
