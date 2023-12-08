import React from "react";
import HouseHero from "@/components/HouseHero";
import styles from "@/styles/Houses.module.scss";
import { Grid, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function slytherin() {
    const [slytherin, setSlytherin] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    console.log(appState);

    function getWizardDetails() {
        fetch(`https://hp-api.onrender.com/api/characters/house/slytherin`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({ slytherin: r });
                console.log(slytherin);
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
                <HouseHero imageURL="/slytherinhero.jpeg" callout="Slytherin" />
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
                        {appState.slytherin.map((wizardImage) => {
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
