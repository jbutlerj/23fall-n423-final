import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";

export default function Gryffindor() {
    return (
        <>
            <HouseHero imageURL="/gryffindorhero.jpeg" callout="Gryffindor" />
        </>
    );
}
