import React from "react";
import styles from "@/styles/HouseGrid.module.scss";
import { Grid, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import useAppState from "@/useHooks/useAppState";
import WizardImage from "@/components/WizardImage";

export default function HouseGrid(props) {
    const [wizardDetails, setWizardDetails] = React.useState([]);
    const appState = useAppState();
    const router = useRouter();

    console.log(appState);

    function getWizardDetails() {
        const housePath = router.asPath;
        const house = housePath.replace("/houses/", "");
        console.log(house);

        fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
            .then((r) => r.json())
            .then((r) => {
                appState.updateAppState({ wizardDetails: r });
                console.log(wizardDetails);
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
            <Button
                content="Load Wizards"
                icon="sync"
                color="blue"
                onClick={getWizardDetails}
            />
            <Grid>
                <Grid.Row columns="5">
                    {appState.wizardDetails.map((wizardImage) => {
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
        </>
    );
}
