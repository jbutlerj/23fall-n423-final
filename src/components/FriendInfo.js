import React from "react";
import { Popup, Image, Button, Grid } from "semantic-ui-react";
import styles from "@/styles/FriendInfo.module.scss";
import useAppState from "@/useHooks/useAppState";

export default function FriendInfo({
    src,
    name,
    children,
    onClickInfo,
    onClickDelete,
}) {
    const appState = useAppState();

    return (
        <>
            <div className={styles.imageContainer}>
                <Popup
                    trigger={
                        <Image
                            className={styles.wizardImages}
                            src={src}
                            size="medium"
                        />
                    }
                    on="click"
                    content={
                        <Grid divided columns="equal">
                            <Grid.Column></Grid.Column>
                            <Button
                                color="green"
                                icon="info circle"
                                content={children || "More Info"}
                                onClick={onClickInfo}
                            />
                            <Button
                                color="red"
                                icon="user delete"
                                content={children || "Delete Friend"}
                                onClick={onClickDelete}
                            />
                        </Grid>
                    }
                />
                <h3>{name}</h3>
            </div>
        </>
    );
}
