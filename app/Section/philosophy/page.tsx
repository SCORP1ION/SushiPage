import styles from "./page.module.css"
import Image from "next/image";

export default function philosophy() {
    return (
        <>
            <section className={styles.sectionContainer} id="about">
                <div className={styles.content}>
                    <div className={styles.leftSide}>
                        <h3 className={styles.philosophy}>
                            THE PHILOSOPHY
                        </h3>
                        <h2 className={styles.mastery}>
                            Mastery in Every Motion
                        </h2>
                        <p className={styles.text}>At OMAKASE, Chef Fernando brings 10 years of experience from Tokyo's Ginza district. His philosophy is rooted in Wabi-sabi --embracing the natural imperfections of the seassons to create perfect harmony on the plate Every grain of rice is seasoned with a proprietary blend of aged red vinegar, and every fish is sourced daily to ensure the highest standard of freshness and flavor</p>
                        <div className={styles.quote}>
                            <p>
                                "The true essence of sushi lies not in what
                                we add, but in what we reveal."
                            </p>
                            <span>— Chef Fernando</span>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <Image
                            src="/img/chef.png"
                            width={480}
                            height={480}
                            alt="Chef Fernando"
                            className={styles.chefImage}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
