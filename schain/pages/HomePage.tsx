import React from 'react'
import Head from 'next/head'
import { HeaderMenu, Footer, TitleMain, SubHeaderMenu } from '../components'
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="preload" href="/fonts/Gruppo/Gruppo-Regular.ttf" as="font" crossOrigin="" /> 
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderMenu />

            <TitleMain title={"SCHAIN"} />

            <SubHeaderMenu />

            <Footer />
        </div>

    )
}

export default HomePage