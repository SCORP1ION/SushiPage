import Image from "next/image"
import styles from "./page.module.css"

export default function location() {
    return (
        <>
            <section className={styles.sectionContainer}>
                <div className={styles.containerSecondary}>

                    <div className={styles.texts}>
                        <span className={styles.sectionTag}>
                            CONTACT & HOURS
                        </span>
                        <h2 className={styles.title}>
                            Visit OMAKASE
                        </h2>

                        <div className={styles.infoBlock}>
                            <span className={styles.spans}>Hours</span>
                            <p className={styles.info}> 12:00 PM - 9:00 PM </p>
                        </div>

                        <div className={styles.infoBlock}>
                            <span className={styles.spans}>Contact</span>
                            <p className={styles.info}>+52 322 111 4272</p>
                        </div>

                        <div className={styles.infoBlock}>
                            <span className={styles.spans}>Location</span>
                            <p className={styles.info}>Puerto Vallarta, Jaliso</p>
                        </div>
                    </div>

                    <div className={styles.imgContainer}>
                        <Image
                            src={"/img/imgUbication.png"}
                            width={480}
                            height={480}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}