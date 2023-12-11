import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { Card, Form, Button } from "semantic-ui-react";

export default function Home() {
    return (
        <>
            <section>
                <Hero imageURL="/homehero.jpeg" />
                <div className={styles.heroOverlayContainer}>
                    <div className={styles.heroTextContainer}>
                        <h1>Hogwarts FriendBook</h1>
                        <h3>Please create your account below</h3>
                        <div className={styles.accountCreationFromContainer}>
                            <Card centered>
                                <Form>
                                    <Form.Field>
                                        <label>First Name</label>
                                        <input placeholder="First Name" />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>House</label>
                                        <input placeholder="Gryffindor, Hufflepuff, Ravenclaw, Slytherin..." />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Ancestry</label>
                                        <input placeholder="pure-blood, half-blood, muggleborn" />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Patronus</label>
                                        <input placeholder="Stag, Doe, Phoenix, Unicorn..." />
                                    </Form.Field>
                                </Form>
                            </Card>
                        </div>
                    </div>
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
                                <div className={styles.bannerOverlay}></div>
                                <h4>Hufflepuff</h4>
                            </div>
                        </Link>
                        <Link
                            className={styles.houseContainer}
                            href="/houses/ravenclaw"
                        >
                            <div
                                className={`${styles.banner} ${styles.ravenclaw}`}
                            >
                                <div className={styles.overlay}></div>
                                <h4>Ravenclaw</h4>
                            </div>
                        </Link>
                        <Link
                            className={styles.houseContainer}
                            href="/houses/slytherin"
                        >
                            <div
                                className={`${styles.banner} ${styles.slytherin}`}
                            >
                                <div className={styles.overlay}></div>
                                <h4>Slytherin</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
