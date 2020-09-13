import Link from 'next/link'
import { StyleSheet, css } from 'aphrodite'
import { withStyles } from 'react-with-styles'

const Header = ({ styles }) => (
    <header className={css(styles.navContainer)}>
        <ul className={css(styles.navBar)}>
            <li className={css(styles.navItem)}>
                <Link href={'/'}>
                    <a className={css(styles.navText)}> Home </a>
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


export default withStyles(({ color, font, breakpoint }) => ({
    navContainer: {
        position: '-webkit-sticky', /* Safari */
        position: 'sticky',
        top: 0,
    },
    navBar: {
        display:'flex',
        flexDirection:'row',
        margin: 0,
        padding: 0,
        backgroundColor: color.dark,
        listStyleType:'none',
        justifyContent:'center',
        alignItems:'left'
    },
    navItem: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    navText: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        textDecoration: 'none',
        color: color.white,

        [breakpoint.medium]: {
            color: color.white,
        },

        ':hover': {
            color: color.primary,
        },

    },

}))(Header)