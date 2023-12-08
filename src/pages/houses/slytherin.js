import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";

export default function Slytherin() {
    return (
        <>
            <HouseHero imageURL="/slytherinhero.jpeg" callout="Slytherin" />
        </>
    );
}
