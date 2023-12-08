import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";
import HouseGrid from "@/components/HouseGrid";

export default function Gryffindor() {
    return (
        <>
            <section>
                <HouseHero
                    imageURL="/gryffindorhero.jpeg"
                    callout="Gryffindor"
                />
            </section>
            <section className="houseGrid">
                <HouseGrid />
            </section>
        </>
    );
}
