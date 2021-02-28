import React from 'react'
import styles from './TitleMain.module.css'

interface ITitleMain{
    title: string
}

function TitleMain({title} : ITitleMain) {
    return (
        <main className={styles.main}>
        <h1 className={styles.title}>
            {title}
        </h1>
    </main>
    )
}
export {TitleMain}