import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";

interface CardMenuProps {
  dia: string;
  refeicoes: string[];
  onPressRefeicao: (refeicao: string) => void;
}

export default function CardMenu({
  dia,
  refeicoes,
  onPressRefeicao,
}: CardMenuProps) {
  return (
    <View style={[t.mB5, t.bgWhite, t.p4, t.roundedLg, t.shadowMd]}>
      <Text style={[t.textLg, t.fontBold, t.mB2]}>{dia}</Text>

      {refeicoes.map((refeicao, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => onPressRefeicao(refeicao)}
          style={[t.mB2]}
        >
          <Text style={[t.textBase, t.textBlue500]}>{refeicao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
