import React from "react";
import { View, Text, Button } from "react-native";

const View1 = props => {
  console.log("these are the props", props.todos);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>You have successfully logged in</Text>
      {props.todos.map(t => (
        <Text key={t.id}>
          {t.title}
          <Text>{t.category}</Text>
          <Text>{t.city}</Text>
          <Text>{t.price}</Text>
          <Text>{t.id}</Text>
        </Text>
      ))}
      {/* <Button
        title="Go to Todo List View"
        onPress={() => props.navigation.navigate("Todos")}
      /> */}
      <Button title="Logout" onPress={props.onLogout} />
    </View>
  );
};

export default View1;
