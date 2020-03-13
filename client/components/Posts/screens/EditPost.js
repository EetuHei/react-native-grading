import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  TextInput
} from "react-native";

const EditPost = ({ route, props }) => {
  const { postID, postData, propData, tokenData, apiUriData } = route.params;
  const [title, setTitle] = useState(postData.title);
  const [description, setDescription] = useState(postData.description);
  const [category, setCategory] = useState(postData.category);
  const [city, setCity] = useState(postData.city);
  const [country, setCountry] = useState(postData.country);
  const [price, setPrice] = useState(postData.price);
  const [delivery, setDelivery] = useState(postData.delivery);

  console.log(apiUriData);
  console.log(postID);
  console.log(postData.title);

  function editPostPressed() {
    fetch(apiUriData + "/api/v1/posts/edit-post/" + postID, {
      method: "PUT",
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
        Authorization: "Bearer " + tokenData
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

        propData.navigation.reset({
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
        placeholder={postData.title}
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        style={styles.text}
        placeholder={postData.description}
        onChangeText={value => setDescription(value)}
      />
      <TextInput
        style={styles.text}
        placeholder={postData.category}
        onChangeText={value => setCategory(value)}
      />
      <TextInput
        style={styles.text}
        placeholder={postData.city}
        onChangeText={value => setCity(value)}
      />
      <TextInput
        style={styles.text}
        placeholder={postData.country}
        onChangeText={value => setCountry(value)}
      />
      <TextInput
        style={styles.text}
        placeholder={postData.price}
        onChangeText={value => setPrice(value)}
      />
      <TextInput
        style={styles.text}
        placeholder={postData.delivery}
        onChangeText={value => setDelivery(value)}
      />
      <TouchableOpacity onPress={() => editPostPressed()}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Edit Post</Text>
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

export default EditPost;
