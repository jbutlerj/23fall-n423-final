import React from "react";
import HouseHero from "@/components/HouseHero";
import HouseGrid from "@/components/HouseGrid";
import styles from "@/styles/Houses.module.scss";

export default function Slytherin() {
    return (
        <>
            <section>
                <HouseHero imageURL="/slytherinhero.jpeg" callout="Slytherin" />
            </section>
            <section className="houseGrid">
                <HouseGrid />
            </section>
        </>
    );
}
