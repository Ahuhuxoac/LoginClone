import React, { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import { addTodo, updatedTodo } from "../../redux/thunks/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(6, "Title must be at least 6 characters")
    .required("Title is required"),
  description: Yup.string().min(0),
});

const ItemScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();
  const goHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  const route = useRoute();
  const id = route.params?.id;
  const Items = useSelector((state) =>
    state.todo.todoList.find((item) => item.id === route.params?.id)
  );

  let isChecked = false;
  const dispatch = useDispatch();
  const handleTitle = useCallback(
    (data) => {
      let title = data.title;
      let description = data.description;
      if (route.params?.id) {
        dispatch(updatedTodo({ id, title, description, isChecked }));
        goHome();
        return;
      }
      dispatch(addTodo({ id, title, description, isChecked }));
      goHome();
    },
    [Items]
  );

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable onPress={goHome}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
        <Pressable onPress={handleSubmit(handleTitle)}>
          <AntDesign name="save" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text>TITLE</Text>
        <Controller
          control={control}
          name="title"
          defaultValue={Items?.title || ""}
          render={({ field: { value, onChange, onBlur } }) => (
            <>
              <View style={[styles.container]}>
                <TextInput
                  placeholder="TITLE"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={styles.input}
                />
              </View>
            </>
          )}
        />
        <Text>{errors.title?.message}</Text>

        <Text>DESCRIPTION</Text>
        <Controller
          control={control}
          name="description"
          defaultValue={Items?.description || ""}
          render={({ field: { value, onChange, onBlur } }) => (
            <>
              <View>
                <TextInput
                  placeholder="DESCRIPTION"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={styles.description}
                />
              </View>
            </>
          )}
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  container: {},
  description: {
    height: 200,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#A4BCC1",
    paddingLeft: 40,
    color: "pink",
  },
  title: {
    height: 50,
    color: "#A4BCC1",
    paddingLeft: 50,
  },
  input: {
    height: 50,
    color: "#A4BCC1",
    paddingLeft: 50,
  },
});
export default ItemScreen;
