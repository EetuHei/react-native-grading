import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  TextInput
} from "react-native";

const AddPost = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");

  function createPostPressed() {
    fetch(props.apiURI + "/api/v1/posts/create-post", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        category,
        city,
        country,
        price,
        delivery
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + props.jwt
      }
    })
      .then(response => {
        if (response.ok == false) {
          throw new Error(
            "HTTP Code " +
              response.status +
              " - " +
              JSON.stringify(response.json())
          );
        }
        return response.json();
      })
      .then(json => {
        console.log(json);

        props.navigation.reset({
          index: 0,
          routes: [{ name: "View1" }]
        });
      })
      .catch(error => {
        console.log("Error message:");
        console.log(error.message);
      });
  }

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.text}
        placeholder="Title"
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        style={styles.text}
        placeholder="Description"
        onChangeText={value => setDescription(value)}
      />
      <TextInput
        style={styles.text}
        placeholder="Category: Car"
        onChangeText={value => setCategory(value)}
      />
      <TextInput
        style={styles.text}
        placeholder="City: Oulu"
        onChangeText={value => setCity(value)}
      />
      <TextInput
        style={styles.text}
        placeholder="Country: Fi"
        onChangeText={value => setCountry(value)}
      />
      <TextInput
        style={styles.text}
        placeholder="Price"
        onChangeText={value => setPrice(value)}
      />
      <TextInput
        style={styles.text}
        placeholder="Delivery"
        onChangeText={value => setDelivery(value)}
      />
      <TouchableOpacity onPress={() => createPostPressed()}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Add Post</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "rgb(50, 50, 50)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: "white"
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  textTitle: {
    fontSize: 30,
    color: "white"
  },
  primaryButton: {
    backgroundColor: "#BF87E8",
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 10
  },
  primaryButtonText: {
    color: "white",
    fontSize: 20
  }
});

export default AddPost;
