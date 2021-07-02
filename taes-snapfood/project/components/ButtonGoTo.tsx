import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface IButtonGoTo {
    screen: string
}

function ButtonGoTo({ screen }: IButtonGoTo) {
    const navigation = useNavigation();
    return (
        <Button title={`Go To ${screen}`} onPress={() => navigation.navigate(`${screen}`)} />
    );
}

export { ButtonGoTo }