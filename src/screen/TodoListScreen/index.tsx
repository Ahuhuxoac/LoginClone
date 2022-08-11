import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import TodoItem from "../../components/TodoItem";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../redux/thunks/todoSlice";

const TodoListScreen = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getTodo());
  },[])
  const Items = useSelector((state) => state.todo.todoList);

  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("ItemScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleapp}>TODO APP</Text>
      <View style={styles.icon}>
        <Pressable onPress={goDetail}>
          <Ionicons name="create-outline" size={24} color="black" />
        </Pressable>
      </View>

      <FlatList
        data={Items}
        renderItem={({ item }) => <TodoItem todo={item} />}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    margin: 20,
  },
  icon: {
    alignItems: "flex-end",
    height: 40,
  },
  titleapp: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default TodoListScreen;
