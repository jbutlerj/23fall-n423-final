import React from "react";
import styles from "@/styles/components/Hero.module.scss";

export default function Hero(props) {
    return (
        <>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${props.imageURL})` }}
            ></div>
            <div className={styles.container}>
                <h1 className={styles.houseName}>{props.headerText}</h1>
                <h3 className={styles.houseAttributes}>{props.attributes}</h3>
            </div>
        </>
    );
}
