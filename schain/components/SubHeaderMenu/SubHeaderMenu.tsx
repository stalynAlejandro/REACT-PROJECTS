import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native-web'
import * as COLORS from '../../constants/COLORS'
import styles from './SubHeaderMenu.module.css'

interface IOption {
    title: string,
    selected: string,
    setOption: Function,
    setShowMenu: Function
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

    const stylesNative = StyleSheet.create({
        optionContainerInctive: {
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
        <div className={styles.optionContainer} onMouseOver={() => args.setShowMenu(args.title)} >
            <TouchableOpacity style={(args.title === args.selected) ? styles.optionContainerActive : stylesNative.optionContainerInctive} onPress={() => args.setOption(args.title)}>
                <Text style={(args.title === args.selected) ? stylesNative.option : stylesNative.optionActive}>{args.title}</Text>
            </TouchableOpacity >
        </div>
    )
}

interface ISubHeaderMenu {
    selected: string,
    setSelected: Function,
    setShowMenu: Function
}

function SubHeaderMenu(args: ISubHeaderMenu) {
    return (
        <main className={styles.container}>
            <Option title={"home"} selected={args.selected} setOption={args.setSelected} setShowMenu={args.setShowMenu} />
            <Option title={"pulseras"} selected={args.selected} setOption={args.setSelected} setShowMenu={args.setShowMenu} />
            <Option title={"relojes"} selected={args.selected} setOption={args.setSelected} setShowMenu={args.setShowMenu} />
            <Option title={"collares"} selected={args.selected} setOption={args.setSelected} setShowMenu={args.setShowMenu} />
            <Option title={"sombreros"} selected={args.selected} setOption={args.setSelected} setShowMenu={args.setShowMenu} />
        </main>
    )
};

export { SubHeaderMenu }