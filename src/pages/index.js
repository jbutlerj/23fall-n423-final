import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.scss";

export default function Home() {
    return (
        <>
            <section>
                <Hero imageURL="/homehero.jpeg" callout="Hogwarts FriendBook" />
            </section>
        </>
    );
}
