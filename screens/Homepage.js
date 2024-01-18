import * as React from "react";
import { Text, StyleSheet, View, Pressable, FlatList, Dimensions, TouchableOpacity, TextInput, handleSearchButton, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const { width: screenWidth } = Dimensions.get("window");

const Homepage = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('');
};


  
  const data = [
    require("../assets/book-1.png"),
    require("../assets/book-2.png"),
    require("../assets/book-3.png"),
    require("../assets/book-4.png"),
    require("../assets/book-5.png"),
  ];

  const categories = [
    { id: 1, name: 'Uang & Investasi' },
    { id: 2, name: 'Motivation & Inspiration' },
    { id: 3, name: 'Sains' },
    { id: 4, name: 'Fantasi' },
    { id: 5, name: 'Edukasi' },
    { id: 6, name: 'Kesehatan & Nutrisi' },
    { id: 7, name: 'Komik & Grafis' },
    { id: 8, name: 'Horror' },
    { id: 9, name: 'Psikologi' },
  ];
  

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.bookIcon} source={item} />
    </View>
  );
  
  return (
    <View style={styles.homepage}>
      
      <View style={styles.hiNurfauzanParent}>

      

        
        <Text style={styles.hiNurfauzan}>Hi, Nurfauzan</Text>
        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/ellipse-1.png")} />
        <Text style={styles.mauCariBuku}>Mau cari buku apa hari ini ?</Text>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search..." onChangeText={(text) => handleSearch(text)}/>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupParent}>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth}
          decelerationRate="fast"
          pagingEnabled/>
        </View>

        <View style={[styles.card2Parent, styles.card2ParentLayout]}>
          <View style={styles.card2}>
            <View style={styles.kategoriBukuRareAdaDisiniParent}>
              <Text style={styles.kategoriBukuRare}>Kategori buku rare ada disini</Text>
              <Text style={styles.seeMore}>See more..</Text>
            </View>
          </View>
          <Image style={styles.graduationIsometric1Icon} contentFit="cover" source={require("../assets/graduationisometric-1.png")} />
        </View>

        <Text style={styles.bukuFavorit}>Buku Favorit</Text>


        <View style={[styles.category, styles.card2ChildShadowBox]}>

          <View style={[styles.categoryChild, styles.categoryChildLayout]} />
          <View style={[styles.categoryItem, styles.categoryPosition]} />
          <View style={[styles.categoryInner, styles.categoryPosition]} />
          <View style={[styles.categoryChild1, styles.categoryChildPosition]} />
          <View style={[styles.categoryChild2, styles.categoryChildPosition]} />
          <View style={[styles.categoryChild3, styles.categoryChildPosition]} />
          <View style={[styles.categoryChild4, styles.categoryChildLayout]} />
          <View style={[styles.categoryChild5, styles.categoryChildLayout]} />
          <View style={[styles.categoryChild6, styles.categoryPosition]} />

          <Text style={styles.category1}>Kategori</Text>

          <Text style={[styles.uangInvestasi, styles.uangInvestasiTypo]}>Uang & Investasi</Text>
          <Text style={[styles.motivationInspiration, styles.uangInvestasiTypo]}>Motivation & Inspiration</Text>
          <Text style={[styles.sains, styles.sainsTypo]}>Sains</Text>
          <Text style={[styles.fantasi, styles.sainsTypo]}>Fantasi</Text>
          <Text style={styles.edukasi}>Edukasi</Text>
          <Text style={[styles.kesehatanNutrisi, styles.horrorPosition]}>Kesehatan & Nutrisi</Text>
          <Text style={[styles.komikGrafis, styles.horrorPosition]}>Komik & Grafis</Text>
          <Text style={[styles.horror, styles.textLayout]}>Horror</Text>
          <Text style={[styles.psikologi, styles.sainsTypo]}>Psikologi</Text>
         

        </View>



      </View>

      
      <View style={[styles.footer, styles.atasLayout]} />
      <Pressable style={[styles.wrapper, styles.wrapperPosition]} onPress={() => navigation.navigate("Profil")}>

        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-211.png")} />

      </Pressable>
      <Pressable style={[styles.container, styles.wrapperPosition]} onPress={() => navigation.navigate("Booking")}>

        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-182.png")} />

      </Pressable>

      <Pressable style={styles.frame} onPress={() => navigation.navigate("TampilanUtama")}>

        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-17.png")} />

      </Pressable>

      <Image style={[styles.homepageChild, styles.iconLayout]} contentFit="cover" source={require("../assets/group-26.png")} />

      <View style={[styles.atas, styles.atasLayout]} />
      

    </View>
  );
};

const styles = StyleSheet.create({

  searchButton: {
    backgroundColor: Color.colorSteelblue_100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    left: "210%",
  },

  searchButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 45,
    paddingHorizontal: 12,
    top: 80,
    width: "70%",
    left: 17,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  
  itemContainer: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  bookIcon: {
    width: "34%",
    height: "100%",
    resizeMode: "cover",
  },

  iconLayout1: {
    height: 175,
    width: 130,
    borderRadius: Border.br_xl,
    top: 2,
    position: "absolute",
  },

  categoryChildLayout: {
    height: 42,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xl,
    top: 0,
    position: "absolute",
  },

  categoryPosition: {
    top: 53,
    height: 42,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },

  categoryChildPosition: {
    top: 106,
    height: 42,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },

  sainsTypo: {
    width: 72,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },

  horrorPosition: {
    top: 66,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },

  atasLayout: {
    height: 56,
    backgroundColor: Color.colorSteelblue_100,
    width: 390,
    left: 0,
    position: "absolute",
  },

  wrapperPosition: {
    top: "94.19%",
    position: "absolute",
  },

  hiNurfauzan: {
    top: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_lg,
    left: 16,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },

  frameChild: {
    left: 304,
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },

  mauCariBuku: {
    top: 51,
    textAlign: "left",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: FontSize.hEADER_size,
    color: Color.colorDimgray_200,
    lineHeight: 22,
    letterSpacing: 0,
    left: 16,
    position: "absolute",
  },

  book1Icon: {
    height: 176,
    width: 130,
    borderRadius: Border.br_xl,
    top: 2,
    left: 10,
    position: "absolute",
  },

  groupContainer: {
    left: 170,
  },

  groupFrame: {
    left: 348,
  },

  groupView: {
    left: 506,
  },

  groupWrapper1: {
    left: 685,
  },

  groupParent: {
    top: 415,
    width: 370,
    height: 180,
    left: 12,
    position: "absolute",
  },

  kategoriBukuRare: {
    color: Color.colorDarkslategray_200,
    left: "0%",
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },

  seeMore: {
    top: "67.65%",
    left: "0.64%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },

  kategoriBukuRareAdaDisiniParent: {
    height: "58.12%",
    width: "44.86%",
    top: -50,
    right: "52%",
    bottom: "20.51%",
    left: "3.14%",
    position: "absolute",
  },

  card2: {
    top: 17,
    height: 117,
    width: 350,
    left: 0,
    position: "absolute",
  },

  graduationIsometric1Icon: {
    left: 179,
    width: 171,
    height: 128,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },

  card2Parent: {
    top: 600,
  },

  card2Item: {
    elevation: 80,
    shadowRadius: 80,
    shadowColor: "rgba(0, 255, 233, 0.02)",
    backgroundColor: Color.colorAliceblue,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    height: "100%",
    width: "100%",
  },

  bukuFavorit: {
    top: 360,
    color: "#666a70",
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.hEADER,
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 25,
    position: "absolute",
  },

  categoryChild: {
    left: 2,
    width: 174,
  },

  categoryItem: {
    width: 149,
    left: 0,
  },

  categoryInner: {
    left: 160,
    width: 113,
  },

  categoryChild1: {
    width: 103,
    left: 0,
  },

  categoryChild2: {
    left: 115,
    width: 92,
  },

  categoryChild3: {
    left: 219,
    width: 142,
  },

  categoryChild4: {
    left: 189,
    width: 78,
  },

  categoryChild5: {
    left: 279,
    width: 84,
  },

  categoryChild6: {
    width: 79,
    left: 285,
  },

  uangInvestasi: {
    left: 239,
    top: 117,
  },

  motivationInspiration: {
    left: 15,
    top: -10,
  },

  sains: {
    left: 192,
    top: 10,
  },

  fantasi: {
    top: 10,
    left: 286,
  },

  edukasi: {
    left: 122,
    width: 81,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.helvetica,
    top: 117,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },

  kesehatanNutrisi: {
    width: 136,
    textAlign: "center",
    left: 8,
  },

  komikGrafis: {
    left: 167,
    width: 103,
    textAlign: "center",
  },

  horror: {
    left: 305,
    top: 64,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },

  psikologi: {
    left: 16,
    top: 117,
  },

  category1: {
    top: -32,
    letterSpacing: 0.1,
    lineHeight: 20,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.helvetica,
    left: 5,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },

  category: {
    top: 130,
    shadowColor: "#68e1fd",
    shadowRadius: 10,
    elevation: 10,
    width: 364,
    height: 148,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    left: 5,
  },

  frameItem: {
    marginLeft: -156,
    top: 105,
    width: 313,
    height: 38,
    left: "50%",
    position: "absolute",
  },

  hiNurfauzanParent: {
    top: 78,
    width: 382,
    height: 796,
    left: 8,
    position: "absolute",
  },

  footer: {
    top: 788,
  },

  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },

  frame: {
    left: "32%",
    top: "96%",
    right: "58.59%",
    bottom: "2.07%",
    width: "7%",
    height: "3.26%",
    position: "absolute",
  },

  homepageChild: {
    height: "3.28%",
    width: "6.74%",
    top: "96.31%",
    right: "83%",
    bottom: "2.41%",
    left: "10.26%",
    position: "absolute",
  },

  container: {
    left: "55%",
    width: "9%",
    height: "3%",
    marginTop: 15,
  },

  wrapper: {
    left: "80%",
    marginTop: 15,
    width: 22,
    height: 27,
    
  },

  homepage: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;