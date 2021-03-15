import React from 'react'
import styles from './Vibes.module.css'
import Image from 'next/image'
import { AnimateKeyframes } from 'react-simple-animate'

const IndieVibes = () => {
    return (
        <div className={styles.vibeContainer}>
            <AnimateKeyframes play duration={3} keyframes={["opacity: 0", "opacity:1"]}>
                <h2 className={styles.vibeTitle}>
                    IndieVibes
                </h2>
            </AnimateKeyframes>
        </div>
    )
}

const UrbanVibes = () => {
    return (
        <div className={styles.vibeContainer}>
            <AnimateKeyframes play duration={3} keyframes={["opacity: 0", "opacity:1"]}>
                <h2 className={styles.vibeTitle}>
                    UrbanVibes
                </h2>
            </AnimateKeyframes>
        </div>
    )
}

const SumerVibes = () => {
    return (
        <div className={styles.vibeContainer}>
            <AnimateKeyframes play duration={3} keyframes={["opacity: 0", "opacity:1"]}>
                <h2 className={styles.vibeTitle}>
                    SumerVibes
                </h2>
            </AnimateKeyframes>
        </div>
    )
}


function Vibes() {
    return (
        <div className={styles.container}>
            <SumerVibes />
            <UrbanVibes />
            <IndieVibes />
        </div>
    )
}
export { Vibes }