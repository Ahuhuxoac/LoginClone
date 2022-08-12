import React, { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Textbt from "../../components/Textbt";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { addTodo, updatedTodo } from "../../redux/thunks/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../../components/InputText";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(6, "Title must be at least 6 characters")
    .required("Title is required"),
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
    navigation.navigate("TodoListScreen");
  },[]);

  const route = useRoute();
  const id = route.params?.id;
  const Items = useSelector((state) =>
    state.todo.todoList.find((item) => item.id === route.params?.id)
  );

  const placeholderTitle = Items?.title || "TITLE";
  const [description, setDescrip] = useState<string | undefined>(
    Items?.description || ""
  );

  let isChecked = false;
  const dispatch = useDispatch();
  const handleTitle = useCallback((data) => {
    let title = data.title;
    if (route.params?.id) {
      updateItem(title);
      goHome();
      return;
    }
    dispatch(addTodo({ id, title, description, isChecked }));
    clearItem();
    goHome();
  }, []);

  const updateItem = useCallback((data) => {
    let title = data;
    dispatch(updatedTodo({ id, title, description, isChecked }));
    clearItem();
  }, []);

  const clearItem = useCallback(() => {
    setDescrip("");
  }, []);

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
        <InputText
          placeholder={placeholderTitle}
          control={control}
          name="title"
        />
        <Text>{errors.title?.message}</Text>

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
});
export default ItemScreen;
