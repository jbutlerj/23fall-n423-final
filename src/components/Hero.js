import React from "react";
import styles from "@/styles/Hero.module.scss";

export default function Hero(props) {
    return (
        <>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${props.imageURL})` }}
            ></div>
            <div className={styles.callout}>
                <h1>{props.callout}</h1>
            </div>
        </>
    );
}
