import React from "react";
import Hero from "@/components/Hero";
import { Grid, Card } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import { useRouter } from "next/router";
import WizardCard from "@/components/WizardCard";

export default function gryffindor() {
    const [gryffindor, setGryffindor] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    React.useEffect(() => {
        if (
            appState.gryffindor.length === 0 &&
            appState.gryffindorLoading === false
        ) {
            // console.log("test");
            getHouseRoster();
        }
    });

    function getHouseRoster() {
        fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({
                    gryffindor: r,
                    gryffindorLoading: false,
                });
                // console.log(gryffindor);
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
                    imageURL="/gryffindorhero.jpeg"
                    headerText="Gryffindor"
                    attributes="Courage, Bravery, Nerve, and Chivalry"
                />
            </section>
            <section className="gridContainer">
                <Grid.Column>
                    <Card.Group itemsPerRow={4} stackable doubling>
                        {appState.gryffindor.map((wizard) => {
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
