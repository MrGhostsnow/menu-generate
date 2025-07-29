import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";

export default function CardMenu() {
  return (
    <ScrollView style={[t.flex1, t.bgGray100, t.p4]}>
      <Text style={[t.textGray800, t.text2xl, t.fontBold, t.mB4]}>Monday</Text>

      <View
        style={[
          t.flexRow,
          t.justifyBetween,
          t.roundedLg,
          t.bgWhite,
          t.p4,
          t.mB4,
        ]}
      >
        <View style={[t.flex, t.mR4]}>
          <Text style={[t.textGray500, t.textSm, t.mB1]}>Breakfast</Text>
          <Text style={[t.textGray900, t.textBase, t.fontBold, t.mB1]}>
            Oatmeal with Fruits
          </Text>
          <Text style={[t.textGray500, t.textSm]}>
            Oats, fresh fruits, honey
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
