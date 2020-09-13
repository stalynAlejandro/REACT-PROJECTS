import Head from 'next/head'
import Header from '../components/header'
import { css } from 'aphrodite'
import styles from '../style/styles'

const About = () => (
    <>
        <Head>
            <title>My Web Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />

        <h1 {...css(styles.title)} > About Page </h1>
    </>
)


export default About