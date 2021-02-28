import React from 'react'
import styles from './HeaderMenu.module.css'

function HeaderMenu() {
    return (
        <main className={styles.container}>
            <div className="div">
                <img src="icons/iconInstagram.svg" alt="Shopping Logo" className={styles.logo} />
            </div>

            <div className={styles.searchContainer}>
                <input className={styles.searchInput} type="text"/>
                <img src="icons/iconShopping.svg" alt="Shopping Logo" className={styles.logo} />
            </div>
        
        </main>
    )
}
export { HeaderMenu }