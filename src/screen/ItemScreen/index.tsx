import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Textbt from "../../components/Textbt";
import { useRoute, useNavigation } from "@react-navigation/native";

import { addTodo, updatedTodo } from "../../redux/thunks/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemScreen = () => {
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate('TodoListScreen');
  };
  

  const route = useRoute();
  const id = route.params?.id;
  const Items = useSelector((state) =>
    state.todo.todoList.find((item) => item.id === route.params?.id)
  );

  const [title, setTitle] = useState<string | undefined>(Items?.title || "");
  const [description, setDescrip] = useState<string | undefined>(
    Items?.description || ""
  );

  let isChecked = false;
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (route.params?.id) {
      updateItem();
      goHome();
      return;
    }
    dispatch(addTodo({ id, title, description, isChecked }));
    clearItem();
    goHome();
  };

  const updateItem = () => {
    dispatch(updatedTodo({ id , title, description, isChecked }));
    clearItem();
  };

  const clearItem = () => {
    setTitle("");
    setDescrip("");
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Textbt text="Back" onPress={goHome} />
        <Textbt text="Save" onPress={handleSubmit} />
      </View>
      <View style={styles.container}>
        <Text>TITLE</Text>
        <TextInput
          placeholder="TITLE"
          style={styles.title}
          value={title}
          onChangeText={setTitle}
        />
        <Text>DESCRIPTION</Text>
        <TextInput
          placeholder="DESCRIPTION"
          style={styles.description}
          value={description}
          onChangeText={setDescrip}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "##e1e8f2",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {},
  title: {
    height: 80,
    borderColor: "black",
    borderRadius: 10,
  },
  description: {
    height: 200,
    borderColor: "black",
    borderRadius: 10,
  },
});
export default ItemScreen;
