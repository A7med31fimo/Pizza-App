import { View, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { AddItemsDrinks } from "../../db/Edit/DrinksEdit"
import { AddItemscakes } from "../../db/Edit/CakesEdit"
import { AddItemsDeals } from "../../db/Edit/DealEdit"
import { AddItemsPizza } from "../../db/Edit/PizzaEdit"
export default function Add({ name }) {
    const [Price, setprice] = useState("");
    const [photo, setphoto] = useState("");
    const [Name, setName] = useState("");
    const [desc, setdesc] = useState("");
    return (
        <View style={styles.body}>
            <View style={styles.inps}>
                <TextInput style={styles.inp} placeholder="Name" onChangeText={setName}></TextInput>
                <TextInput
                    onChangeText={setphoto}
                    style={styles.inp}
                    placeholder="Link Of Photo"
                ></TextInput>
                {
                name!="drink"?
                <TextInput
                    onChangeText={setdesc}
                    style={styles.inp}
                    placeholder="descrpition of meal"
                ></TextInput>:null
                }
                
                <TextInput
                    onChangeText={setprice}
                    style={styles.inp}
                    placeholder="price"
                ></TextInput>
                <View style={styles.btn}>
                    <Button
                        title="Add"
                        onPress={() => {


                            if (name === "drink")
                                AddItemsDrinks({ ref: photo, name: Name, cost: parseInt(Price) })
                            if (name === "cake")
                                AddItemscakes({ desc:desc,image: photo, label: Name, price: parseInt(Price) })
                            if (name === "deal")
                                AddItemsDeals({ desc:desc,image: photo, label: Name, price: parseInt(Price) })
                            if (name === "pizza")
                                AddItemsPizza({ desc:desc,image: photo, label: Name, price: parseInt(Price) })

                        }}
                        color="#FB081F"
                    ></Button>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inps: {
        alignItems: "center",
        marginTop: 30,
    },
    inp: {
        width: "90%",
        height: 40,
        borderWidth: 2,
        borderColor: "#FB081F",
        borderRadius: 10,
        marginBottom: 30,
        fontSize: 20,
        fontStyle: "italic",
        padding: 6,
        color: "#000000",
    },
    btn: {
        marginVertical: 5,
        width: "90%",
        borderRadius: 15,
        overflow: "hidden",
    }

})