import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SIGNUP1 = () => {
  const navigation = useNavigation();

  return (

    <View style={styles.signup1}>

      <Pressable style={styles.ionchevronBackOutlineParent} onPress={() => navigation.navigate("Login")}>
        <Image style={styles.ionchevronBackOutlineIcon} contentFit="cover" source={require("../assets/ionchevronbackoutline.png")} />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>

      <Text style={styles.signUp}> Sign Up </Text>

      <View style={styles.inputField}>
        <Text style={styles.label}>Nama</Text>
        <TextInput style={styles.input} placeholder="Nama" />
      </View>

      <View style={styles.inputField}>
        <Text style={styles.label}>Prodi</Text>
        <TextInput style={styles.input} placeholder="Prodi" />
      </View>

      <View style={styles.inputField}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" />
      </View>

      <View style={styles.inputField}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      </View>

      <View style={styles.inputField}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
      </View>

      <Pressable style={styles.signupButton}>
        <Text style={styles.signupText}>Sign Up</Text>
      </Pressable>
    </View>
  );

};

const styles = StyleSheet.create({

  signup1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Ganti dengan warna latar belakang yang diinginkan
    padding: 20,
  },
  signUp: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputField: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
  },
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  namaTypo: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  childPosition: {
    position: 'absolute',
  },
  login: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  login1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  loginPosition: {
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  backTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  atasPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  namaTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  passwordTypo: {
    left: 19,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  inputanLayout: {
    height: 39,
    position: "absolute",
  },
  loginChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorSteelblue_100,
  },


  login1: {
    height: "36%",
    marginLeft: -47.5,
    top: "22%",
    color: Color.labelColorDarkPrimary,
    width: 94,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.hEADER_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },


  login: {
    marginLeft: -117,
    top: 609,
    width: 235,
    height: 50,
  },


  signUp: {
    marginLeft: -44,
    top: 156,
    fontWeight: "700",
    fontFamily: FontFamily.hEADER,
    color: Color.colorSteelblue_100,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.hEADER_size,
    left: "50%",
    position: "absolute",
  },


  ionchevronBackOutlineIcon: {
    width: 35,
    left: 0,
    top: 0,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },


  back: {
    top: "17.14%",
    left: "41.67%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },


  ionchevronBackOutlineParent: {
    top: 82,
    left: 21,
    width: 72,
    height: 35,
    position: "absolute",
  },





  nama: {
    top: 296,
    left: 32,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
  },
  prodi: {
    top: 348,
    left: 32,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
  },
  email: {
    top: 400,
    left: 32,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
  },
  password: {
    top: 452,
  },
  confirmPassword: {
    top: 492,
  },
  inputanSignupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderColor: Color.colorSteelblue_100,
    borderWidth: 1,
  },
  inputan: {
    width: "93.6%",
    top: "23.08%",
    left: "5.2%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightsteelblue,
  },
  inputanSignup: {
    width: 250,
    left: 113,
    height: 39,
    top: 235,
  },
  inputanSignup1: {
    top: 287,
    width: 250,
    left: 113,
    height: 39,
  },
  status1: {
    top: "20.51%",
    left: "17.65%",
  },
  status: {
    left: 14,
    width: 85,
    top: 235,
  },
  inputanSignup2: {
    top: 339,
    width: 250,
    left: 113,
    height: 39,
  },
  inputanSignup3: {
    top: 391,
    width: 250,
    left: 113,
    height: 39,
  },
  inputanSignup4: {
    top: 443,
    width: 250,
    left: 113,
    height: 39,
  },
  inputanSignup5: {
    top: 495,
    width: 250,
    left: 113,
    height: 39,
  },



});

export default SIGNUP1;
