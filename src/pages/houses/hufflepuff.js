import React from "react";
import HouseHero from "@/components/HouseHero";
import HouseGrid from "@/components/HouseGrid";
import styles from "@/styles/Houses.module.scss";

export default function Hufflepuff() {
    return (
        <>
            <section>
                <HouseHero
                    imageURL="/hufflepuffhero.jpeg"
                    callout="Hufflepuff"
                />
            </section>
            <section className="houseGrid">
                <HouseGrid />
            </section>
        </>
    );
}
