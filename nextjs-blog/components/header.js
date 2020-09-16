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

const Header = ({ styles }) => {

    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");

    console.log(screen.width)
    
    const rootRef = useRef(null);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                onClose={handleClose} >
                <List>
                    <ListItem button>
                        <Link href={'/'}>
                            <a target="_blank" className={css(styles.navText)}> Home </a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={'/'}>
                            <a className={css(styles.navText)}> Product </a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={'/'}>
                            <a className={css(styles.navText)}> About </a>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>

            <ul className={css(styles.navBar)}>

                <li className={css(styles.navItem, styles.dropMenu)}>
                    <Link href={'/'}>
                        <a onClick={handleOpen}>
                            <img src="/dropMenuWhite.svg" alt="dropMenu" />
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



export default withStyles(({ color, font, breakpoint, screen }) => ({
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
        marginTop: 30,


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
    navDrawerRoot:{
        position:'flex !important',

        overflow: 'scroll',
        overflowX:'hidden',
        backgroundColor:'none'
    },
    navDrawerPaper: {
        marginTop: 30,
        backgroundColor: color.dark,
        height:'100%',

    }
}))(Header)
