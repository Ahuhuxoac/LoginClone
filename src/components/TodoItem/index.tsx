import React, { useEffect, useState } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import CheckBox from "../CheckBox";
import Textbt from "../Textbt";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { deletedTodo } from "../../redux/thunks/todoSlice";
import { Dimensions } from 'react-native';
import { useDispatch } from "react-redux";
const windowWidth = Dimensions.get('window').width;
 

interface TodoItemProps {
  todo: {
    id: String;
    title: String;
    isChecked: boolean;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isCheck, setCheck] = useState(false);

  useEffect(() => {
    if (!todo) {
      return;
    }
    setCheck(todo.isChecked);
  }, [todo]);

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ItemScreen", { id: todo.id });
  };

  const dispatch = useDispatch();
  
  return (
    <View style={styles.form}>
      <CheckBox
        isChecked={isCheck}
        onPress={() => {
          setCheck(!isCheck);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: windowWidth*0.8,
          justifyContent: 'space-between'
        }}
      >
        <Textbt text={todo.title} onPress={onPress} />
        {isCheck === true ? (
          <Pressable 
          style = {styles.delete}
          onPress={()=> dispatch(deletedTodo({
              id: todo.id
          }))}>
            <AntDesign name="delete" size={24} color="black" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginVertical: 10,
    width: windowWidth*0.9,
  },
  title: {
    flex: 1,
    color: "black",
    fontSize: 18,
    marginLeft: 7,
    padding: 10,
  },
  delete: {
  }
});

export default TodoItem;