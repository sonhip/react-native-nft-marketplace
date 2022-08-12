import { SafeAreaView, Text, View } from "react-native";
import { FocusedStatusBar, RectButton } from "../components";
import { SHADOWS, SIZES } from "../constants";

export default function Details({ route, navigation }) {
  console.log("🚀 ~ file: Details.js ~ line 5 ~ Details ~ route", route);
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="red"
        translucent={true}
      />
      <View style={{ width: "100%" }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  );
}
