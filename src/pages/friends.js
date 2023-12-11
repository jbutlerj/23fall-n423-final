import React from "react";
import useAppState from "@/useHooks/useAppState";
import { Grid, Card } from "semantic-ui-react";
import { useRouter } from "next/router";
import FriendCard from "@/components/FriendCard";
import Hero from "@/components/Hero";

export default function Friends() {
    const router = useRouter();
    const appState = useAppState();
    console.log(appState.friends);

    return (
        <>
            <section>
                <Hero imageURL="/friendshero.jpg" headerText="My Friends" />
            </section>
            <section className="gridContainer">
                <Grid.Column>
                    <Card.Group itemsPerRow={4} stackable doubling>
                        {appState.friends.map((wizard) => {
                            return (
                                <>
                                    {
                                        // if this statement
                                        wizard.image ? (
                                            // true - then do this
                                            <>
                                                <FriendCard
                                                    key={wizard.id}
                                                    src={wizard.image}
                                                    name={wizard.name}
                                                    house={wizard.house}
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
                                                <FriendCard
                                                    key={wizard.id}
                                                    src="/nopicfound.jpeg"
                                                    name={wizard.name}
                                                    house={wizard.house}
                                                    onClickInfo={() =>
                                                        router.push(
                                                            `/friends/${wizard.id}`
                                                        )
                                                    }
                                                />
                                            </>
                                        )
                                    }
                                </>
                            );
                        })}
                    </Card.Group>
                </Grid.Column>
            </section>
        </>
    );
}
