import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Post = ({ route, props }) => {
  const { postID, postData, propData, tokenData, apiUriData } = route.params;

  const findCurrentPostById = postData.find(x => x.id === postID);
  console.log(findCurrentPostById, "current post data by id");
  console.log(tokenData);

  return (
    <View style={styles.screen}>
      <Text style={styles.textTitle}>
        {findCurrentPostById.title + "\n"}
        <Text style={styles.text}>
          {findCurrentPostById.description + "\n"}
        </Text>
        <Text style={styles.text}>{findCurrentPostById.category + "\n"}</Text>
        <Text style={styles.text}>{findCurrentPostById.city + "\n"}</Text>
        <Text style={styles.text}>{findCurrentPostById.price + "€\n"}</Text>
        <Text style={styles.text}>{findCurrentPostById.id + "\n"}</Text>
      </Text>
      <TouchableOpacity
        onPress={() =>
          propData.navigation.navigate("EditPost", {
            tokenData: tokenData,
            apiUriData: apiUriData,
            postID: postID,
            postData: findCurrentPostById,
            propData: propData
          })
        }
      >
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Edit Post</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          propData.navigation.navigate("DeletePost", {
            tokenData: tokenData,
            apiUriData: apiUriData,
            postID: postID,
            propData: propData
          })
        }
      >
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Delete Post</Text>
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

export default Post;
