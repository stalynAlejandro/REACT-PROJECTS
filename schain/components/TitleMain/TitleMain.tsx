import React from 'react'
import styles from './TitleMain.module.css'
import { AnimateKeyframes } from 'react-simple-animate'

interface ITitleMain {
    title: string
}

function TitleMain({ title }: ITitleMain) {
    return (
        <main>
            <AnimateKeyframes
                play
                duration={3}
                keyframes={["opacity: 0", "opacity: 1"]}>
                <a href={'/HomePage'}>
                    <h1 className={styles.title}>
                    {title}
                    </h1>
                </a>
            </AnimateKeyframes>
        </main>
    )
}
export { TitleMain }