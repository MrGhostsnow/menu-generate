import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";

export default function RecipeScreen({ route }: { route: any }) {
  const { refeicao } = route.params;

  const ingredientes = [
    "1 lb pasta",
    "1 cup vegetais mistos (brócolis, cenoura, ervilha)",
    "1/2 cup creme de leite",
    "1/4 cup queijo parmesão",
    "Sal e pimenta a gosto",
  ];

  const preparo = [
    "Cozinhe a massa",
    "Refogue os vegetais",
    "Misture tudo com creme e queijo",
    "Tempere e sirva",
  ];

  return (
    <ScrollView style={[t.flex1, t.bgGray100]}>
      {/* Header */}
      <View
        style={[
          t.flexRow,
          t.itemsCenter,
          t.bgGray100,
          t.p4,
          t.pB2,
          t.justifyBetween,
        ]}
      >
        <Text style={[t.textLg, t.fontBold, t.flex1, t.textCenter, t.pT12]}>
          Pasta Primavera
        </Text>
      </View>

      {/* Ingredientes */}
      <Text style={[t.textLg, t.fontBold, t.pX4, t.pT12, t.pB2, t.textGray900]}>
        Ingredientes
      </Text>
      <Text
        style={[t.textBase, t.fontNormal, t.pX4, t.pB3, t.pT1, t.textGray900]}
      >
        {ingredientes.join(", ")}
      </Text>

      {/* Preparo */}
      <Text style={[t.textLg, t.fontBold, t.pX4, t.pT4, t.pB2, t.textGray900]}>
        Preparo
      </Text>
      {preparo.map((passo, idx) => (
        <View
          key={idx}
          style={[t.flexRow, t.itemsCenter, t.bgGray100, t.pX4, t.minH14]}
        >
          <Text style={[t.textBase, t.fontNormal, t.flex1, t.textGray900]}>
            {`${idx + 1}. ${passo}`}
          </Text>
        </View>
      ))}

      {/* Botões */}
      <View style={[t.flexRow, t.justifyBetween, t.pX4, t.pY16]}>
        <TouchableOpacity
          style={[
            t.flex1,
            t.bgIndigo700,
            t.roundedLg,
            t.h10,
            t.itemsCenter,
            t.justifyCenter,
            t.mR2,
          ]}
        >
          <Text style={[t.textWhite, t.textSm, t.fontBold]}>
            Salvar Receita
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            t.flex1,
            t.bgGray300,
            t.roundedLg,
            t.h10,
            t.itemsCenter,
            t.justifyCenter,
            t.mL2,
          ]}
        >
          <Text style={[t.textGray900, t.textSm, t.fontBold]}>
            Compartilhar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
