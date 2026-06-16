import styles from "./page.module.css";
import Image from "next/image";

const sushi = [
  {
    ruta: "/img/CosmoEmpanizado.png",
    alt: "Cosmo Empanizado",
    description: "Arroz y empanizado por fuera-Alga, pepino, aguacate, queso crema y camaron por dentro",
    precio: "$110"
  },
  {
    ruta: "/img/FiladelfiaRoll.png",
    alt: "Filadelfia Roll",
    description: "Arroz y queso crema por fuera-Alga, pepino, aguacate y camaron por dentro",
    precio: "$120"
  },
  {
    ruta: "/img/CaliforniaRoll.png",
    alt: "Teppayaki De Camaron",
    description: "Arroz y ajonjolí por fuera-alga, pepino, aguacate y camaron por dentro",
    precio: "$100"
  }
]

export default function sushis() {
  return (
    <>
      <section className={styles.container} id="menu">
        <div className={styles.primarContainer}>
          <div className={styles.textsContainer}>
            <h1 className={styles.creations}>Signature Creations</h1>
            <div className={styles.separator}></div>
            <p className={styles.selects}>
              Select masterpieces from Chef Fernando seasonal repertoire
            </p>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {
            sushi.map((sushis) => {
              return (
                <div className={styles.card} key={sushis.alt}>
                  <Image
                    className={styles.cardImage}
                    src={sushis.ruta}
                    width={380}
                    height={380}
                    alt={sushis.alt}
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.texts}>
                      <p className={styles.name}>{sushis.alt}</p>
                      <p className={styles.precio}>{sushis.precio}</p>
                    </div>
                    <p className={styles.description}>
                      {sushis.description}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
}
