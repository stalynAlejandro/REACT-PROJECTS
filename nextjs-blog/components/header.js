import Link from 'next/link'
import Modal from '@material-ui/core/Modal';
import { StyleSheet, css } from 'aphrodite'
import { withStyles } from 'react-with-styles'
import { useState, useRef } from 'react'


const Header = ({ styles }) => {

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

            <div className={css(styles.root)} ref={rootRef}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={css(styles.paper)}>
                        <h2 id="server-modal-title">Menu</h2>
                        <p id="server-modal-description"> Options </p>
                        <p id="server-modal-description"> Options </p>
                        <p id="server-modal-description"> Options </p>

                    </div>
                </Modal>
            </div>

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



export default withStyles(({ color, font, breakpoint }) => ({
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

    root: {

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position:'absolute',
        width: '50%',
        border: '2px solid #000',
        backgroundColor:'#fff'
    },


}))(Header)
