import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";
import { Grid } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function ravenclaw() {
    const [ravenclaw, setRavenclaw] = React.useState([]);
    const appState = useAppState();

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
                <Hero imageURL="/ravenclawhero.jpeg" callout="Ravenclaw" />
            </section>
            <section className={styles.houseGrid}>
                <Grid centered columns="4">
                    {appState.ravenclaw.map((wizardImage) => {
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
