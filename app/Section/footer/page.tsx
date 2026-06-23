import styles from './page.module.css'

export default function footer() {
    return (
        <>
            <footer className={styles.footerContainer}>
                <div className={styles.topSection}>

                    <div className={styles.brand}>
                        <h2 className={styles.title}>OMAKASE</h2>
                        <p className={styles.littleDescription}>Elevating the traditional sushi experience through precision, seasonality, and grace.</p>
                    </div>
                    <div className={styles.links}>
                        <h3>Explore</h3>
                        <a href="#menu">Menu</a>
                        <a href="#about">About</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className={styles.contact}>
                        <h3>Contact</h3>
                        <p>+52 322 111 4272</p>
                        <p>Puerto Vallarta, Jalisco</p>
                    </div>
                </div>
                <div className={styles.linear}></div>
                <div className={styles.bottomSection}>
                    <p className={styles.reserved}>
                        &copy; 2026 OMAKASE. ALL RIGTHS RESERVED
                    </p>
                </div>
            </footer>
        </>
    )
}