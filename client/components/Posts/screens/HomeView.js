import React from "react";
import { View, Text, Button } from "react-native";

const HomeView = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50, fontWeight: "700" }}>
        Home View aka all post
      </Text>
      <Button
        title="Login"
        color="#000000"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};

export default HomeView;
