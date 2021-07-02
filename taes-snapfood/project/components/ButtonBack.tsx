import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/Colors'

function ButtonBack() {
    const navigation = useNavigation();
    return (
        <Button color={COLORS.purple} title="Back" onPress={() => navigation.goBack()} />
    );
}

export { ButtonBack }