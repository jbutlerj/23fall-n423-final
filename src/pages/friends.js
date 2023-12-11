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
    console.log(appState.friends);

    return (
        <>
            <section className="hero">
                <Hero
                    imageURL="/friendshero.jpg"
                    headerText="My Friends"
                    attributes="Below are all of the wizards you've added as friends."
                />
            </section>
            <section className={styles.friendGridContainer}>
                <div className={styles.friendGrid}>
                    {appState.friends.map((wizard) => {
                        return (
                            <>
                                <Grid.Column>
                                    {
                                        // if this statement
                                        wizard.image ? (
                                            // true - then do this
                                            <>
                                                <FriendInfo
                                                    key={wizard.id}
                                                    src={wizard.image}
                                                    name={wizard.name}
                                                    onClickInfo={() =>
                                                        router.push(
                                                            `/friends/${wizard.id}`
                                                        )
                                                    }
                                                />
                                            </>
                                        ) : (
                                            // false - else do this
                                            <>
                                                <FriendInfo
                                                    key={wizard.id}
                                                    src="/nopicfound.jpeg"
                                                    name={wizard.name}
                                                    onClickInfo={() =>
                                                        router.push(
                                                            `/friends/${wizard.id}`
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
                </div>
            </section>
        </>
    );
}
