import React from "react";
import { Card, Grid, Icon, Button, Image } from "semantic-ui-react";

export default function FriendCard({
    src,
    name,
    house,
    id,
    onClickInfo,
    removeFriendByID,
}) {
    function unfriendbyID() {
        removeFriendByID(id);
    }
    return (
        <>
            <Card raised>
                <img className="cardImages" src={src} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>
                        <Image src={`/${house}hero.jpeg`} avatar />
                        <span>{house}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Grid columns={1}>
                        <Grid.Column>
                            <Button
                                color="green"
                                animated="vertical"
                                onClick={onClickInfo}
                                fluid
                            >
                                <Button.Content hidden>Profile</Button.Content>
                                <Button.Content visible>
                                    <Icon name="user circle" />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        {/* <Grid.Column>
                            <Button
                                color="red"
                                animated="vertical"
                                onClick={unfriendbyID}
                                fluid
                            >
                                <Button.Content hidden>Unfriend</Button.Content>
                                <Button.Content visible>
                                    <Icon name="user delete" />
                                </Button.Content>
                            </Button>
                        </Grid.Column> */}
                    </Grid>
                </Card.Content>
            </Card>
        </>
    );
}
