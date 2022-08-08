import { View, Text, TextInput, Image } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={assets.logo} resizeMode="contain" />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
              position: "absolute",
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: "white",
          }}
        >
          Hello, Louis Tran 👋👋👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: "white",
            marginTop: SIZES.base / 2,
          }}
        >
          Let's get closer!
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            borderRadius: SIZES.font,
            width: "100%",
            backgroundColor: COLORS.gray,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ marginRight: SIZES.base, width: 20, height: 20 }}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Search NFTs..."
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
