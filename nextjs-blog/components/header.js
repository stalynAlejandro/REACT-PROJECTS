import Link from 'next/link'
import Modal from '@material-ui/core/Modal';
import { StyleSheet, css } from 'aphrodite'
import { withStyles } from 'react-with-styles'
import { useState, useRef } from 'react'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Dimensions } from "react-native";

const Header = ({ styles, ...props }) => {

    const headerOptions = ['Home', 'Product', 'About', 'Contact']

    const [open, setOpen] = useState(false);

    const handleDropMenu = () => {
        if (open) setOpen(false);
        else setOpen(true);
    };

    return (
        <header className={css(styles.navContainer)}>
            <Drawer
                className={css(styles.navDrawer)}
                classes={{
                    root: css(styles.navDrawerRoot),
                    paper: css(styles.navDrawerPaper),
                }}
                anchor={'top'}
                open={open}
                onClose={handleDropMenu} >
                <List>
                    {headerOptions.map((op) => {
                        return (
                            <ListItem button>
                                <Link href={op.toLocaleLowerCase()}>
                                    <a className={css(styles.navMenuText)}> {op} </a>
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>

            <ul className={ (open) ? css(styles.navBarDark) : css(styles.navBar) }>

                {/* Logo Drop Menu */}
                <li className={css(styles.navItem, styles.dropMenu)}>
                    <Link href={''}>
                        <a onClick={handleDropMenu}>
                            {(open) ?
                                <img src="/closeMenuWhite.svg" alt="dropMenu" /> :
                                <img src="/dropMenuWhite.svg" alt="dropMenu" />}
                        </a>
                    </Link>
                </li>

                {/* Logo Principal Medio */}
                <li className={css(styles.navItem)}>
                    <Link href={'/'}>
                        <a href="/" target="_blank">
                            <img src="/primaryLogoWhite.svg" alt="primaryLogo" />
                        </a>
                    </Link>
                </li>

                {/* Menu Principal */}
                {headerOptions.map((op) => {
                    return (
                        <li className={css(styles.navItem, styles.responsiveSmall)}>
                            <Link href={op.toLocaleLowerCase()}>
                                <a className={css(styles.navText)}> {op} </a>
                            </Link>
                        </li>
                    )
                })}

                {/* Logo de Contactar */}
                <li className={css(styles.navItem, styles.dropMenu)}>
                    <Link href={'/contact'}>
                        <a href="/">
                            <img src="/contactWhite.svg" alt="primaryLogo" />
                        </a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default withStyles(({ color, breakpoint }) => ({
    navContainer: {
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
    },
    navBar: {
        height: 42,
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        backgroundColor: color.dark,
        listStyleType: 'none',
        justifyContent: 'space-between',
        paddingLeft: 250,
        paddingRight: 250,
        [breakpoint.medium]: {
            paddingLeft: 150,
            paddingRight: 150,
        },
        [breakpoint.small]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
    navBarDark:{
        margin: 0,
        padding: 0,
        height: 42,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: color.superDark,
        paddingLeft: 20,
        paddingRight: 20,
        
    },
    navItem: {
        padding: 10,
    },
    navText: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 0,
        fontSize: 13,
        textDecoration: 'none',
        color: color.white,

        ':hover': {
            color: color.superWhite,
        },
    },
    responsiveSmall: {
        [breakpoint.small]: {
            display: 'none',
        },
    },
    dropMenu: {
        [breakpoint.large]: {
            display: 'none',
        },
        [breakpoint.medium]: {
            display: 'none',
        },
        [breakpoint.small]: {
            display: 'flex',

        },
    },
    navDrawer: {
        zIndex: 0,
        [breakpoint.large]: {
            display: 'none',
        },
        [breakpoint.medium]: {
            display: 'none',
        },
        [breakpoint.small]: {
            display: 'flex',
        },
    },
    navDrawerRoot: {
        overflow: 'scroll',
        overflowX: 'hidden',
    },
    navDrawerPaper: {
        marginTop: 40,
        height: '100%',
        backgroundColor: color.superDark,
    },
    navMenuText: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 0,
        fontSize: 18,
        textDecoration: 'none',
        color: color.white,
        marginLeft: 40,
        marginTop: 20,
        ':hover': {
            color: color.superWhite,
        },
    },
}))(Header)
