import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { render } from "react-dom";

const GuestView = props => {
  const postData = () => {
    fetch(props.apiURI + "/api/v1/posts/all-posts", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
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
          console.log("Posts GET successful");
          console.log("Received following JSON");
          console.log(json.data.posts);
        })
        .catch(error => {
          console.log("Error message:");
          console.log(error.message);
        })
    });
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Text style={styles.text}>
          Didin't manage to get the data over here
        </Text>
        {/* <View style={styles.screen}>
          {postData.map(t => {
            <TouchableOpacity
              onPress={() =>
                propData.navigation.navigate("Post", {
                  postID: t.id,
                  postData: postData,
                  propData: propData,
                  apiUriData: props.apiURI
                })
              }
            >
              <Text style={styles.textTitle} key={t.id}>
                {t.title + "\n"}
                <Text style={styles.text}>{t.category + "\n"}</Text>
                <Text style={styles.text}>{t.city + "\n"}</Text>
                <Text style={styles.text}>{t.price + "€\n"}</Text>
                <Text style={styles.text}>{t.id + "\n"}</Text>
              </Text>
            </TouchableOpacity>;
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#323232",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
    color: "white"
  },
  text: {
    fontSize: 20,
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

export default GuestView;
