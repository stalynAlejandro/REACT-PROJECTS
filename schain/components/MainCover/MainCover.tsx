import React from 'react'
import Image from 'next/image'
import { AnimateKeyframes } from 'react-simple-animate'
import styles from './MainCover.module.css'

function MainCover() {
    return (
        <div className={styles.container}>
            <AnimateKeyframes play duration={3} keyframes={["opacity: 0", "opacity:1"]}>
                <Image src={'/images/discount.png'} alt={"Picture of a bussiness"} layout={'intrinsic'} width={1400} height={150} />
            </AnimateKeyframes>
            <AnimateKeyframes play duration={1} keyframes={["opacity: 0", "opacity:1"]}>
                <Image src={'/images/frontImage.png'} alt={"Picture of a bannana"} layout={'intrinsic'} width={1400} height={500} />
            </AnimateKeyframes>
        </div>
    )
}

export { MainCover }