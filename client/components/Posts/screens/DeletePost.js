import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  TextInput
} from "react-native";

const DeletePost = ({ route, props }) => {
  const { postID, propData, tokenData, apiUriData } = route.params;

  function deletePostPressed() {
    fetch(apiUriData + "/api/v1/posts/delete-post/" + postID, {
      method: "DELETE",
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

  console.log(postID, "DELETE SHIT");

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => deletePostPressed()}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Are you sure?</Text>
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

export default DeletePost;
