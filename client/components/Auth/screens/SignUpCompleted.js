import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const SignUpCompleted = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Sign up was successful!</Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
          })
        }
      >
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Proceed to login</Text>
        </View>
      </TouchableOpacity>
    </View>
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
    textAlign: 'center',
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

export default SignUpCompleted;
