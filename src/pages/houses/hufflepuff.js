import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";
import { Grid, Button } from "semantic-ui-react";

import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function Hufflepuff() {
    const [hufflepuff, setHufflepuff] = React.useState([]);
    const appState = useAppState();

    // console.log(appState);

    function getWizardDetails() {
        fetch(`https://hp-api.onrender.com/api/characters/house/hufflepuff`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({ hufflepuff: r });
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
                <Hero imageURL="/hufflepuffhero.jpeg" callout="Hufflepuff" />
                <Button
                    content="Load Wizards"
                    icon="sync"
                    color="blue"
                    onClick={getWizardDetails}
                />
            </section>
            <section className={styles.houseGrid}>
                <Grid centered columns="5">
                    {appState.hufflepuff.map((wizardImage) => {
                        return (
                            <>
                                <Grid.Column>
                                    {
                                        // if this statement
                                        wizardImage.image ? (
                                            // true - then do this
                                            <>
                                                <WizardImage
                                                    key={wizardImage.id}
                                                    src={wizardImage.image}
                                                    name={wizardImage.name}
                                                    onClick={() =>
                                                        saveFriend(wizardImage)
                                                    }
                                                />
                                            </>
                                        ) : (
                                            // false - else do this
                                            <>
                                                <WizardImage
                                                    key={wizardImage.id}
                                                    src="/nopicfound.jpeg"
                                                    name={wizardImage.name}
                                                    onClick={() =>
                                                        saveFriend(wizardImage)
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
