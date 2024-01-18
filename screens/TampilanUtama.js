import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const TampilanUtama = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tampilanUtama}>
      <View style={styles.booksParent}>
        
        <View style={styles.books}>
          
          <View style={styles.books1}>
            
            <View style={[styles.book, styles.bookPosition]}>
  
              <View style={[styles.rating, styles.ratingIconLayout]}>

                <View style={[styles.star, styles.starPosition1]}>
                  <Image style={[styles.vectorIcon, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector5.png")} />
                </View>

                <View style={[styles.star1, styles.starPosition1]}>
                  <Image style={[styles.vectorIcon, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector6.png")} />
                </View>

                <View style={[styles.star2, styles.starPosition1]}>
                  <Image style={[styles.vectorIcon, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector5.png")} />
                </View>

                <View style={[styles.star3, styles.starPosition]}>
                  <Image style={[styles.vectorIcon, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector7.png")} />
                </View>

                <View style={[styles.star4, styles.starPosition]}>
                  <Image style={[styles.vectorIcon, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector8.png")} />
                </View>

                <Text style={[styles.farmakognosi, styles.dasarTypo]}> Farmakognosi </Text>

              </View>
            

              <Image style={[styles.daba549478349fdd753ee1f93bae61Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/daba549478349fdd753ee1f93bae61c3ikankumpulan-1.png")} />

            </View>

            <Pressable style={[styles.book1, styles.bookPosition]} onPress={() => navigation.navigate("BooksDetails")}>
              <Image style={[styles.ratingIcon, styles.ratingIconLayout]} contentFit="cover" source={require("../assets/rating2.png")} />
              <Image style={[styles.daba549478349fdd753ee1f93bae61Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/cover-12.png")} />
              <Text style={[styles.membangunStartupSoftware, styles.dasarTypo]}> Membangun Startup Software House </Text>
            </Pressable>

            <Text style={[styles.loadMore, styles.dasarTypo]}> Load More </Text>

            <View style={[styles.book2, styles.iconPosition]}>
              <Image style={[styles.ratingIcon1, styles.ratingIconLayout]} contentFit="cover" source={require("../assets/rating2.png")} />
              <Image styleSheettyle={[styles.icon, styles.iconPosition]} contentFit="cover" source={require("../assets/1362193-1.png")} />
              <Text style={[styles.dasarDasarPemrogramanDengan, styles.dasarTypo]}> Dasar-Dasar Pemrograman Dengan Python </Text>
            </View>

            <View style={[styles.book3, styles.bookPosition]}>
              <Image style={[styles.ratingIcon2, styles.ratingIconLayout]} contentFit="cover" source={require("../assets/rating3.png")} />
              <Image style={[styles.daba549478349fdd753ee1f93bae61Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/id-kiai2019mth08kiai-1.png")} />
              <Text style={[styles.englishConversation, styles.dasarTypo]}> English Conversation </Text>
            </View>

          </View>

        </View>

        <View style={[styles.footer, styles.atasLayout]} />

        <Pressable style={[styles.vector, styles.vectorPosition]} onPress={() => navigation.navigate("Profil")}>
          <Image style={[styles.icon1, styles.iconLayout1]} contentFit="cover" source={require("../assets/group-211.png")} />
        </Pressable>

        <Pressable style={[styles.vector1, styles.vectorPosition]} onPress={() => navigation.navigate("Booking")}>
          <Image style={[styles.icon1, styles.iconLayout1]} contentFit="cover" source={require("../assets/group-182.png")} />
        </Pressable>

        <Image style={[styles.vectorIcon5, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector9.png")} />
        <Image style={[styles.vectorIcon6, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector10.png")} />

        <Pressable style={styles.vector2} onPress={() => navigation.navigate("Homepage")}>
          <Image style={[styles.icon1, styles.iconLayout1]} contentFit="cover" source={require("../assets/vector2.png")} />
        </Pressable>

        <Pressable style={[styles.ionchevronBackOutlineParent, styles.ionchevronPosition]} onPress={() => navigation.navigate("Homepage")}>
          <Image style={[styles.ionchevronBackOutlineIcon, styles.ionchevronPosition]} contentFit="cover" source={require("../assets/ionchevronbackoutline.png")} />
          <Text style={styles.back}> Back </Text>
        </Pressable>

        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-23.png")} />

      </View>
    </View>  
  );
};

const styles = StyleSheet.create({
  bookPosition: {
    width: 350,
    left: 0,
    position: "absolute",
  },
  ratingIconLayout: {
    height: 16,
    width: 155,
    left: 0,
    position: "absolute",
  },
  starPosition1: {
    height: 24,
    width: 24,
    top: "50%",
    marginTop: -11.5,
    position: "absolute",
  },
  icon1Layout: {
    height: "100%",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  starPosition: {
    marginTop: -11,
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  dasarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: 220,
    borderRadius: Border.br_xl,
    top: 0,
  },
  iconPosition: {
    width: 352,
    left: 0,
    position: "absolute",
  },
  atasLayout: {
    height: 56,
    backgroundColor: Color.colorSteelblue_100,
    width: 390,
    left: 0,
    position: "absolute",
  },
  vectorPosition: {
    top: "93.57%",
    position: "absolute",
  },
  ionchevronPosition: {
    height: 35,
    top: 0,
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
  iconsButton: {
    right: 0,
    bottom: 0,
    borderRadius: 1,
    display: "none",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  miscIconsBackground: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon: {
    height: "47.5%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "27.5%",
    left: "25%",
    position: "absolute",
  },
  star: {
    left: -4,
  },
  star1: {
    left: 10,
  },
  star2: {
    left: 25,
  },
  star3: {
    left: 40,
  },
  star4: {
    left: 56,
  },
  farmakognosi: {
    top: -17,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  rating: {
    top: 242,
  },
  daba549478349fdd753ee1f93bae61Icon: {
    width: 350,
    left: 0,
    position: "absolute",
  },
  book: {
    top: 107,
    height: 258,
  },
  ratingIcon: {
    top: 249,
  },
  membangunStartupSoftware: {
    top: 229,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  book1: {
    top: 397,
    height: 265,
  },
  loadMore: {
    top: 1309,
    left: 138,
    color: Color.colorSkyblue,
    textAlign: "center",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  ratingIcon1: {
    top: 243,
  },
  icon: {
    height: 220,
    borderRadius: Border.br_xl,
    top: 0,
  },
  dasarDasarPemrogramanDengan: {
    top: 226,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  book2: {
    top: 698,
    height: 259,
  },
  ratingIcon2: {
    top: 245,
  },
  englishConversation: {
    top: 228,
    left: 2,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },

  
  book3: {
    top: 999,
    height: 261,
  },
  books1: {
    width: 433,
    height: 1343,
    top: 0,
    left: 0,
    position: "absolute",
  },
  books: {
    top: 13,
    left: 20,
    width: 384,
    height: 369,
    position: "absolute",
  },

  
  footer: {
    top: 706,
  },

  
  icon1: {
    height: "85%",
    width: "90%",
    left: "50.71%",
    right: "50.71%",
    bottom: "7%",
    

    
  },
  
  vector: {
    left: "78.71%",
    right: "13.71%",
    bottom: "1.84%",
    width: 24,
    height: 27,
  },

  vector1: {
    left: "54.46%",
    right: "34.23%",
    bottom: "1.82%",
    width: 35,
    height: 25,
  },

  
  vectorIcon5: {
    height: "3.25%",
    width: "6.14%",
    top: "94.09%",
    right: "60.69%",
    bottom: "2.65%",
    left: "33.17%",
    position: "absolute",
  },
  vectorIcon6: {
    height: "2.85%",
    width: "4.75%",
    top: "94.86%",
    right: "60.02%",
    bottom: "2.3%",
    left: "35.22%",
    position: "absolute",
  },

  
  vector2: {
    left: "9.9%",
    top: "93.7%",
    right: "83.59%",
    bottom: "2.66%",
    width: "6.51%",
    height: "3.64%",
    position: "absolute",
  },
  
  
  ionchevronBackOutlineIcon: {
    width: 35,
    left: 0,
    overflow: "hidden",
  },

  
  back: {
    top: "17.14%",
    left: "41.67%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  
  
  ionchevronBackOutlineParent: {
    left: 21,
    width: 72,
  },
  

  
  frameChild: {
    marginLeft: -163,
    top: 65,
    width: 313,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  

  
  booksParent: {
    top: 82,
    width: 404,
    height: 762,
    left: 0,
    position: "absolute",
  },

 
 

  
});

export default TampilanUtama;
