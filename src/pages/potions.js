import React from "react";
import { Grid, Card } from "semantic-ui-react";
import useAppState from "@/useHooks/useAppState";
import Hero from "@/components/Hero";
import PotionForm from "@/components/PotionForm";
import PotionCard from "@/components/PotionCard";

export default function Potions() {
    const appState = useAppState();

    // console.log(appState.potionInventory);

    //  function to add potions
    function addNewPotion(potionData) {
        appState.updateAppState({
            potionInventory: appState.potionInventory.concat({
                ...potionData,
                id: Date.now(),
            }),
        });
    }

    // function to remove potions
    function removePotionByID(potionID) {
        appState.updateAppState({
            potionInventory: appState.potionInventory.filter((potion) => {
                // if returns true then keep
                if (potion.id !== potionID) return true;
                // if returns false then remove
                else return false;
            }),
        });
    }

    function editPotionByID(newPotionData) {
        appState.potionInventory.map((potion) => {
            // if the item doesn't match then keep it the same
            if (potion.id !== newPotionData.id) return potion;
            // else keep the new data
            return newPotionData;
        });
    }

    return (
        <>
            <section>
                <Hero imageURL="/friendshero.jpg" headerText="Potions" />
            </section>
            <div className="gridContainer">
                <Grid columns={2} divided>
                    <Grid.Column width={4}>
                        <PotionForm onSubmit={addNewPotion} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Card.Group itemsPerRow={3} stackable doubling>
                            {appState.potionInventory.map((potion) => {
                                {
                                }
                                return (
                                    <PotionCard
                                        key={potion.id}
                                        name={potion.name}
                                        description={potion.description}
                                        ingredients={potion.ingredients}
                                        id={potion.id}
                                        removePotionByID={removePotionByID}
                                        editPotionByID={editPotionByID}
                                    />
                                );
                            })}
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}
