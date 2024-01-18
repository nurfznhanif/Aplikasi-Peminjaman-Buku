import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AlphabeticKeyboard = () => {
  return (
    <View style={styles.alphabetickeyboard}>
      <View style={[styles.keys, styles.keysPosition]}>
        <View style={[styles.topRow, styles.keyPosition7]}>
          <View style={[styles.key, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>Q</Text>
          </View>
          <View style={[styles.key1, styles.keyPosition6]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>W</Text>
          </View>
          <View style={[styles.key2, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>E</Text>
          </View>
          <View style={[styles.key3, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>R</Text>
          </View>
          <View style={[styles.key4, styles.keyPosition5]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>T</Text>
          </View>
          <View style={[styles.key5, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>Y</Text>
          </View>
          <View style={[styles.key6, styles.keyPosition4]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>U</Text>
          </View>
          <View style={[styles.key7, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>I</Text>
          </View>
          <View style={[styles.key8, styles.keyPosition3]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>O</Text>
          </View>
          <View style={[styles.key9, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>P</Text>
          </View>
        </View>
        <View style={styles.middleRow}>
          <View style={[styles.key10, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>A</Text>
          </View>
          <View style={[styles.key11, styles.keyPosition6]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>S</Text>
          </View>
          <View style={[styles.key12, styles.keyPosition2]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>D</Text>
          </View>
          <View style={[styles.key13, styles.keyPosition5]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter13, styles.letterPosition1]}>F</Text>
          </View>
          <View style={[styles.key14, styles.keyPosition1]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter14, styles.letterPosition1]}>G</Text>
          </View>
          <View style={[styles.key15, styles.keyPosition4]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter13, styles.letterPosition1]}>H</Text>
          </View>
          <View style={[styles.key16, styles.keyPosition]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>J</Text>
          </View>
          <View style={[styles.key17, styles.keyPosition3]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>K</Text>
          </View>
          <View style={[styles.key18, styles.keyPosition7]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter, styles.letterPosition1]}>L</Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <View style={[styles.keys1, styles.keyPosition7]}>
            <View style={[styles.key19, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition1]}>Z</Text>
            </View>
            <View style={[styles.key20, styles.keyPosition6]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition1]}>X</Text>
            </View>
            <View style={[styles.key21, styles.keyPosition7]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition1]}>C</Text>
            </View>
            <View style={[styles.key22, styles.keyPosition4]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter13, styles.letterPosition1]}>V</Text>
            </View>
            <View style={[styles.key23, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter14, styles.letterPosition1]}>B</Text>
            </View>
            <View style={[styles.key24, styles.keyPosition3]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter13, styles.letterPosition1]}>N</Text>
            </View>
            <View style={[styles.key25, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition1]}>M</Text>
            </View>
          </View>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            contentFit="cover"
            source={require("../assets/-key.png")}
          />
          <Image
            style={[styles.keyIcon1, styles.keyIconLayout]}
            contentFit="cover"
            source={require("../assets/-key1.png")}
          />
        </View>
      </View>
      <View style={[styles.bottomRow1, styles.bottomRow1FlexBox]}>
        <View style={styles.key26}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={[styles.letter26, styles.letterPosition]}>123</Text>
        </View>
        <View style={[styles.key27, styles.keySpaceBlock]}>
          <View style={styles.keycontainerShadowBox1} />
          <Text style={[styles.letter27, styles.letterPosition]}>space</Text>
        </View>
        <View style={[styles.key28, styles.keySpaceBlock]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={[styles.letter26, styles.letterPosition]}>return</Text>
        </View>
      </View>
      <View style={[styles.emojiDictation, styles.bottomRow1FlexBox]}>
        <Image
          style={styles.iconEmoji}
          contentFit="cover"
          source={require("../assets/icon--emoji.png")}
        />
        <Image
          style={styles.iconDictation}
          contentFit="cover"
          source={require("../assets/icon--dictation.png")}
        />
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keysPosition: {
    left: 3,
    right: 3,
  },
  keyPosition7: {
    top: 0,
    height: 42,
    position: "absolute",
  },
  letterPosition1: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
    left: 0,
    position: "absolute",
  },
  keyPosition6: {
    left: 39,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition5: {
    right: 195,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition4: {
    right: 117,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition3: {
    right: 39,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition2: {
    right: 235,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition1: {
    left: 157,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition: {
    left: 235,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  bottomRow1FlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  letterPosition: {
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 21,
    fontSize: FontSize.defaultRegularCallout_size,
    marginTop: -10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  keycontainerShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  letter: {
    width: 33,
  },
  key: {
    right: 351,
    height: 42,
    left: 0,
  },
  key1: {
    right: 312,
  },
  key2: {
    right: 273,
    left: 78,
    height: 42,
  },
  key3: {
    right: 234,
    left: 117,
    height: 42,
  },
  key4: {
    left: 156,
  },
  key5: {
    right: 156,
    left: 195,
    height: 42,
  },
  key6: {
    left: 234,
  },
  key7: {
    left: 273,
    right: 78,
    height: 42,
  },
  key8: {
    left: 312,
  },
  key9: {
    left: 351,
    height: 42,
    right: 0,
  },
  topRow: {
    height: 42,
    left: 0,
    right: 0,
  },
  key10: {
    right: 313,
    height: 42,
    left: 0,
  },
  key11: {
    right: 274,
  },
  key12: {
    left: 78,
  },
  letter13: {
    width: 34,
  },
  key13: {
    left: 117,
  },
  letter14: {
    width: 32,
  },
  key14: {
    right: 157,
  },
  key15: {
    left: 195,
  },
  key16: {
    right: 78,
  },
  key17: {
    left: 274,
  },
  key18: {
    left: 313,
    height: 42,
    right: 0,
  },
  middleRow: {
    top: 54,
    right: 19,
    left: 19,
    height: 42,
    position: "absolute",
  },
  key19: {
    left: 0,
  },
  key20: {
    right: 196,
  },
  key21: {
    right: 157,
    left: 78,
    height: 42,
  },
  key22: {
    left: 117,
  },
  key23: {
    right: 79,
  },
  key24: {
    left: 195,
  },
  key25: {
    right: 0,
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
  },
  keyIcon: {
    left: 0,
  },
  keyIcon1: {
    right: 0,
  },
  bottomRow: {
    top: 108,
    height: 42,
    left: 0,
    right: 0,
    position: "absolute",
  },
  keys: {
    top: 8,
    height: 150,
    position: "absolute",
  },
  keycontainerShadowBox: {
    backgroundColor: Color.colorDarkslategray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  letter26: {
    width: 91,
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    width: 190,
  },
  key27: {
    flex: 1,
  },
  key28: {
    width: 91,
  },
  bottomRow1: {
    top: 170,
    left: 3,
    right: 3,
  },
  iconEmoji: {
    width: 27,
    height: 27,
  },
  iconDictation: {
    width: 19,
    height: 28,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    bottom: 0,
    left: 1,
    height: 34,
    right: 0,
    position: "absolute",
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 390,
    height: 290,
    overflow: "hidden",
  },
});

export default AlphabeticKeyboard;
