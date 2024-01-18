import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const BooksDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.booksDetails}>
      <View style={[styles.booksDetailsChild, styles.bgIconLayout]} />
      <Image
        style={[styles.bgIcon, styles.bgIconLayout]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Pressable
        style={[styles.ionchevronBackOutlineParent, styles.ionchevronLayout]}
        onPress={() => navigation.navigate("TampilanUtama")}
      >
        <Image
          style={[styles.ionchevronBackOutlineIcon, styles.ionchevronLayout]}
          contentFit="cover"
          source={require("../assets/ionchevronbackoutline.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <Image
        style={styles.cover1Icon}
        contentFit="cover"
        source={require("../assets/cover-1.png")}
      />
      <Image
        style={styles.ratingIcon}
        contentFit="cover"
        source={require("../assets/rating.png")}
      />
      <Text
        style={[styles.membangunStartupSoftware, styles.eraDigitalSaatTypo]}
      >
        Membangun Startup Software House
      </Text>
      <Text style={[styles.eraDigitalSaat, styles.eraDigitalSaatTypo]}>
        Era digital saat ini sangat berpengaruh terhadap kemajuan perkembangan
        ekonomi. Salah satu contohnya ialah sistem e-commerce yang kini banyak
        digunakan oleh perusahaan startup.
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => navigation.navigate("History1")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.pinjamBuku, styles.pinjamBukuTypo]}>
          Pinjam Buku
        </Text>
      </Pressable>
      <View style={styles.statusbarIphone13statusba}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIconLayout: {
    width: 414,
    position: "absolute",
  },
  ionchevronLayout: {
    height: 35,
    position: "absolute",
  },
  backTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  eraDigitalSaatTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    height: 53,
    width: 232,
    marginLeft: -116,
    left: "50%",
    position: "absolute",
  },
  pinjamBukuTypo: {
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  booksDetailsChild: {
    left: -1,
    backgroundColor: "#2a1c0f",
    height: 896,
    display: "none",
    top: 0,
  },
  bgIcon: {
    top: -7,
    height: 903,
    left: 0,
  },
  ionchevronBackOutlineIcon: {
    width: 35,
    left: 0,
    top: 0,
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
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  ionchevronBackOutlineParent: {
    top: 83,
    left: 22,
    width: 72,
  },
  cover1Icon: {
    marginLeft: -102,
    top: 133,
    borderRadius: Border.br_xl,
    width: 203,
    height: 303,
    left: "50%",
    position: "absolute",
  },
  ratingIcon: {
    marginLeft: -40,
    top: 497,
    width: 79,
    height: 16,
    left: "50%",
    position: "absolute",
  },
  membangunStartupSoftware: {
    marginLeft: -125,
    top: 462,
    width: 249,
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
  },
  eraDigitalSaat: {
    marginLeft: -152,
    top: 535,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 304,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue_100,
    top: 0,
  },
  pinjamBuku: {
    marginLeft: -57,
    top: 12,
    lineHeight: 28,
    color: Color.labelColorDarkPrimary,
    width: 114,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    fontWeight: "700",
  },
  rectangleParent: {
    top: 680,
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
    width: 54,
    top: 1,
    textAlign: "center",
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
  booksDetails: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BooksDetails;
