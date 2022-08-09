import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";

import { logoutAC } from "../../redux/actions/action";
import { logout } from "../../redux/thunks/thunk";
const Settings = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout(), logoutAC());
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={logoutHandler}>
          <AntDesign
            style={{ marginRight: 10 }}
            name="back"
            size={30}
            color="black"
          />
          <Text style={styles.title}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={styles.info}>
          <Text>Email của bạn là :</Text>
          <Text>SDT của bạn là :</Text>
          <Text>ID của bạn là :</Text>
        </View>

        <Button text="Đăng xuất" onPress={logoutHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    margin: 20,
  },
  header: {},
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    marginTop: 200,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    marginBottom: 50,
  },
});

export default Settings;
