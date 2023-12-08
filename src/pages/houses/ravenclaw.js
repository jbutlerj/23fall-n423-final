import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";
import { Grid, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function ravenclaw() {
    const [ravenclaw, setRavenclaw] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    console.log(appState);

    function getWizardDetails() {
        fetch(`https://hp-api.onrender.com/api/characters/house/ravenclaw`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({ ravenclaw: r });
                console.log(ravenclaw);
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
            <section>
                <HouseHero imageURL="/ravenclawhero.jpeg" callout="Ravenclaw" />
            </section>
            <section className="houseGrid">
                <Button
                    content="Load Wizards"
                    icon="sync"
                    color="blue"
                    onClick={getWizardDetails}
                />
                <Grid>
                    <Grid.Row columns="5">
                        {appState.ravenclaw.map((wizardImage) => {
                            return (
                                <WizardImage
                                    key={wizardImage.id}
                                    src={wizardImage.image}
                                    onClick={() => saveFriend(wizardImage)}
                                />
                            );
                        })}
                    </Grid.Row>
                </Grid>
            </section>
        </>
    );
}
