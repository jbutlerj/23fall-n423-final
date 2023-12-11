import React from "react";
import { Button, Card, Grid, Icon } from "semantic-ui-react";

export default function WizardCard({ src, name, onClickAdd, onClickInfo }) {
    return (
        <>
            <Card raised>
                <img className="cardImages" src={src} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Button
                                color="green"
                                animated="vertical"
                                onClick={onClickAdd}
                                fluid
                            >
                                <Button.Content hidden>
                                    Add Friend
                                </Button.Content>
                                <Button.Content visible>
                                    <Icon name="add user" />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                color="blue"
                                animated="vertical"
                                onClick={onClickInfo}
                                fluid
                            >
                                <Button.Content hidden>Profile</Button.Content>
                                <Button.Content visible>
                                    <Icon name="add user" />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
        </>
    );
}
