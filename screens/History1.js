import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const History1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.history}>
      <View style={[styles.historyChild, styles.childPosition]} />
      <Pressable
        style={[styles.ionchevronBackOutlineParent, styles.ionchevronLayout]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.ionchevronBackOutlineIcon, styles.ionchevronLayout]}
          contentFit="cover"
          source={require("../assets/ionchevronbackoutline.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <View style={[styles.historyInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildBg]} />
      </View>
      <Text style={[styles.formPeminjamanBuku, styles.simpanTypo]}>
        Form Peminjaman Buku
      </Text>
      <Image
        style={[styles.historyItem, styles.historyChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.historyChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <Image
        style={[styles.historyChild1, styles.historyChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <Image
        style={[styles.historyChild2, styles.historyChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <Image
        style={[styles.historyChild3, styles.historyChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <View style={[styles.rectangleView, styles.groupChildBg]} />
      <Text style={[styles.simpan, styles.simpanTypo]}>Simpan</Text>
      <Text style={[styles.textData, styles.textTypo]}>Nama</Text>
      <Text style={[styles.textData1, styles.textTypo]}>Kelas</Text>
      <Text style={[styles.textData2, styles.textTypo]}>NPM</Text>
      <Text style={[styles.textData3, styles.textTypo]}>Judul Buku</Text>
      <Text style={[styles.textData4, styles.textTypo]}>Tanggal Pinjam</Text>
      <View style={[styles.statusbarIphone13statusba, styles.childPosition]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  ionchevronLayout: {
    height: 35,
    position: "absolute",
  },
  groupChildLayout: {
    height: 41,
    width: 275,
  },
  groupChildBg: {
    backgroundColor: Color.colorSteelblue_100,
    position: "absolute",
  },
  simpanTypo: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  historyChildLayout: {
    height: 40,
    width: 212,
    borderRadius: Border.br_mini,
    left: 158,
    position: "absolute",
  },
  textTypo: {
    height: 36,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 24,
    letterSpacing: 0.2,
    left: 20,
    fontWeight: "700",
    fontSize: FontSize.defaultRegularCallout_size,
    textAlign: "left",
    position: "absolute",
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
  historyChild: {
    width: 416,
    height: 896,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
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
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  ionchevronBackOutlineParent: {
    top: 79,
    left: 21,
    width: 72,
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    height: 41,
    width: 275,
    left: 0,
    top: 0,
  },
  historyInner: {
    top: 125,
    left: 58,
    position: "absolute",
  },
  formPeminjamanBuku: {
    marginLeft: -92,
    top: 136,
    fontSize: FontSize.defaultRegularCallout_size,
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    left: "50%",
  },
  historyItem: {
    top: 514,
  },
  rectangleIcon: {
    top: 292,
  },
  historyChild1: {
    top: 218,
  },
  historyChild2: {
    top: 367,
  },
  historyChild3: {
    top: 440,
  },
  rectangleView: {
    top: 647,
    left: 84,
    borderRadius: Border.br_5xs,
    width: 247,
    height: 63,
  },
  simpan: {
    top: 662,
    left: 170,
    fontSize: 20,
    lineHeight: 32,
    width: 76,
  },
  textData: {
    top: 220,
    width: 82,
    height: 36,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 24,
    letterSpacing: 0.2,
    left: 20,
  },
  textData1: {
    top: 369,
    width: 82,
    height: 36,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 24,
    letterSpacing: 0.2,
    left: 20,
  },
  textData2: {
    top: 288,
    width: 82,
    height: 36,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 24,
    letterSpacing: 0.2,
    left: 20,
  },
  textData3: {
    top: 436,
    width: 85,
    height: 36,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 24,
    letterSpacing: 0.2,
    left: 20,
  },
  textData4: {
    top: 518,
    width: 127,
    height: 36,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 24,
    letterSpacing: 0.2,
    left: 20,
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
    textAlign: "center",
    height: 20,
    width: 54,
    top: 1,
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
    position: "absolute",
    overflow: "hidden",
  },
  history: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default History1;
