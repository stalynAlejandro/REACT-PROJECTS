import Head from 'next/head'
import HomePage from './HomePage'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <HomePage />
        </div>
    )
}