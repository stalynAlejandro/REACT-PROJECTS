import React from 'react'
import styles from './SubMenuContent.module.css'

const OptionSombreros = ({ setShowMenu }) => {
    return (
        <div onMouseOver={() => setShowMenu('sombreros')}  onMouseLeave={() => setShowMenu('')} className={styles.optionContainer}>Sombreros</div>
    )
}

const OptionCollares = ({ setShowMenu }) => {
    return (
        <div onMouseOver={() => setShowMenu('collares')}  onMouseLeave={() => setShowMenu('')} className={styles.optionContainer}>Collares</div>
    )
}

const OptionRelojes = ({ setShowMenu }) => {
    return (
        <div onMouseOver={() => setShowMenu('relojes')}  onMouseLeave={() => setShowMenu('')} className={styles.optionContainer}>Relojes</div>
    )
}


const OptionPulseras = ({ setShowMenu }) => {
    return (
        <div onMouseOver={() => setShowMenu('pulseras')}  onMouseLeave={() => setShowMenu('')} className={styles.optionContainer}>Pulseras</div>
    )
}


const OptionHome = ({ setShowMenu }) => {
    return (
        <div onMouseOver={() => setShowMenu('home')}  onMouseLeave={() => setShowMenu('')} className={styles.optionContainer}>Home</div>
    )
}


interface ISubMenuContent {
    showMenu: string,
    setShowMenu: Function,
}

function SubMenuContent(args: ISubMenuContent) {
    console.log(args.showMenu)
    return (
        (args.showMenu !== '') ?
            <div className={styles.container}>
                {(args.showMenu === 'home') && <OptionHome setShowMenu={args.setShowMenu} />}
                {(args.showMenu === 'pulseras') && <OptionPulseras setShowMenu={args.setShowMenu} />}
                {(args.showMenu === 'relojes') && <OptionRelojes setShowMenu={args.setShowMenu} />}
                {(args.showMenu === 'collares') && <OptionCollares setShowMenu={args.setShowMenu} />}
                {(args.showMenu === 'sombreros') && <OptionSombreros setShowMenu={args.setShowMenu} />}
            </div>
            :
            <div></div>
    )
}

export { SubMenuContent }
