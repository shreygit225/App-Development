const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ItemFlow from "./components/ItemFlow";
import IPhone11ProMax from "./screens/IPhone11ProMax";
import IPhone11ProMax1 from "./screens/IPhone11ProMax1";
import IPhone11ProMax2 from "./screens/IPhone11ProMax2";
import IPhone11ProMax3 from "./screens/IPhone11ProMax3";
import IPhone11ProMax4 from "./screens/IPhone11ProMax4";
import IPhone11ProMax5 from "./screens/IPhone11ProMax5";
import IPhone11ProMax6 from "./screens/IPhone11ProMax6";
import IPhone11ProMax7 from "./screens/IPhone11ProMax7";
import IPhone11ProMax8 from "./screens/IPhone11ProMax8";
import IPhone11ProMax9 from "./screens/IPhone11ProMax9";
import IPhone11ProMax10 from "./screens/IPhone11ProMax10";
import IPhone11ProMax11 from "./screens/IPhone11ProMax11";
import IPhone11ProMax12 from "./screens/IPhone11ProMax12";
import IPhone11ProMax13 from "./screens/IPhone11ProMax13";
import IPhone11ProMax14 from "./screens/IPhone11ProMax14";
import IPhone11ProMax15 from "./screens/IPhone11ProMax15";
import IPhone11ProMax16 from "./screens/IPhone11ProMax16";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "TiroBangla-Regular": require("./assets/fonts/TiroBangla-Regular.ttf"),
    "ArchivoBlack-Regular": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "Arimo-Regular": require("./assets/fonts/Arimo-Regular.ttf"),
    "Alatsi-Regular": require("./assets/fonts/Alatsi-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
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
              name="IPhone11ProMax"
              component={IPhone11ProMax}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax1"
              component={IPhone11ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax2"
              component={IPhone11ProMax2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax3"
              component={IPhone11ProMax3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax4"
              component={IPhone11ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax5"
              component={IPhone11ProMax5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax6"
              component={IPhone11ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax7"
              component={IPhone11ProMax7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax8"
              component={IPhone11ProMax8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax9"
              component={IPhone11ProMax9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax10"
              component={IPhone11ProMax10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax11"
              component={IPhone11ProMax11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax12"
              component={IPhone11ProMax12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax13"
              component={IPhone11ProMax13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax14"
              component={IPhone11ProMax14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax15"
              component={IPhone11ProMax15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMax16"
              component={IPhone11ProMax16}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
