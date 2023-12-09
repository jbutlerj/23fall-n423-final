import React from "react";
import useAppState from "@/useHooks/useAppState";
import { Grid } from "semantic-ui-react";
import FriendInfo from "@/components/FriendInfo";
import { useRouter } from "next/router";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";

export default function Friends() {
    const router = useRouter();
    const appState = useAppState();
    console.log(appState);

    return (
        <>
            <section className="hero">
                <Hero imageURL="/friendshero.jpg" callout="My Friends" />
            </section>
            <section className={styles.houseGrid}>
                <Grid centered columns="4">
                    {appState.friends.map((wizardImage) => {
                        return (
                            <>
                                <Grid.Column>
                                    {
                                        // if this statement
                                        wizardImage.image ? (
                                            // true - then do this
                                            <>
                                                <FriendInfo
                                                    key={wizardImage.id}
                                                    src={wizardImage.image}
                                                    name={wizardImage.name}
                                                    onClick={() =>
                                                        router.push(
                                                            `/friends/${wizardImage.id}`
                                                        )
                                                    }
                                                />
                                            </>
                                        ) : (
                                            // false - else do this
                                            <>
                                                <FriendInfo
                                                    key={wizardImage.id}
                                                    src="/nopicfound.jpeg"
                                                    name={wizardImage.name}
                                                    onClick={() =>
                                                        router.push(
                                                            `/friends/${wizardImage.id}`
                                                        )
                                                    }
                                                />
                                            </>
                                        )
                                    }
                                </Grid.Column>
                            </>
                        );
                    })}
                </Grid>
            </section>
        </>
    );
}
