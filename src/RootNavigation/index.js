import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/HomeScreen";
import SignupScreen from "../screen/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Reminder from "../screen/Reminder";
import Invite from "../screen/Invite";
import Send from "../screen/Sendmail";
import Welcomevideo from "../screen/Welcomevideo";
import Rewards from "../screen/Rewards";
import Help from "../screen/Help";
import Disclaimer from "../screen/Disclaimer";
import Settings from "../screen/Settings";
import { SlicerBar } from "../components/SliceBar";
import { Feather, AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import TodoListScreen from "../screen/TodoListScreen/index";
import ItemScreen from "../screen/ItemScreen/index";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LoginMatch = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const Screens = ({ navigation }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 0.9, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [1, 15], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{ scale }],
      borderRadius,
    };
  });
  const [open, setopen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View>
        {open === true ? (
          <Pressable
            style={{
              marginTop: 40,
              marginLeft: 20,
              position: "absolute",
            }}
            onPress={() => {
              navigation.closeDrawer();
              setopen(!open);
            }}
          >
            <AntDesign name="close" size={30} color="#ffffff" />
          </Pressable>
        ) : null}
      </View>

      <Animated.View
        style={[
          {
            flex: 1,
            shadowColor: "#000",
            overflow: "scroll",
          },
          animatedStyle,
        ]}
      >
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () => (
              <Pressable
                transparent
                onPress={() => {
                  navigation.openDrawer();
                  setopen(!open);
                }}
              >
                <Feather
                  name="menu"
                  size={18}
                  color="black"
                  style={{ paddingHorizontal: 10 }}
                />
              </Pressable>
            ),
          }}
        >
          <Stack.Screen name="TodoListScreen">
            {(props) => <TodoListScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="ItemScreen">
            {(props) => <ItemScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Invite your friends">
            {(props) => <Invite {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Send a testimonial">
            {(props) => <Send {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Welcome video">
            {(props) => <Welcomevideo {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Rewards">
            {(props) => <Rewards {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Help & Support">
            {(props) => <Help {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {(props) => <Settings {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Disclaimer">
            {(props) => <Disclaimer {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </Animated.View>
    </View>
  );
};

const HomeMatch = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2D3748",
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
          headerTransparent: "true",
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerStyle: { backgroundColor: "#2D3748" },
        }}
        drawerContent={(props) => {
          return <SlicerBar {...props} />;
        }}
      >
        <Drawer.Screen
          name="Screens"
          options={{
            drawerActiveTintColor: "red",
            drawerActiveBackgroundColor: "red",
          }}
        >
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const RootNavigator = () => {
  const checker = useSelector((state) => {
    return state.Login.auth;
  });
  return (
    <NavigationContainer>
      {/* {checker === false ? <LoginMatch /> : <HomeMatch />} */}
      <HomeMatch />
    </NavigationContainer>
  );
};

export default RootNavigator;
