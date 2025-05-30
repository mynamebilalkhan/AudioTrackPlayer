import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AudioPlayerProvider } from '../context/AudioPlayerContext';
import "../globals.css";

export default function RootLayout() {
     return (
          <SafeAreaProvider>
               <View className="flex-1">
                    <AudioPlayerProvider>
                         <Stack 
                              screenOptions={{
                                   headerShown: false,
                              }}
                         />
                    </AudioPlayerProvider>
               </View>
          </SafeAreaProvider>
     );
};