import React from "react";
import Hero from "@/components/Hero";
import { Grid, Card } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import { useRouter } from "next/router";
import WizardCard from "@/components/WizardCard";

export default function slytherin() {
    const [slytherin, setSlytherin] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    // console.log(appState);

    React.useEffect(() => {
        if (
            appState.slytherin.length === 0 &&
            appState.slytherinLoading === false
        ) {
            // console.log("test");
            getWizardDetails();
        }
    });

    function getWizardDetails() {
        fetch(`https://hp-api.onrender.com/api/characters/house/slytherin`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({
                    slytherin: r,
                    slytherinLoading: false,
                });
                // console.log(slytherin);
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
                    imageURL="/slytherinhero.jpeg"
                    headerText="Slytherin"
                    attributes="Ambition, Cunning, Leadership, and Resourcefulness"
                />
            </section>
            <section className="gridContainer houses">
                <Grid.Column>
                    <Card.Group itemsPerRow={4} stackable doubling>
                        {appState.slytherin.map((wizard) => {
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
