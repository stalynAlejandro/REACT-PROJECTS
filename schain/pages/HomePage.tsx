import React from 'react'
import Head from 'next/head'
import { HeaderMenu, Footer } from '../components'
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderMenu />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    SCHAIN
                </h1>
            </main>

            <Footer />
        </div>

    )
}

export default HomePage