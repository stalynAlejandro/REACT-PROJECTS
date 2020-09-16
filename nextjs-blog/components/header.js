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

    // const window = Dimensions.get("window");
    // const screen = Dimensions.get("screen");

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
                    <ListItem button>
                        <Link href={'/'}>
                            <a target="_blank" className={css(styles.navMenuText)}> Home </a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={'/'}>
                            <a className={css(styles.navMenuText)}> Product </a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={'/'}>
                            <a className={css(styles.navMenuText)}> About </a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={'/'}>
                            <a className={css(styles.navMenuText)}> Contact </a>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>

            <ul className={css(styles.navBar)}>

                <li className={css(styles.navItem, styles.dropMenu)}>
                    <Link href={'/'}>
                        <a onClick={handleDropMenu}>
                            {(open) ?
                                <img src="/closeMenuWhite.svg" alt="dropMenu" /> :
                                <img src="/dropMenuWhite.svg" alt="dropMenu" />}
                        </a>
                    </Link>
                </li>

                <li className={css(styles.navItem)}>
                    <Link href={'/'}>
                        <a href="/" target="_blank">
                            <img src="/primaryLogoWhite.svg" alt="primaryLogo" />
                        </a>
                    </Link>
                </li>

                <li className={css(styles.navItem, styles.responsiveSmall)}>
                    <Link href={'/'}>
                        <a className={css(styles.navText)}> Home </a>
                    </Link>
                </li>

                <li className={css(styles.navItem, styles.responsiveSmall)}>
                    <Link href={'/'}>
                        <a className={css(styles.navText)}> Product </a>
                    </Link>
                </li>

                <li className={css(styles.navItem, styles.responsiveSmall)}>
                    <Link href={'/'}>
                        <a className={css(styles.navText)}> About </a>
                    </Link>
                </li>

                <li className={css(styles.navItem)}>
                    <Link href={'/'}>
                        <a className={css(styles.navText)}> Contact </a>
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
    navItem: {
        padding: 6,
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
        backgroundColor: 'rgb(0 0 0 / 0%)',

    },
    navDrawerPaper: {
        marginTop: 30,
        backgroundColor: color.superDark,
        height: '100%',

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
