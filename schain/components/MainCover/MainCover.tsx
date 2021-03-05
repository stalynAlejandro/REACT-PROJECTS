import React from 'react'
import Image from 'next/image'
import styles from './MainCover.module.css'

function MainCover() {
    return (
        <div className={styles.container}>
                <Image src={'/images/bussiness.png'} alt={"Picture of a bussiness"} layout={'intrinsic'} width={1400} height={150}/>
                <Image src={'/images/banana.png'} alt={"Picture of a bannana"} layout={'intrinsic'} width={1400} height={500} />
        </div>
    )
}

export { MainCover }