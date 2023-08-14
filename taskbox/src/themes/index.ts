import 'styled-components/native';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor: string;
        txtColor: string;
        selected: string;
        txtSelected: string;
        borderColor: string;
        gray: string;
    }
}

export const lightTheme: DefaultTheme = {
    bgColor: '#FFFFFF',
    txtColor: '#000000',
    selected: '#000000',
    txtSelected: '#FFFFFF',
    borderColor: '#000000',
    gray: '#dedede',
};

export const darkTheme: DefaultTheme = {
    bgColor: '#000000',
    txtColor: '#FFFFFF',
    selected: '#FFFFFF',
    txtSelected: '#000000',
    borderColor: '#FFFFFF',
    gray: '#565555',
};



