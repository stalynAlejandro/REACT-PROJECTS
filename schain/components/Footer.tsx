import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
            >
                SCHAIN{' '}
                <img src="icons/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    )
}

export { Footer }