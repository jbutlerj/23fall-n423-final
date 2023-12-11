import React from "react";
import Hero from "@/components/Hero";
import { Grid, Card } from "semantic-ui-react";
import WizardCard from "@/components/WizardCard";
import { useRouter } from "next/router";
import useAppState from "@/useHooks/useAppState";

export default function Hufflepuff() {
    const [hufflepuff, setHufflepuff] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    // console.log(appState);

    React.useEffect(() => {
        if (
            appState.hufflepuff.length === 0 &&
            appState.hufflepuffLoading === false
        ) {
            // console.log("test");
            getHouseRoster();
        }
    });

    function getHouseRoster() {
        fetch(`https://hp-api.onrender.com/api/characters/house/hufflepuff`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({
                    hufflepuff: r,
                    hufflepuffLoading: false,
                });
                // console.log(hufflepuff);
            })

            .catch((e) => {
                console.warn(e);
            });
    }

    function saveFriend(selectedFriend) {
        appState.updateAppState({
            friends: appState.friends.concat(selectedFriend),
        });
    }

    return (
        <>
            <section className="hero">
                <Hero
                    imageURL="/hufflepuffhero.jpeg"
                    headerText="Hufflepuff"
                    attributes="Work, Patience, Justice, and Loyalty"
                />
            </section>
            <section className="gridContainer houses">
                <Grid.Column>
                    <Card.Group itemsPerRow={4} stackable doubling>
                        {appState.hufflepuff.map((wizard) => {
                            return (
                                <>
                                    {
                                        // if this statement
                                        wizard.image ? (
                                            // true - then do this
                                            <>
                                                <WizardCard
                                                    key={wizard.id}
                                                    src={wizard.image}
                                                    name={wizard.name}
                                                    onClickAdd={() =>
                                                        saveFriend(wizard)
                                                    }
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
                                                <WizardCard
                                                    key={wizard.id}
                                                    src="/nopicfound.jpeg"
                                                    name={wizard.name}
                                                    onClickAdd={() =>
                                                        saveFriend(wizard)
                                                    }
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
