import React from "react";
import useAppState from "@/useHooks/useAppState";
import { Grid } from "semantic-ui-react";
import FriendInfo from "@/components/FriendInfo";
import { useRouter } from "next/router";
import styles from "@/styles/Friends.module.scss";

export default function Friends() {
    const router = useRouter();
    const appState = useAppState();
    console.log(appState);

    return (
        <>
            <h1>Friends</h1>
            <Grid>
                <Grid.Row columns="5">
                    {appState.friends.map((wizardImage) => {
                        return (
                            <FriendInfo
                                key={wizardImage.id}
                                src={wizardImage.image}
                                onClick={() =>
                                    router.push(`/friends/${wizardImage.id}`)
                                }
                            />
                        );
                    })}
                </Grid.Row>
            </Grid>
        </>
    );
}
