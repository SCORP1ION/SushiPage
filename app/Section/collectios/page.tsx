import styles from './page.module.css'

const Menu = [
    {
        name: "Chefs Tasting Menu",
        description: "A 12-course journey of seassonal flavors",
        price: "$180"
    },
    {
        name: "Imperial Course",
        description: "Rare ingredients & vintage pairing",
        price: "$420"
    },
    {
        name: "Premium Omakase",
        description: "Exquisite selections with truffle & gold",
        price: "$250"
    },
    {
        name: "Botan Experience",
        description: "Focused vegetarian omakase",
        price: "$150"
    }
]

export default function collectios() {
    return (
        <>
            <section className={styles.sectionContainer}>
                <h3 className={styles.collections}>COLLECTIONS</h3>
                <div className={styles.divContainer}>
                    <h1 className={styles.explore}>Explore the menu</h1>
                    <div className={styles.separator}></div>
                    <nav className={styles.navContainer}>
                        <a href="Omakasa" className={styles.textNav}>OMAKASA</a>
                        <a href="Nigiri" className={styles.textNav}>NIGIRI</a>
                        <a href="Sashimi" className={styles.textNav}>SASHIMI</a>
                        <a href="Sake" className={styles.textNav}>SAKE</a>
                    </nav>
                </div>

                <div className={styles.card}>
                    {
                        Menu.map((food) => {
                            return (
                                <div className={styles.cardGrid} key={food.description}>
                                    <div className={styles.texts}>
                                        <h3>{food.name}</h3>
                                        <span>{food.price}</span>
                                    </div>
                                    <span className={styles.descrip}>{food.description}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}