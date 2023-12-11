import React from "react";
import { Popup, Image, Button, Grid } from "semantic-ui-react";
import styles from "@/styles/components/FriendInfo.module.scss";
import useAppState from "@/useHooks/useAppState";

export default function FriendInfo({ src, name, children, onClickInfo }) {
    const appState = useAppState();

    return (
        <>
            <div className={styles.imageContainer}>
                <Popup
                    trigger={
                        <Image className={styles.wizardImages} src={src} />
                    }
                    on="click"
                    content={
                        <Button
                            color="green"
                            icon="info circle"
                            content={children || "More Info"}
                            onClick={onClickInfo}
                        />
                    }
                />
                <h3>{name}</h3>
            </div>
        </>
    );
}
