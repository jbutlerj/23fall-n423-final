import React from "react";
import useAppState from "@/useHooks/useAppState";
import { Grid } from "semantic-ui-react";
import FriendInfo from "@/components/FriendInfo";
import { useRouter } from "next/router";
import Hero from "@/components/Hero";
import styles from "@/styles/Friends.module.scss";

export default function Friends() {
    const router = useRouter();
    const appState = useAppState();
    console.log(appState);

    return (
        <>
            <section className={styles.heroSection}>
                <Hero imageURL="/friendshero.jpg" callout="Friends" />
            </section>
            <Grid>
                <Grid.Row columns="5">
                    {appState.friends.map((wizardImage) => {
                        return (
                            <FriendInfo
                                key={wizardImage.id}
                                src={wizardImage.image}
                                onClick={() =>
                                    router.push(`/friends/${wizardImage.id}`)
                                }
                            />
                        );
                    })}
                </Grid.Row>
            </Grid>
        </>
    );
}
