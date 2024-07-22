import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit-reg': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-med': require('./../assets/fonts/Outfit-Medium.ttf'),
    'quicksand': require('./../assets/fonts/Quicksand-Bold.ttf')
  })


  return (
    // <Stack screenOptions={{
    //   headerShown: false
    // }}>
    //   <Stack.Screen name="index" />
    // </Stack>
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='(tabs)'/>
    </Stack>
  );
}
