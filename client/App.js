import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainApp from "./index";
import baseUri from "./baseUri.json";

export default function App() {
  let output;
  output = (
    <View style={styles.container}>
      <MainApp apiURI={baseUri.uri}></MainApp>
    </View>
  );
  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 18
  }
});
