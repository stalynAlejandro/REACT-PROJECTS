import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { StyleSheet, css } from 'aphrodite'
import { withStyles } from 'react-with-styles'
const Home = ({ styles }) => (
    <div className={css(styles.container)}>
        <Head>
            <title>My Web Page</title>
            <link rel="icon" href="/primaryLogo.svg" />
        </Head>

        <Header/>

        <div className={css(styles.gridContainer)}>
            <div className={css(styles.gridItem)}>
                <h1> item </h1>
            </div>
            <div className={css(styles.gridItem)}>
                <h1> item </h1>
            </div>
            <div className={css(styles.separator)}> </div>
        </div>

        <div className={css(styles.gridCard)}>
            <div className={css(styles.card)}>
                <h1> item </h1>
            </div>

            <div className={css(styles.card)}>
                <h1> item </h1>
            </div>

            <div className={css(styles.card)}>
                <h1> item </h1>
            </div>

            <div className={css(styles.card)}>
                <h1> item </h1>
            </div>
        </div>
        
        <Footer />
    </div>
)

export default withStyles(({ color, breakpoint }) => ({
    container: {
        dispaly:'block',
        margin: 0,  
    },
    separator:{
        border:'5px solid black'
    },
    gridContainer:{
        display:'grid',
        gridTemplateRows:'500px 400px',
        padding:10,
        gridGap: 15,
    },
    gridItem:{
        backgroundColor: color.gray,
        border: '2px solid black',
    },
    gridCard:{
        display:'grid',
        padding: 10,
        gridGap: 15,
        gridTemplateRows:'250px 250px',
        gridTemplateColumns:'1fr 1fr',
        [breakpoint.small]:{
            gridTemplateRows:'250px 250px 250px 250px',
            gridTemplateColumns:'1fr',
        },
    },
    card:{
        backgroundColor: color.gray,
        border: '2px solid black',
    },

}))(Home)