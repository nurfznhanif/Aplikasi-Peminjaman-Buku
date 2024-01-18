import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Profil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profil}>
      <Image
        style={styles.formula1BahrainMarchTestinIcon}
        contentFit="cover"
        source={require("../assets/formula1bahrainmarchtestin3-1.png")}
      />
      <View style={styles.profil1}>
        <Image
          style={styles.kataKataBucinPatahHati1Icon}
          contentFit="cover"
          source={require("../assets/1188411katakatabucinpatahhati-1.png")}
        />
        <Image
          style={styles.chevronForwardOutline2Icon}
          contentFit="cover"
          source={require("../assets/chevronforwardoutline-2.png")}
        />
        <LinearGradient
          style={[styles.profilChild, styles.backgroundShadowBox]}
          locations={[0, 1]}
          colors={["#35d2f4", "#03666c"]}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.receiptIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/receipt.png")}
        />
        <Image
          style={[styles.happySharpIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/happysharp.png")}
        />
        <View style={styles.profilItem} />
        <Image
          style={styles.profilInnerPosition}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={styles.nurfauzan}>Nurfauzan</Text>
        <Text style={[styles.shareWithFriends, styles.reviewTypo]}>
          Share with Friends
        </Text>
        <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
        <Text style={[styles.mrhangmailcom, styles.reviewTypo]}>
          MRHan@gmail.com
        </Text>
        <View style={styles.view}>
          <View style={[styles.iconicSquare, styles.backgroundPosition]}>
            <View style={[styles.background, styles.backgroundPosition]} />
            <View style={[styles.icon, styles.iconLayout]}>
              <View
                style={[styles.miscIconsBackground, styles.login2ChildPosition]}
              >
                <View style={[styles.iconsButton, styles.iconsButtonBg]} />
              </View>
              <Image
                style={[styles.vectorIcon2, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.personCircleOutlineIcon, styles.profilInnerPosition]}
          contentFit="cover"
          source={require("../assets/personcircleoutline.png")}
        />
        <View style={[styles.statusbarIphone13statusba, styles.footerPosition]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
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
              style={[styles.iconMobileSignal, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon--mobile-signal.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.footer, styles.footerPosition]} />
      <Image
        style={[styles.groupIcon, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Booking")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/group-18.png")}
        />
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("TampilanUtama")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.login2}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.login2Child, styles.iconsButtonBg]} />
        <Text style={[styles.login, styles.textFlexBox]}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  reviewTypo: {
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  backgroundPosition: {
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  },
  login2ChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconsButtonBg: {
    backgroundColor: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  iconPosition: {
    width: 18,
    left: "50%",
    position: "absolute",
  },
  profilInnerPosition: {
    height: 150,
    width: 150,
    left: 134,
    top: 332,
    position: "absolute",
  },
  footerPosition: {
    width: 390,
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    top: "94.19%",
    position: "absolute",
  },
  formula1BahrainMarchTestinIcon: {
    top: -358,
    width: 1200,
    height: 800,
    left: 0,
    position: "absolute",
  },
  kataKataBucinPatahHati1Icon: {
    top: 6,
    left: -4,
    width: 423,
    height: 567,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  chevronForwardOutline2Icon: {
    top: 254,
    left: 20,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  profilChild: {
    top: 407,
    left: 28,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 50,
    elevation: 50,
    width: 350,
    height: 376,
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
  },
  vectorIcon: {
    top: "74.29%",
    bottom: "24.2%",
    left: "83.33%",
    right: "15.22%",
    width: "1.45%",
    height: "1.51%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    top: "79.23%",
    bottom: "19.26%",
    left: "83.33%",
    right: "15.22%",
    width: "1.45%",
    height: "1.51%",
    maxWidth: "100%",
    position: "absolute",
  },
  receiptIcon: {
    top: 632,
    left: 62,
    overflow: "hidden",
  },
  happySharpIcon: {
    top: 595,
    left: 65,
    overflow: "hidden",
  },
  profilItem: {
    top: 567,
    left: 56,
    backgroundColor: Color.colorSilver,
    width: 302,
    height: 1,
    position: "absolute",
  },
  nurfauzan: {
    marginLeft: -44,
    top: 501,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
  },
  shareWithFriends: {
    top: 597,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 98,
    color: Color.labelColorDarkPrimary,
  },
  review: {
    top: 635,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 98,
    color: Color.labelColorDarkPrimary,
  },
  mrhangmailcom: {
    marginLeft: -60,
    top: 527,
    fontSize: 12,
    lineHeight: 19,
    left: "50%",
  },
  background: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    position: "absolute",
  },
  iconsButton: {
    borderRadius: Border.br_11xs,
    display: "none",
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  },
  miscIconsBackground: {
    position: "absolute",
  },
  vectorIcon2: {
    marginTop: -9,
    marginLeft: -9,
    height: 18,
    top: "50%",
  },
  icon: {
    marginTop: -12,
    marginLeft: -12,
    top: "50%",
    left: "50%",
  },
  iconicSquare: {
    position: "absolute",
  },
  view: {
    top: 433,
    left: 305,
    width: 40,
    height: 40,
    position: "absolute",
  },
  personCircleOutlineIcon: {
    overflow: "hidden",
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
    top: 1,
    width: 54,
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
    height: 12,
    top: 1,
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbarIphone13statusba: {
    marginLeft: -199,
    top: 168,
    height: 47,
    overflow: "hidden",
  },
  profil1: {
    marginLeft: -203,
    top: -168,
    width: 414,
    height: 809,
    left: "50%",
    position: "absolute",
  },
  footer: {
    marginLeft: -195,
    top: 788,
    backgroundColor: Color.colorSteelblue_100,
    height: 56,
  },
  groupIcon: {
    height: "4.15%",
    width: "7.85%",
    right: "10.62%",
    bottom: "1.66%",
    left: "81.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    left: "56.41%",
    right: "31.87%",
    bottom: "1.65%",
    width: "11.72%",
    height: "4.16%",
  },
  container: {
    left: "34.36%",
    top: "94.67%",
    right: "58.59%",
    bottom: "2.07%",
    width: "7.05%",
    height: "3.26%",
    position: "absolute",
  },
  vector: {
    left: "10.26%",
    top: "94.31%",
    right: "83%",
    bottom: "2.41%",
    width: "6.74%",
    height: "3.28%",
    position: "absolute",
  },
  login2Child: {
    borderRadius: Border.br_6xl,
    borderStyle: "solid",
    borderColor: Color.colorSteelblue_100,
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  login: {
    height: "36%",
    width: "87.23%",
    top: "22%",
    left: "6.38%",
    fontSize: FontSize.hEADER_size,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorSteelblue_100,
  },
  login2: {
    top: 547,
    left: 77,
    width: 235,
    height: 50,
    position: "absolute",
  },
  profil: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profil;
