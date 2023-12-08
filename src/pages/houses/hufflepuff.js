import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";

export default function Hufflepuff() {
    return (
        <>
            <HouseHero imageURL="/hufflepuffhero.jpeg" callout="Hufflepuff" />
        </>
    );
}
