import React from "react";
import HouseHero from "@/components/HouseHero";
import HouseGrid from "@/components/HouseGrid";
import styles from "@/styles/Houses.module.scss";

export default function Ravenclaw() {
    return (
        <>
            <section>
                <HouseHero imageURL="/ravenclawhero.jpeg" callout="Ravenclaw" />
            </section>
            <section className="houseGrid">
                <HouseGrid />
            </section>
        </>
    );
}
