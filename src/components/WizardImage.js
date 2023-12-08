import React from "react";
import { Popup, Button, Image, Grid } from "semantic-ui-react";
import styles from "@/styles/WizardImage.module.scss";

export default function WizardImage({ src, name, children, onClick }) {
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
                            icon="save"
                            content={children || "Add Friend"}
                            onClick={onClick}
                        />
                    }
                />
                <h3>{name}</h3>
            </div>
        </>
    );
}
