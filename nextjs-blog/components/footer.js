import { css } from 'aphrodite'
import { withStyles } from 'react-with-styles'

const Footer = ({ styles, ...props }) => {
    return (
        <footer className={css(styles.footer)}>
            <p className={css(styles.text)} >
                &copy; 2020 Inc.  &middot; Made by Stalyn Alejandro with ReactJs + NextJs &middot;
                <a target='_blank' href="https://github.com/stalynAlejandro">Github</a>
            </p>
        </footer>
    )
}

export default withStyles(({ color, breakpoint }) => ({
    footer: {
        display: 'block',
        backgroundColor: color.gray,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        marginBottom: '-999px',
        height: 100,

    },
    text: {
        marginTop: 40,
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        textDecoration: 'none',
        color: color.dark,

        ':hover': {
            color: color.superDark,
            fontWeight: 'bold',
        },
    },
}))(Footer)
