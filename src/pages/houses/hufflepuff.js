import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";
import { Grid } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function Hufflepuff() {
    const [hufflepuff, setHufflepuff] = React.useState([]);
    const appState = useAppState();

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
                <Hero imageURL="/hufflepuffhero.jpeg" callout="Hufflepuff" />
            </section>
            <section className={styles.houseGrid}>
                <Grid centered columns="4">
                    {appState.hufflepuff.map((wizard) => {
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
