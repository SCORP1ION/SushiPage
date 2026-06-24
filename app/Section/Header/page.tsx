"use client"
import styles from "./page.module.css"
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <header className={styles.container}>
                <h1 className={styles.nameRestaurant}>OMAKASE</h1>
                <button className={styles.menuBottom}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "X" : "☰"}
                </button>
                <nav className={`${styles.navContainer} ${menuOpen ? styles.active : "" }`}>
                    <a href="#home" className={styles.navA}>Home</a>
                    <a href="#menu" className={styles.navA}>Menu</a>
                    <a href="#about" className={styles.navA}>About</a>
                    <a href="#galery" className={styles.navA}>Galery</a>
                    <a href="#contact" className={styles.navA}>Contact</a>
                </nav>
                <div className={styles.containerReserve}>
                    <a href="" className={styles.Reserve}>Reserve table</a>
                </div>
            </header>
        </>
    );
}