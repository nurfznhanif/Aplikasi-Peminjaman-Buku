const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Profil from "./screens/Profil";
import Booking from "./screens/Booking";
import BooksDetails from "./screens/BooksDetails";
import BooksDetails1 from "./screens/BooksDetails1";
import History1 from "./screens/History1";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Login2 from "./screens/Login2";
import SignUp from "./screens/SIGNUP1"
import Homepage from "./screens/Homepage";
import TampilanUtama from "./screens/TampilanUtama";
import AlphabeticKeyboard from "./components/AlphabeticKeyboard";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Booking"
              component={Booking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BooksDetails"
              component={BooksDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BooksDetails1"
              component={BooksDetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History1"
              component={History1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            /> 
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TampilanUtama"
              component={TampilanUtama}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
