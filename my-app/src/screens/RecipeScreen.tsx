import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { gerarReceita } from "../services/api";
import { t } from "react-native-tailwindcss";
import Markdown from "react-native-markdown-display";

export default function RecipeScreen({ route }: { route: any }) {
  const { refeicao } = route.params;
  const action = route?.params?.action;
  const [receita, setReceita] = useState<string>();

  useEffect(() => {
    async function fetchCRecita() {
      try {
        if (!refeicao) {
          setReceita("");
          return;
        }

        const response = await gerarReceita(refeicao, action);
        const texto = response.receita_text;
        console.log("texto", texto);
        setReceita(texto);
      } catch (error) {
        console.error("Erro ao buscar cardápio:", error);
        setReceita("Erro ao carregar receita.");
      }
    }

    fetchCRecita();
  }, [refeicao]);

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

  const markdownStyles = {
    body: { color: "#333", fontSize: 16, lineHeight: 24 },
    heading1: {
      fontSize: 26,
      fontWeight: "700" as const,
      marginBottom: 10,
      color: "#2a2a2a",
      textAlign: "center",
    },
    heading2: {
      fontSize: 22,
      fontWeight: "700" as const,
      marginBottom: 8,
      color: "#3a3a3a",
    },
    heading3: {
      fontSize: 18,
      fontWeight: "700" as const,
      marginBottom: 6,
      color: "#444",
    },
    list_item: { fontSize: 16, marginBottom: 4, paddingLeft: 8 },
    bullet_list: { marginBottom: 6 },
    code_block: {
      backgroundColor: "#f4f4f4",
      padding: 10,
      borderRadius: 6,
      fontFamily: "monospace",
      marginBottom: 10,
    },
    blockquote: {
      backgroundColor: "#eef3f7",
      padding: 10,
      borderLeftWidth: 4,
      borderLeftColor: "#1a73e8",
      marginBottom: 10,
    },
    hr: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginVertical: 10 },
  };

  return (
    <ScrollView style={[t.flex1, t.bgGray100]}>
      {/* Header */}
      <View style={{ padding: 20 }}>
        <Markdown style={markdownStyles}>{receita}</Markdown>
      </View>

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
