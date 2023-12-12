import React from "react";
import { Card, Form, Header, Button, Icon } from "semantic-ui-react";

export default function PotionForm({
    oldValues = { name: "", description: "", ingredients: "", id: "" },
    onSubmit,
}) {
    const [currentValues, setCurrentValues] = React.useState(oldValues);

    function formSubmitted() {
        if (currentValues.name !== "") {
            onSubmit(currentValues);
            setCurrentValues(oldValues);
        }
    }

    function changeCurrentValues(e, { name, value }) {
        setCurrentValues({ ...currentValues, [name]: value });
    }

    return (
        <>
            <Form onSubmit={formSubmitted}>
                <Card centered>
                    <Card.Content>
                        <Header as="h2">
                            {oldValues.id ? "Edit" : "Create"} Potion
                        </Header>
                    </Card.Content>
                    <Card.Content>
                        <Form.Field>
                            <Form.Input
                                label="Potion Name"
                                placeholder="Potion Name"
                                name="name"
                                onChange={changeCurrentValues}
                                value={currentValues.name}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.TextArea
                                label="Description"
                                placeholder="Description"
                                name="description"
                                onChange={changeCurrentValues}
                                value={currentValues.description}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.TextArea
                                label="Ingredients"
                                placeholder="Ingredients"
                                name="ingredients"
                                onChange={changeCurrentValues}
                                value={currentValues.ingredients}
                            />
                        </Form.Field>
                    </Card.Content>
                    <Card.Content>
                        <Form.Button
                            type="submit"
                            animated="vertical"
                            color="green"
                            fluid
                        >
                            <Button.Content hidden>Save Potion</Button.Content>
                            <Button.Content visible>
                                <Icon name="flask" />
                            </Button.Content>
                        </Form.Button>
                    </Card.Content>
                </Card>
            </Form>
        </>
    );
}
