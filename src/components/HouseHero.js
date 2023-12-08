import React from "react";
import styles from "@/styles/HouseHero.module.scss";

export default function HouseHero(props) {
    return (
        <>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${props.imageURL})` }}
            >
                <h1>{props.callout}</h1>
            </div>
        </>
    );
}
