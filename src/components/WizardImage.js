import React from "react";
import { Popup, Button, Image, Grid } from "semantic-ui-react";

export default function WizardImage({ src, children, onClick }) {
    return (
        <>
            <Grid.Column>
                <Popup
                    trigger={<Image src={src} />}
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
            </Grid.Column>
        </>
    );
}
