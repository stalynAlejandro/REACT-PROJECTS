import Head from 'next/head'
import Header from '../components/header'
import { StyleSheet, css } from 'aphrodite'
import { withStyles } from 'react-with-styles'

const Home = ({ styles }) => (
    <div className={css(styles.container)}>
        <Head>
            <title>My Web Page</title>
            <link rel="icon" href="/primaryLogo.svg" />
        </Head>

        <Header/>

        <h1>Hello World!</h1>

    </div>
)



export default withStyles(() => ({
    container: {
        dispaly:'block',
        margin: 0,  
    },
}))(Home)