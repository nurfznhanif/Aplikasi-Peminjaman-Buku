import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      navigation.navigate('Homepage');
    } else {
      Alert.alert('Login Gagal', 'Username atau password salah. Silakan coba lagi.');
    }
  };
  return (
    <View style={styles.login2}>

      <Pressable style={styles.ionchevronBackOutlineParent} onPress={() => navigation.navigate("Login")}>
        <Image style={[styles.vectorIcon, styles.vectorIconLayout]} contentFit="cover" source={require("../assets/vector3.png")} />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>

      <Text style={[styles.login3, styles.loginPosition]}>Login</Text>

      <Image style={styles.mingcuteuser4FillIcon1} contentFit="cover" source={require("../assets/vector4.png")} />
      <Image style={styles.mingcuteuser4FillIcon} contentFit="cover" source={require("../assets/mingcuteuser4fill.png")} />
      <Image style={[styles.login2Child, styles.vectorIconLayout]} contentFit="cover" source={require("../assets/group-11.png")} />

      <TextInput
        style={[styles.inputField, styles.inputLayout]}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />

      <TextInput
        style={[styles.inputField1, styles.inputLayout]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <View style={[styles.loginChild, styles.usernamePosition]} />
        <Text style={[styles.login1, styles.loginPosition]}> Login </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  inputLayout: {
    height: 26,
    width: 250,
    left: 115,
    position: "absolute",
  },

  loginPosition: {
    fontSize: 21,
    left: "50%",
    lineHeight: 22,
    position: "absolute",
  },

  vectorIcon: {
    height: "56.29%",
    width: "13.61%",
    right: "68.89%",
    bottom: "21.71%",
    left: "17.5%",
    top: "22%",
  },
  
  back: {
    top: "17.14%",
    left: "41.67%",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  
  ionchevronBackOutlineParent: {
    top: 82,
    left: 20,
    width: 72,
    height: 35,
    position: "absolute",
  },

  mingcuteuser4FillIcon: {
    top: 456,
    left: 70,
    width: 27,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },

  mingcuteuser4FillIcon1: {
    top: 515,
    left: 74,
    width: 19,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },

  login2Child: {
    height: "16.14%",
    width: "39.21%",
    top: "25.77%",
    right: "30.41%",
    bottom: "58.09%",
    left: "30.38%",
    position: "absolute"
  },

  inputField: {
    top: 454,
  },

  inputField1: {
    top: 516,
  },
  
  loginChild: {
    top: 50,
    height: "100%",
    borderRadius: 40,
    backgroundColor: Color.colorSteelblue_100,
    width: "100%",
  },
  
  login1: {
    height: "50%",
    marginLeft: -45,
    color: Color.labelColorDarkPrimary,
    width: 90,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "350",
    top: "130%",
  },
  
  login: {
    top: 569,
    left: 77,
    width: 235,
    height: 50,
    position: "absolute",
  },
  
  login3: {
    marginLeft: -32,
    top: 175,
    fontWeight: "400",
    fontFamily: FontFamily.hEADER,
    color: Color.colorSteelblue_100,
  },
  
  login2: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    position: "absolute"
  },
});

export default Login2;
