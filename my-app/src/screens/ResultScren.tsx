import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { gerarCardapio } from "../services/api";
import CardMenu from "../components/cardMenu";
import parseMenu from "../utils/parseMenu";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type ResultScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Result"
>;

interface DiaCardapio {
  dia: string;
  refeicoes: string[];
}

const mockCardapio = [
  {
    dia: "Segunda-feira",
    refeicoes: [
      "Café da manhã: Omelete com queijo e tomate",
      "Almoço: Espaguete de arroz com molho bolonhesa",
      "Jantar: Filé de frango grelhado com legumes",
    ],
  },
  {
    dia: "Terça-feira",
    refeicoes: [
      "Café da manhã: Mingau de aveia sem glúten com frutas",
      "Almoço: Strogonoff de carne com arroz branco",
      "Jantar: Wrap de folhas com atum e legumes",
    ],
  },
  {
    dia: "Quarta-feira",
    refeicoes: [
      "Café da manhã: Pão de queijo caseiro",
      "Almoço: Frango ensopado com legumes e polenta",
      "Jantar: Hambúrguer caseiro com salada",
    ],
  },
  {
    dia: "Quinta-feira",
    refeicoes: [
      "Café da manhã: Tapioca recheada com queijo",
      "Almoço: Macarrão sem glúten ao sugo com almôndegas",
      "Jantar: Omelete de forno com tomate e queijo",
    ],
  },
  {
    dia: "Sexta-feira",
    refeicoes: [
      "Café da manhã: Vitamina de banana com leite",
      "Almoço: Filé de peixe grelhado com arroz integral",
      "Jantar: Chilli sem glúten com carne moída e feijão",
    ],
  },
  {
    dia: "Sábado",
    refeicoes: [
      "Café da manhã: Panquecas de banana sem glúten",
      "Almoço: Lasanha de berinjela com carne moída",
      "Jantar: Sanduíche natural sem pão com frango desfiado",
    ],
  },
  {
    dia: "Domingo",
    refeicoes: [
      "Café da manhã: Ovos mexidos com tomate e cebola",
      "Almoço: Costelinha de porco assada com batatas",
      "Jantar: Salada completa com frango grelhado e legumes",
    ],
  },
];

export default function ResultScreen({ route }: { route: any }) {
  const navigation = useNavigation<ResultScreenNavigationProp>();
  const preferences = route?.params?.preferences;
  const action = route?.params?.action;
  const [cardapio, setCardapio] = useState<DiaCardapio[]>([]);

  useEffect(() => {
    // async function fetchCardapio() {
    //   try {
    //     if (!preferences) {
    //       setCardapio([
    //         { dia: "Erro", refeicoes: ["Preferências não fornecidas."] },
    //       ]);
    //       return;
    //     }

    //     const response = await gerarCardapio(preferences, action);
    //     const textoCru = response?.[0]?.cardapio_text || "";

    //     const diasParseados = parseMenu(textoCru);
    //     console.log("textoCru", textoCru);
    //     console.log("diasParseados", diasParseados);
    //     setCardapio(diasParseados);
    //   } catch (error) {
    //     console.error("Erro ao buscar cardápio:", error);
    //     setCardapio([{ dia: "Erro", refeicoes: ["Erro ao gerar cardápio."] }]);
    //   }
    // }

    //fetchCardapio();
    setCardapio(mockCardapio);
  }, []);

  function handlePressRefeicao(refeicao: string) {
    navigation.navigate("Recipe", {
      action: "generateRecipe",
      refeicao: refeicao,
    });
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      {cardapio.map((dia, index) => (
        <CardMenu
          key={index}
          dia={dia.dia}
          refeicoes={dia.refeicoes}
          onPressRefeicao={handlePressRefeicao}
        />
      ))}
    </ScrollView>
  );
}
