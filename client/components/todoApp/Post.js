import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button
} from "react-native";

const Post = ({ route, props }) => {
  const { postID } = route.params;
  console.log("hahahahahah IDPOST", postID);
  return (
    <View>
      <Text>Made it!</Text>
    </View>
  );
};

export default Post;
