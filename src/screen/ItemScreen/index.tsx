import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Textbt from "../../components/Textbt";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

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
        <Pressable
        onPress={goHome}
        >
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
        <Pressable
        onPress={handleSubmit}>
          <AntDesign name="save" size={24} color="black" />
        </Pressable>
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
    marginTop: 130,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
    
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
