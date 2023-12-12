import React from "react";
import { Card, Grid, Icon, Button, Header } from "semantic-ui-react";

export default function PotionEditCard() {
    return (
        <>
            <Card raised>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>
                        <Header as="h4">Description: {description}</Header>
                    </Card.Description>
                    <Card.Description>
                        Ingredients: {ingredients}
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Button
                                color="blue"
                                animated="vertical"
                                onClick={editPotion}
                                fluid
                            >
                                <Button.Content hidden>Edit</Button.Content>
                                <Button.Content visible>
                                    <Icon name="edit" />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                color="red"
                                animated="vertical"
                                onClick={deletePotion}
                                fluid
                            >
                                <Button.Content hidden>Delete</Button.Content>
                                <Button.Content visible>
                                    <Icon name="delete" />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
        </>
    );
}
