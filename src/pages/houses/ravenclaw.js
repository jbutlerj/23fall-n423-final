import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";

export default function Ravenclaw() {
    return (
        <>
            <HouseHero imageURL="/ravenclawhero.jpeg" callout="Ravenclaw" />
        </>
    );
}
