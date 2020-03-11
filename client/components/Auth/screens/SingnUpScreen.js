import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

const SignUpScreen = props => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");

  function signupPressed() {
    fetch(props.apiURI + "/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        name,
        address,
        city,
        country,
        phoneNumber,
        password,
        passwordConfirmation,
        email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
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
          routes: [{ name: "SignupCompleted" }]
        });
      })
      .catch(error => {
        console.log("Error message:");
        console.log(error.message);
      });
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.text}>Please enter your username</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="johndoe"
        onChangeText={value => setUsername(value)}
      />
      <Text style={styles.text}>Please enter your full name</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="John Wick"
        onChangeText={value => setName(value)}
      />
      <Text style={styles.text}>Please enter your address</Text>
      <TextInput
        style={styles.input}
        value={address}
        placeholder="kotkantie 2"
        onChangeText={value => setAddress(value)}
      />
      <Text style={styles.text}>Please enter your city</Text>
      <TextInput
        style={styles.input}
        value={city}
        placeholder="Oulu"
        onChangeText={value => setCity(value)}
      />
      <Text style={styles.text}>Please enter your country</Text>
      <TextInput
        style={styles.input}
        value={country}
        placeholder="Fi"
        onChangeText={value => setCountry(value)}
      />
      <Text style={styles.text}>Please enter your phone number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder="1234561234"
        onChangeText={value => setPhoneNumber(value)}
      />
      <Text style={styles.text}>Please enter your email</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="test@email.com"
        onChangeText={value => setEmail(value)}
      />
      <Text style={styles.text}>Please enter your password</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <Text style={styles.text}>Please re-enter your password</Text>
      <TextInput
        style={styles.input}
        value={passwordConfirmation}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={value => setPasswordConfirmation(value)}
      />
      <TouchableOpacity onPress={() => signupPressed()}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
          })
        }
      >
        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Cancel</Text>
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
    fontSize: 18,
    color: "white"
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: "75%",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 0,
    marginBottom: 5
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

export default SignUpScreen;
