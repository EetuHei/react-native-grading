import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const LoginScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginClick() {
    fetch(props.apiURI + "/api/v1/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (res.ok == false) {
          throw new Error(
            "HTTP Code " + res.status + " - " + JSON.stringify(res.json())
          );
        }
        return res.json();
      })
      .then(json => {
        console.log("Login successful");
        console.log("Received following JSON");
        console.log(json);

        props.onLoginReceiveJWT(json.data.accessToken);
      })
      .catch(e => {
        console.log("Error message:");
        console.log(e.message);
      });
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>User Login</Text>
      <Text style={styles.text}>Username or email</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="johndoe"
        onChangeText={value => setUsername(value)}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity onPress={() => loginClick()}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Signup</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("HomeView")}>
        <View style="">
          <Text style={styles.secondaryButtonText}>Continue as guest</Text>
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
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: "90%",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
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
  },
  secondaryButton: {
    backgroundColor: "#BF87E8",
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    marginTop: 0,
    marginBottom: 10
  },
  secondaryButtonText: {
    color: "white",
    fontSize: 20
  }
});

export default LoginScreen;
