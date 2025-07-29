import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { gerarCardapio } from "../services/api";
import CardMenu from "../components/cardMenu";

export default function ResultScreen({ route }: { route: any }) {
  const preferences = route?.params?.preferences;
  const [cardapio, setCardapio] = useState("");

  useEffect(() => {
    const fetchCardapio = async () => {
      try {
        if (preferences) {
          const response = await gerarCardapio(preferences);
          setCardapio(response.text);
        } else {
          setCardapio("Preferências não fornecidas.");
        }
      } catch (error) {
        setCardapio("Erro ao gerar cardápio");
      }
    };

    fetchCardapio();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <CardMenu />
    </ScrollView>
  );
}
