import React, { useState } from 'react'
import styles from './SubHeaderMenu.module.css'
import { Text, TouchableOpacity, StyleSheet } from 'react-native-web'
import * as COLORS from '../../constants/COLORS'

interface IOption {
    title: string,
    selected: string,
    setOption: Function
}

const Option = (args: IOption) => {
    const text = {
        fontFamily: 'Gruppo',
        fontSize: 20
    }

    const container = {
        paddingHorizontal: 10,
        paddingVertical: 24,
    }

    const styles = StyleSheet.create({
        optionContainerInctive:{
            ...container,
        },
        optionContainerActive: {
            ...container,
            backgroundColor: COLORS.maxWhite,
        },
        option: {
            ...text,
            fontWeight: 'bold'
        },
        optionActive: {
            ...text,
            fontWeight: 'normal'
        }
    })
    return (
        <TouchableOpacity style={(args.title === args.selected) ? styles.optionContainerActive : styles.optionContainerInctive} onPress={() => args.setOption(args.title)}>
            <Text style={(args.title === args.selected) ? styles.option : styles.optionActive}>{args.title}</Text>
        </TouchableOpacity >
    )
}

function SubHeaderMenu() {

    const [selected, setSelected] = useState<string>('home')
    console.log(selected)

    return (
        <main className={styles.container}>
            <Option title={"home"} selected={selected} setOption={setSelected} />
            <Option title={"pulseras"} selected={selected} setOption={setSelected} />
            <Option title={"relojes"} selected={selected} setOption={setSelected} />
            <Option title={"collares"} selected={selected} setOption={setSelected} />
            <Option title={"sombreros"} selected={selected} setOption={setSelected} />
        </main>
    )
};


export { SubHeaderMenu }