import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { css } from 'aphrodite'

const About = () => (
    <>
        <Head>
            <title>My Web Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />

        <h1> About Page </h1>

        <Footer />
    </>
)


export default About