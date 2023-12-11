import React from "react";
import Hero from "@/components/Hero";
import { Grid, Card } from "semantic-ui-react";
import WizardCard from "@/components/WizardCard";
import { useRouter } from "next/router";
import useAppState from "@/useHooks/useAppState";

export default function ravenclaw() {
    const [ravenclaw, setRavenclaw] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    // console.log(appState);

    React.useEffect(() => {
        if (
            appState.ravenclaw.length === 0 &&
            appState.ravenclawLoading === false
        ) {
            // console.log("test");
            getWizardDetails();
        }
    });

    function getWizardDetails() {
        fetch(`https://hp-api.onrender.com/api/characters/house/ravenclaw`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({
                    ravenclaw: r,
                    ravenclawLoading: false,
                });
                // console.log(ravenclaw);
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
                    imageURL="/ravenclawhero.jpeg"
                    headerText="Ravenclaw"
                    attributes="Intelligence, Learning, Wisdom, and Wit"
                />
            </section>
            <section className="gridContainer houses">
                <Grid.Column>
                    <Card.Group itemsPerRow={4} stackable doubling>
                        {appState.ravenclaw.map((wizard) => {
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
