import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();
  
  const handleLogin = () => {
      navigation.navigate('Login');
  };

  return (
    <View style={[styles.welcome, styles.welcomeLayout]}>

      <Text style={[styles.welcomeToUirbook, styles.getStartedClr]}> Welcome to UirBook </Text>
      
      <Image style={styles.vectorLoginIcon} contentFit="cover" source={require("../assets/vector-login.png")}/>
      
      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <View style={[styles.loginChild, styles.usernamePosition]} />
        <Text style={[styles.login1, styles.loginPosition]}> Get Started </Text>
      </TouchableOpacity>
      
      <View style={[styles.homeindicator, styles.notchIconPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  login: {
    top: 569,
    left: 77,
    width: 235,
    height: 50,
    position: "absolute",
  },

  loginChild: {
    borderStyle: "solid",
    borderColor: Color.colorSteelblue_100,
    borderWidth: 2,
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_6xl,
    top: "120%",
    height: "100%",
  },

  login1: {
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

  getStartedClr: {
    color: Color.colorSteelblue_100,
    fontSize: FontSize.hEADER_size,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },

  welcomeToUirbook: {
    top: 200,
    left: -74,
    fontWeight: "700",
    fontFamily: FontFamily.hEADER,
    width: 537,
    height: 62,
    textAlign: "center",
  },
  
  vectorLoginIcon: {
    height: "32.46%",
    width: "90.67%",
    top: "35%",
    right: "4.77%",
    bottom: "43.13%",
    left: "4.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  
  welcome: {
    flex: 1,
    height: 844,
    overflow: "hidden",
  },

});

export default Welcome;
