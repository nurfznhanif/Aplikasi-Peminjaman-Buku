import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Booking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.booking}>
      <View style={[styles.historyIsi, styles.book1Layout]}>
        <View style={[styles.book1, styles.book1Layout]}>
          <Text style={[styles.dasarDasarPemogramanDengan, styles.dasarTypo]}>
            Dasar-Dasar Pemograman Dengan Python
          </Text>
          <Text style={[styles.text, styles.dasarTypo]}>
            1/12/2021 - 8/12/2021
          </Text>
          <View style={styles.book1Child} />
          <Image
            style={styles.cover2Icon}
            contentFit="cover"
            source={require("../assets/cover-2.png")}
          />
        </View>
      </View>
      <View style={[styles.footer, styles.footerLayout]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-211.png")}
        />
      </Pressable>
      <Image
        style={[styles.bookingChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-181.png")}
      />
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("TampilanUtama")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={[styles.statusbarIphone13statusba, styles.footerLayout]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text1, styles.text1Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text1Position]}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  book1Layout: {
    height: 113,
    width: 340,
    position: "absolute",
  },
  dasarTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  footerLayout: {
    width: 390,
    position: "absolute",
  },
  wrapperPosition: {
    top: "94.08%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text1Position: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  dasarDasarPemogramanDengan: {
    left: 160,
    color: Color.colorDarkslategray_100,
    textAlign: "right",
    width: 177,
    top: 0,
  },
  text: {
    top: 79,
    left: 192,
    lineHeight: 22,
    color: Color.colorSkyblue,
    textAlign: "left",
    width: 148,
  },
  book1Child: {
    top: 107,
    backgroundColor: Color.colorSilver,
    height: 1,
    left: 0,
    width: 340,
    position: "absolute",
  },
  cover2Icon: {
    top: -1,
    left: -1,
    borderRadius: Border.br_xl,
    width: 100,
    height: 100,
    position: "absolute",
  },
  book1: {
    left: 0,
    top: 0,
  },
  historyIsi: {
    top: 144,
    left: 25,
  },
  footer: {
    marginLeft: -195,
    top: 787,
    backgroundColor: Color.colorSteelblue_100,
    height: 56,
    left: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "81.54%",
    right: "10.62%",
    bottom: "1.78%",
    width: "7.85%",
    height: "4.15%",
  },
  bookingChild: {
    height: "4.16%",
    width: "11.72%",
    right: "31.87%",
    bottom: "1.77%",
    left: "56.41%",
    top: "94.08%",
    position: "absolute",
  },
  container: {
    left: "34.36%",
    top: "94.55%",
    right: "58.59%",
    bottom: "2.19%",
    width: "7.05%",
    height: "3.26%",
    position: "absolute",
  },
  vector: {
    left: "10.26%",
    top: "94.19%",
    right: "83%",
    bottom: "2.52%",
    width: "6.74%",
    height: "3.28%",
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
  text1: {
    fontSize: FontSize.defaultBoldBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody,
    color: Color.colorGray_200,
    textAlign: "center",
    height: 20,
    width: 54,
    top: 1,
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
    height: 47,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  booking: {
    backgroundColor: "#1371a5",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Booking;
