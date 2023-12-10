import React from "react";
import styles from "@/styles/Hero.module.scss";

export default function Hero(props) {
    return (
        <>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${props.imageURL})` }}
            ></div>
            <div className={styles.container}>
                <div className={styles.textContainerLeft}>
                    <h1>{props.headerText}</h1>
                    <h4>{props.subheader}</h4>
                    <p>{props.filler}</p>
                </div>
                <div className={styles.textContainerRight}>
                    <h3>{props.attributes}</h3>
                </div>
            </div>
        </>
    );
}
