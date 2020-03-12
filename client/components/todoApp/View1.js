import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const View1 = props => {
  console.log("these are the props", props.todos);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          {props.todos.map(t => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Post", {
                  postID: t.id,
                  postData: props.todos
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
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={props.onLogout}>
            <View style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default View1;
