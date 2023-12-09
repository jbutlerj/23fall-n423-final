import React from "react";
import { Popup, Image, Button } from "semantic-ui-react";
import styles from "@/styles/FriendInfo.module.scss";

export default function FriendInfo({ src, name, children, onClick }) {
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
                        <Button
                            color="green"
                            icon="info circle"
                            content={children || "More Info"}
                            onClick={onClick}
                        />
                    }
                />
                <h3>{name}</h3>
            </div>
        </>
    );
}
