import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section>
                <Hero imageURL="/homehero.jpeg" callout="Hogwarts FriendBook" />
                <div className={styles.bannerContainer}>
                    <Link
                        className={styles.houseContainer}
                        href="/houses/gryffindor"
                    >
                        <div
                            className={`${styles.banner} ${styles.gryffindor}`}
                        >
                            <div className={styles.overlay}></div>
                            <h4>Gryffindor</h4>
                        </div>
                    </Link>
                    <Link
                        className={styles.houseContainer}
                        href="/houses/hufflepuff"
                    >
                        <div
                            className={`${styles.banner} ${styles.hufflepuff}`}
                        >
                            <div className={styles.overlay}></div>
                            <h4>Hufflepuff</h4>
                        </div>
                    </Link>
                    <Link
                        className={styles.houseContainer}
                        href="/houses/ravenclaw"
                    >
                        <div className={`${styles.banner} ${styles.ravenclaw}`}>
                            <div className={styles.overlay}></div>
                            <h4>Ravenclaw</h4>
                        </div>
                    </Link>
                    <Link
                        className={styles.houseContainer}
                        href="/houses/slytherin"
                    >
                        <div className={`${styles.banner} ${styles.slytherin}`}>
                            <div className={styles.overlay}></div>
                            <h4>Slytherin</h4>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
