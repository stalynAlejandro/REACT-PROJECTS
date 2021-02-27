import React from 'react'
import styles from './Footer.module.css'
import stylesNative from './Footer.style'
import { ButtonBlack } from './ButtonBlack'
import { TextInput } from 'react-native-web'

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

const FooterNewsLetter = () => {
    return (
        <div className={styles.footerTitleContainer}>
            <span className={styles.menuTitle}>Subscríbete</span>
            <span className={styles.link}>Entérate de nuestras ofertas y noticias</span>
            <div className={styles.footerNewsLetter}>
                <TextInput style={stylesNative.newsLetterInput} placeholder={"Escribe tu email..."} />
                <ButtonBlack title={"Enviar"} action={() => console.log("Enviar Email")} />
            </div>
        </div>
    )
}


function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <FooterTitle title={"SCHAIN"} direction={"avd/ Comunidad Valencia, 46770, España"} />
            <FooterMenu />
            <FooterInfo />
            <FooterNewsLetter />
        </footer>
    )
}



export { Footer }