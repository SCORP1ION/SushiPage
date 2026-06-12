import styles from "./page.module.css"

export default function Hero() {
    return (
        <>
            <section className={styles.heroContainer}>
                <div className={styles.overLay}>
                    <div className={styles.container}>
                        <h3 className={styles.tradition}>
                            TRADITION MEETS ARTISTRY
                        </h3>
                        <h1 className={styles.authentic}>
                            Authentic Japanese Sushi Experience
                        </h1>
                        <p className={styles.littleDescription}>
                            Discover the artistry of seasonal ingredients and masterfully crafted sushi in an intimate, luxury setting.
                        </p>
                        <div className={styles.buttons}>
                            <button className={styles.primaryButton}>
                                View Menu
                            </button>
                            <button className={styles.secondaryButton}>
                                Reserve table
                            </button>
                        </div>
                        <div className={styles.separator}></div>
                    </div>
                </div>
            </section>
        </>
    );
}