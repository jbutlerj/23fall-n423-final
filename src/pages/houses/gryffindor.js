import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";
import { Grid } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function gryffindor() {
    const [gryffindor, setGryffindor] = React.useState([]);
    const appState = useAppState();

    // console.log(appState);

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
            <section className={styles.houseGrid}>
                <Grid centered columns="4">
                    {appState.gryffindor.map((wizard) => {
                        return (
                            <>
                                <Grid.Column>
                                    {
                                        // if this statement
                                        wizard.image ? (
                                            // true - then do this
                                            <>
                                                <WizardImage
                                                    key={wizard.id}
                                                    src={wizard.image}
                                                    name={wizard.name}
                                                    onClick={() =>
                                                        saveFriend(wizard)
                                                    }
                                                />
                                            </>
                                        ) : (
                                            // false - else do this
                                            <>
                                                <WizardImage
                                                    key={wizard.id}
                                                    src="/nopicfound.jpeg"
                                                    name={wizard.name}
                                                    onClick={() =>
                                                        saveFriend(wizard)
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
