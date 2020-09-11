import Head from 'next/head'
import Header from '../components/header'
import { css, withStyles } from 'react-with-styles'

const Home = ({ styles }) => (
    <>
        <Head>
            <title>My Web Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />

        <h1 {...css(styles.title)} >Hellow World</h1>
    </>
)


export default withStyles(( {color} ) => ({
    title:{
        color: color.primary
    },
}))(Home) 