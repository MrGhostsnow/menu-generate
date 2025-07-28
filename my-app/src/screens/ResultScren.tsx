import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { gerarCardapio } from "../services/api";

export default function ResultScreen({ route }: { route: any }) {
  const { preferences } = route.params;
  const [cardapio, setCardapio] = useState("");

  useEffect(() => {
    const fetchCardapio = async () => {
      try {
        const response = await gerarCardapio(preferences);
        setCardapio(response.text);
      } catch (error) {
        setCardapio("Erro ao gerar cardápio");
      }
    };

    fetchCardapio();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>{cardapio}</Text>
    </ScrollView>
  );
}
