import React from 'react'
import styles from './HeaderMenu.module.css'

function HeaderMenu() {
    return (
        <main className={styles.container}>
            <div className="div">
                <img src="/iconInstagram.svg" alt="Shopping Logo" className={styles.logo} />
            </div>

            <div className={styles.searchContainer}>
                <input type="text"/>
                <img src="/iconShopping.svg" alt="Shopping Logo" className={styles.logo} />
            </div>
        </main>
    )
}
export { HeaderMenu }