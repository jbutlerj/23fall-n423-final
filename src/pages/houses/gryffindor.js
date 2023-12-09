import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";
import { Grid, Button } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function Gryffindor() {
    const [gryffindor, setGryffindor] = React.useState([]);
    const appState = useAppState();

    // console.log(appState);

    function getWizardDetails() {
        fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({ gryffindor: r });
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
                <Hero imageURL="/gryffindorhero.jpeg" callout="Gryffindor" />
                <Button
                    content="Load Wizards"
                    icon="sync"
                    color="blue"
                    onClick={getWizardDetails}
                />
            </section>
            <section className={styles.houseGrid}>
                <Grid centered columns="4">
                    {appState.gryffindor.map((wizardImage) => {
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
