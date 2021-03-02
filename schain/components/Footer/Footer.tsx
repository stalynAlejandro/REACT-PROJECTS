import React, { useState } from 'react'
import styles from './Footer.module.css'
import { ButtonBlack } from '../ButtonBlack/ButtonBlack'
import { StyleSheet, TextInput } from 'react-native-web'
import * as COLORS from '../../constants/COLORS'

interface IFooterTitle {
    title: string,
    direction: string
}
const FooterTitle = ({ title, direction }: IFooterTitle) => {
    return (
        <div className={styles.footerTitleContainer}>
            <span className={styles.footerTitle}>{title}</span>
            <span className={styles.footerDirection}>{direction}</span>
        </div>
    )
}

const FooterMenu = () => {
    return (
        <div className={styles.footerTitleContainer}>
            <span className={styles.menuTitle}>Menu</span>
            <a className={styles.link} href={'/HomePage'}>home</a>
            <a className={styles.link}>pulseras</a>
            <a className={styles.link}>relojes</a>
            <a className={styles.link}>collares</a>
            <a className={styles.link}>sombreros</a>
        </div>
    )
}

const FooterInfo = () => {
    return (
        <div className={styles.footerTitleContainer}>
            <span className={styles.menuTitle}>Info</span>
            <a className={styles.link}>Privacidad</a>
            <a className={styles.link}>Acerca de</a>
            <a className={styles.link}>FAQ</a>
        </div>
    )
}
interface IFooterNewsLetter {
    setValue: Function,
    action: Function,
}
const FooterNewsLetter = ({ setValue, action }: IFooterNewsLetter) => {
    const stylesNative = StyleSheet.create({
        newsLetterInput: {
            height: '2.5rem',
            width: '12rem',
            backgroundColor: COLORS.maxBlack,
            borderColor: COLORS.white,
            color: COLORS.white,
            borderRadius: 4,
            borderWidth: 3,
            textContentType: 'emailAddress',
            textAlign: 'center',
            textColor: COLORS.white,
            marginTop: '1rem',
        }
    })
    return (
        <div className={styles.footerTitleContainer}>
            <span className={styles.menuTitle}>Subscríbete</span>
            <span className={styles.link}>Entérate de nuestras ofertas y noticias</span>
            <div className={styles.footerNewsLetter}>
                <TextInput
                    style={stylesNative.newsLetterInput}
                    onChangeText={(text: string) => setValue(text)}
                    placeholder={"Escribe tu email..."} />
                <ButtonBlack title={"Enviar"} action={() => action()} />
            </div>
        </div>
    )
}


function Footer() {

    const [email, setEmail] = useState<string>('')
    const subscribeEmail = () => console.log(`Subscribir: ${email}`)

    return (
        <footer className={styles.footerContainer}>
            <FooterTitle title={"SCHAIN"} direction={"avd/ Comunidad Valencia, 46770, España"} />
            <FooterMenu />
            <FooterInfo />
            <FooterNewsLetter setValue={setEmail} action={subscribeEmail} />
        </footer>
    )
}

export { Footer }