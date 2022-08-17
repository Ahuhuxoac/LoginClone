import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";

import { logoutAC } from "../../redux/actions/action";
import { logout } from "../../redux/thunks/thunk";
const Settings = () => {
  const dispatch = useDispatch();
  const logoutHandler = useCallback(() => {
    dispatch(logout(), logoutAC());
  },[]);
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <AntDesign name="back" size={28} color="white" />
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.container}>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>My Subscriptions</Text>
          <AntDesign name="right" size={24} color="#ab22a2" />
        </Pressable>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>UProfile Tag</Text>
          <AntDesign name="right" size={24} color="#ab22a2" />
        </Pressable>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>User Info</Text>
          <AntDesign name="right" size={24} color="#ab22a2" />
        </Pressable>

      </View>
      <View style={styles.dick}>
      <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>Terms & Conditions</Text>
        </Pressable>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>Privacy policy</Text>
        </Pressable>
        <Pressable
        style={[styles.button,{marginTop: 40}]}
        >
          <Text style={styles.text}>Delete account</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2D3748",
    opacity: 0.8,
    height: "100%",
    width: "100%",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    marginLeft: 24,
    alignItems: "center",
  },
  title: {
    marginLeft: 101,
    fontSize: 17,
    fontWeight: 500,
    color: "#ffffff",
  },
  container: {
    marginTop: 28,
  },
  button: {
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#2e2c5c',
    marginVertical: 4,
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 15,
  },
  dick: {
    marginTop: 284,
  }
});

export default Settings;
