import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {Calendar} from 'react-native-calendars'

const Welcomevideo = () => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <AntDesign name="back" size={28} color="white" />
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.container}>
        <Calendar 
          onDayPress={(response)=> console.log(response)}
        />
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
});

export default Welcomevideo;
