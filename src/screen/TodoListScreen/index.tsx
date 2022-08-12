import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import TodoItem from "../../components/TodoItem";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../redux/thunks/todoSlice";

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Items = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const goDetail = useCallback(() => {
    navigation.navigate("ItemScreen");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleapp}>TODO APP</Text>

      <FlatList
        data={Items}
        renderItem={({ item }) => <TodoItem todo={item} />}
        style={{ width: "100%" }}
      />

      <View style={styles.icon}>
        <Pressable onPress={goDetail}>
          <AntDesign name="pluscircleo" size={40} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    margin: 20,
    height: "100%",
    width: "100%",
  },
  icon: {
    alignItems: "center",
    bottom: 150,
    height: 40,
  },
  titleapp: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default TodoListScreen;
