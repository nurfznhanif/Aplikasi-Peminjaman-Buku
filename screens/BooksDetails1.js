import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const BooksDetails1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.booksDetails}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <View style={styles.statusbarIphone13statusba}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text, styles.textLayout]}>9:41</Text>
          </View>
        </View>
        <View style={[styles.rightSide, styles.rightSidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.rightSidePosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.iconMobileSignal, styles.textPosition]}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <Image
        style={styles.cover1Icon}
        contentFit="cover"
        source={require("../assets/cover-11.png")}
      />
      <Image
        style={styles.ratingIcon}
        contentFit="cover"
        source={require("../assets/rating1.png")}
      />
      <Text style={[styles.harryPotterAnd, styles.harryPotterAndClr]}>
        Harry Potter and the Goblet of Fire
      </Text>
      <Text style={[styles.padaTahunKeempatnya, styles.backTypo1]}>
        Pada tahun keempatnya di Hogwarts, Harry dijebak untuk berkompetisi
        dalam Turnamen Triwizard. Namun, ia harus bersaing dengan para penyihir
        senior dan juga menghadapi berbagai makhluk magis berbahaya.
      </Text>
      <View style={styles.booksDetailsChild} />
      <Text style={[styles.pinjamBuku, styles.backTypo]}>Pinjam Buku</Text>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Pressable
        style={[styles.ionchevronBackOutlineParent, styles.ionchevronLayout]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.ionchevronBackOutlineIcon, styles.ionchevronLayout]}
          contentFit="cover"
          source={require("../assets/ionchevronbackoutline.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 22,
    letterSpacing: 0,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  harryPotterAndClr: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  backTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  backTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  ionchevronLayout: {
    height: 35,
    position: "absolute",
  },
  bgIcon: {
    top: -7,
    width: 414,
    height: 903,
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    width: 164,
    height: 32,
    left: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.defaultBoldBody_size,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody,
    color: Color.colorGray_200,
    height: 20,
    textAlign: "center",
    top: 1,
    position: "absolute",
    width: 54,
    lineHeight: 22,
    letterSpacing: 0,
    left: 0,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  batteryIcon: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    left: "50%",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbarIphone13statusba: {
    width: 390,
    height: 47,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cover1Icon: {
    marginLeft: -101,
    top: 133,
    borderRadius: Border.br_xl,
    width: 203,
    height: 303,
    left: "50%",
    position: "absolute",
  },
  ratingIcon: {
    marginLeft: -40,
    top: 481,
    width: 80,
    height: 16,
    left: "50%",
    position: "absolute",
  },
  harryPotterAnd: {
    marginLeft: -119,
    top: 462,
    width: 239,
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    left: "50%",
    textAlign: "center",
  },
  padaTahunKeempatnya: {
    top: 536,
    left: 60,
    textAlign: "justify",
    width: 303,
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  booksDetailsChild: {
    top: 680,
    left: 79,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue_100,
    width: 232,
    height: 53,
    position: "absolute",
  },
  pinjamBuku: {
    marginLeft: -55,
    top: 692,
    lineHeight: 28,
    color: Color.labelColorDarkPrimary,
    width: 111,
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    left: "50%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    marginLeft: -187,
    top: 810,
    width: 375,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  ionchevronBackOutlineIcon: {
    width: 35,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  back: {
    top: "17.14%",
    left: "41.67%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0,
  },
  ionchevronBackOutlineParent: {
    top: 83,
    left: 22,
    width: 72,
  },
  booksDetails: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BooksDetails1;
