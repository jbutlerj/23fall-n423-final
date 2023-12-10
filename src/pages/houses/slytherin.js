import React from "react";
import Hero from "@/components/Hero";
import styles from "@/styles/Houses.module.scss";
import { Grid } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function slytherin() {
    const [slytherin, setSlytherin] = React.useState([]);
    const appState = useAppState();

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
                <Hero imageURL="/slytherinhero.jpeg" callout="Slytherin" />
            </section>
            <section className={styles.houseGrid}>
                <Grid centered columns="4">
                    {appState.slytherin.map((wizard) => {
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
