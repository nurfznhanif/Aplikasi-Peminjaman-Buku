import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
      navigation.navigate('Login2');
  };

  const SignUp = () => {
    navigation.navigate('SignUp');
};

  return (
    <View style={styles.login}>

      <Image style={styles.vectorLoginIcon} contentFit="cover"source={require("../assets/group-1.png")}/>
      
      <TouchableOpacity style={styles.login1} onPress={handleLogin}>
        <View style={[styles.loginChild1]} />
        <Text style={[styles.login2]}> Login </Text>
      </TouchableOpacity>

      <View style={[styles.belumPunya]}/>
      <Text style={[styles.belumPunya1]}> Belum Punya Akun? </Text>
      
      <TouchableOpacity style={styles.Signup2} onPress={SignUp}>
        <View style={[styles.loginChild2]} />
        <Text style={[styles.Signup]} onPress={SignUp}> Sign Up </Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({

  vectorLoginIcon: {
    height: "21%",
    width: "50%",
    top: "24%",
    left: "27%",
    position: "absolute",
    overflow: "hidden",
  },

  login1: {
    top: 450,
    left: 77,
    width: 235,
    height: 50,
    position: "absolute",
  },

  loginChild1: {
    borderStyle: "solid",
    borderColor: Color.colorSteelblue_100,
    borderWidth: 2,
    backgroundColor: Color.colorSteelblue_100,
    borderRadius: Border.br_6xl,
    top: 500,
    height: "10%",
  },

  login2: {
    width: "87%",
    left: "6.38%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.hEADER_size,
    top: "145%",
    height: "70%",
    textAlign: "center",
    lineHeight: 25,
    letterSpacing: 2,
    position: "absolute",
  },

  belumPunya1:{
    top: 577,
    left: 130,
    width: 235,
    height: 50,
    position: "absolute",
  },
  
  belumPunya:{
   
  },

  Signup2: {
    top: 550,
    left: 77,
    width: 235,
    height: 50,
    position: "absolute",
  },

  Signup: {
    width: "87%",
    left: "6.38%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.hEADER_size,
    top: "145%",
    height: "70%",
    textAlign: "center",
    lineHeight: 25,
    letterSpacing: 2,
    position: "absolute",
  },

  loginChild2: {
    borderStyle: "solid",
    borderColor: Color.colorSteelblue_100,
    borderWidth: 2,
    backgroundColor: Color.colorSteelblue_100,
    borderRadius: Border.br_6xl,
    top: 500,
    height: "10%",
  },  

  login: {
    flex: 1,
    height: 844,
    overflow: "hidden",
  },

});

export default Login;
