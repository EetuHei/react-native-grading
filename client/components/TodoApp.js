import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import View1 from "./todoApp/View1";
import Todos from "./todoApp/Todos";
import Post from "./todoApp/Post";
import AddPost from "./Posts/screens/AddPost";
import EditPost from "./Posts/screens/EditPost";
import DeletePost from "./Posts/screens/DeletePost";

const Stack = createStackNavigator();

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    console.log("getting todos");
    fetch(this.props.apiURI + "/api/v1/posts/all-posts", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.props.jwt
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
        console.log("Todos GET successful");
        console.log("Received following JSON");
        console.log(json);

        this.setState({ todos: json.data.posts });
      })
      .catch(error => {
        console.log("Error message:");
        console.log(error.message);
      });
  }

  onTodoAdd = (description, dueDate) => {
    fetch(this.props.apiURI + "/todosJWT", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.props.jwt,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description, dueDate })
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
        console.log("Todos POST successful");
        console.log("Received following JSON");

        this.setState({ todos: json });
      })
      .catch(error => {
        console.log("Error message:");
        console.log(error.message);
      });
  };

  render() {
    console.log(this.state.todos, "all em todos");
    return (
      <Stack.Navigator>
        <Stack.Screen name="View1">
          {props => (
            <View1
              {...props}
              todos={this.state.todos}
              jwt={this.props.jwt}
              apiURI={this.props.apiURI}
              onLogout={this.props.onLogout}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Todos" options={{ title: "Todo List" }}>
          {props => (
            <Todos
              {...props}
              todos={this.state.todos}
              onTodoAdd={this.onTodoAdd}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Post">{props => <Post {...props} />}</Stack.Screen>
        <Stack.Screen name="AddPost">
          {props => (
            <AddPost
              {...props}
              jwt={this.props.jwt}
              apiURI={this.props.apiURI}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="EditPost">
          {props => (
            <EditPost
              {...props}
              jwt={this.props.jwt}
              apiURI={this.props.apiURI}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DeletePost">
          {props => (
            <DeletePost
              {...props}
              jwt={this.props.jwt}
              apiURI={this.props.apiURI}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
