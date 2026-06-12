import styles from "./page.module.css"

export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <h1 className={styles.nameRestaurant}>OMAKASE</h1>
                <nav className={styles.navContainer}>
                    <a href="" className={styles.navA}>Home</a>
                    <a href="" className={styles.navA}>Menu</a>
                    <a href="" className={styles.navA}>About</a>
                    <a href="" className={styles.navA}>Galery</a>
                    <a href="" className={styles.navA}>Contact</a>
                </nav>
                <div className={styles.containerReserve}>
                    <a href="" className={styles.Reserve}>Reserve table</a>
                </div>
            </header>
        </>
    );
}