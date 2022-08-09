import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/thunks/thunk";
import { signupRequestedAC } from "../../redux/actions/action";
import Header from "../../components/Header";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const schema = Yup.object().shape({
  fistname: Yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
  lastname: Yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
  username: Yup.string().matches(EMAIL_REGEX, 'Email is invalid').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})
const SignupScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const goLogin = useCallback(() => {
    navigation.navigate("LoginScreen");
  }, []);
  const signUpHandler = useCallback((data) => {
    dispatch(
      signup(data.username, data.password),
      signupRequestedAC(data.username, data.password),
      navigation.navigate("LoginScreen")
    );
  }, []);
  const hander = (data,errors) => {
    console.log(data,errors)
  }
  const [isCheck, setCheck] = useState(false)
  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.container }>
        <Text style={styles.title}>Register</Text>
        <View style={styles.info}>
          <View style={styles.textinput}>
            <InputText
              control={control}
              name="firstname"
              placeholder="First name"
              rules={{
                required: "First name is required",
                minLength: { value: 3, message: "At least 3 characters" },
              }}
            />
            <MaterialCommunityIcons style={styles.icon} 
            name="account" 
            size={24} 
            color="#A4BCC1" />
          </View>
          <Text>{errors.firstname?.message}</Text>
          <View style= {styles.textinput}>
            <InputText
              control={control}
              name="fullname"
              placeholder="Last name"
              
            />
            <MaterialCommunityIcons style={styles.icon} 
            name="account" 
            size={24} 
            color="#A4BCC1" />
          </View>
          <Text>{errors.lastname?.message}</Text>
          <View>
            <InputText
              placeholder="Email"
              control={control}
              name="username"
              
            />
            <MaterialIcons
              style={styles.icon}
              name="email"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <Text>{errors.username?.message}</Text>
          
          <View>
            <InputText
              placeholder="Password"
              control={control}
              name="password"
              secureTextEntry
              
            />
            <FontAwesome
              style={styles.icon}
              name="lock"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <Text>{errors.password?.message}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Pressable 
          onPress={() => { setCheck(!isCheck)}}>
          { 
            isCheck === false ?
            <MaterialCommunityIcons  name="checkbox-blank-outline" size={24} color='#A4BCC1'/>
            :
            <MaterialCommunityIcons  name="checkbox-marked-outline" size={24} color='#A4BCC1'/>
            }
          </Pressable>
          
          <View style={{position: 'absolute',marginLeft: 68-33}}>
            <Text style = {styles.text}>by clicking on "Register" you agree to our 
              <Text style={styles.textcolor}> Terms & Condition</Text> and 
              <Text style = {styles.textcolor}> Privacy Policy</Text>
            </Text>
          </View>
        </View>

        <Pressable 
        onPress={handleSubmit(handleSubmit)}
        style={styles.buttonregis}
        >
          <LinearGradient
            colors={['#FF5789', '#FF9B9C']} 
            start={[0.0, 0.5]} end={[1.0, 0.5]} 
            locations={[0.0, 1.0]}
            style={styles.button}
          >
            <Text style={styles.textbold}>Register</Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.textlogin}>
          <Text style={styles.text}>Already have an account?  </Text>
          <Pressable
          onPress = {goLogin}
          >
            <Text style={[styles.textcolor, {fontWeight: '700'}]}>Log In</Text>
          </Pressable>
        </View>
 
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2d3748",
    opacity: 0.8,
    height: "100%",
    width: "100%",
  },
  container: {
    marginLeft: 32,
    marginRight: 32,
  },
  title: {
    fontSize: 24, 
    fontWeight: "900",
    lineHeight: 22,
    color: '#ffffff',
    marginLeft: 8,
    marginTop: 36,
  },
  textinput: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: 22,
    marginTop: 17,
  },
  info: {
    marginTop: 28-5,
  },
  checkboxicon: {
    borderWidth: 0.5,
    borderColor: '#A4BCC1',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    color: "#ffffff",
  },
  textcolor: {
    color: '#FF5889',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
  },
  textlogin:  {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
  },
  textbold: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '800',
    color: '#ffffff'
  },
  buttonregis: {
    marginTop: 152-5
  },
});

export default SignupScreen;
