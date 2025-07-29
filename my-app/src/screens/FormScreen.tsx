import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { tailwind } from "react-native-tailwindcss";

type FormScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FormScreen"
>;

export default function FormScreen() {
  const navigation = useNavigation<FormScreenNavigationProp>();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    navigation.navigate("ResultScreen", { preferences: data });
  };

  return (
    <ScrollView
      style={[tailwind.flex1, tailwind.bgGray100, tailwind.pX4, tailwind.pY3]}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Header */}
      {/* <View
        style={[
          tailwind.flexRow,
          tailwind.itemsCenter,
          tailwind.justifyBetween,
          tailwind.pB2,
        ]}
      >
        <Text
          style={[
            tailwind.textLg,
            tailwind.fontBold,
            { color: "#101019" },
            tailwind.textCenter,
            tailwind.flex1,
            { paddingRight: 48 }, // pr-12 is 3rem = 48px
          ]}
        >
          Novo Cardápio
        </Text>
      </View> */}

      {/* Nome */}
      <View style={tailwind.mB4}>
        <Text
          style={[
            tailwind.textBase,
            tailwind.fontMedium,
            { color: "#101019" },
            tailwind.pB2,
          ]}
        >
          Nome
        </Text>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Nome do Cardápio"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#57578e"
              style={[
                tailwind.h14,
                { backgroundColor: "#e9e9f1", borderRadius: 20 },
                tailwind.pX4,
                tailwind.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>

      {/* Gostos */}
      <View style={tailwind.mB4}>
        <Text
          style={[
            tailwind.textBase,
            tailwind.fontMedium,
            { color: "#101019" },
            tailwind.pB2,
          ]}
        >
          Gostos Alimentares
        </Text>
        <Controller
          control={control}
          name="gostos"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Ex: Italiana, Mexicana"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#57578e"
              style={[
                tailwind.h14,
                { backgroundColor: "#e9e9f1", borderRadius: 20 },
                tailwind.pX4,
                tailwind.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>

      {/* Chips simulados */}
      {/* <View
        style={[tailwind.flexRow, tailwind.flexWrap, tailwind.mB4, { gap: 8 }]}
      >
        {[
          "Italiana",
          "Mexicana",
          "Vegetariana",
          "Japonesa",
          "Mediterrânea",
        ].map((item) => (
          <View
            key={item}
            style={[
              {
                backgroundColor: "#e9e9f1",
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 4,
                marginRight: 8,
                marginBottom: 8,
              },
            ]}
          >
            <Text
              style={[
                tailwind.textSm,
                tailwind.fontMedium,
                { color: "#101019" },
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View> */}

      {/* Restrições */}
      <View style={tailwind.mB4}>
        <Text
          style={[
            tailwind.textBase,
            tailwind.fontMedium,
            { color: "#101019" },
            tailwind.pB2,
          ]}
        >
          Restrições Alimentares
        </Text>
        <Controller
          control={control}
          name="restricoes"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Ex: Sem Glúten, Sem Lactose"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#57578e"
              style={[
                tailwind.h14,
                { backgroundColor: "#e9e9f1", borderRadius: 20 },
                tailwind.pX4,
                tailwind.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>

      {/* <View
        style={[tailwind.flexRow, tailwind.flexWrap, tailwind.mB4, { gap: 8 }]}
      >
        {[
          "Sem Glúten",
          "Sem Lactose",
          "Vegano",
          "Sem Nozes",
          "Sem Frutos do Mar",
        ].map((item) => (
          <View
            key={item}
            style={[
              {
                backgroundColor: "#e9e9f1",
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 4,
                marginRight: 8,
                marginBottom: 8,
              },
            ]}
          >
            <Text
              style={[
                tailwind.textSm,
                tailwind.fontMedium,
                { color: "#101019" },
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View> */}

      {/* Tempo disponível */}
      <View style={tailwind.mB4}>
        <Text
          style={[
            tailwind.textBase,
            tailwind.fontMedium,
            { color: "#101019" },
            tailwind.pB2,
          ]}
        >
          Tempo Disponível para Cozinhar
        </Text>
        <Controller
          control={control}
          name="tempo"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Ex: 30 minutos"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#57578e"
              style={[
                tailwind.h14,
                { backgroundColor: "#e9e9f1", borderRadius: 20 },
                tailwind.pX4,
                tailwind.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>

      {/* Orçamento */}
      <View style={tailwind.mB4}>
        <Text
          style={[
            tailwind.textBase,
            tailwind.fontMedium,
            { color: "#101019" },
            tailwind.pB2,
          ]}
        >
          Orçamento
        </Text>
        <Controller
          control={control}
          name="orcamento"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Ex: 50 reais por semana"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#57578e"
              style={[
                tailwind.h14,
                { backgroundColor: "#e9e9f1", borderRadius: 20 },
                tailwind.pX4,
                tailwind.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>

      {/* Duração */}
      <View style={tailwind.mB6}>
        <Text
          style={[
            tailwind.textBase,
            tailwind.fontMedium,
            { color: "#101019" },
            tailwind.pB2,
          ]}
        >
          Duração (dias)
        </Text>
        <Controller
          control={control}
          name="duracao"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Número de dias"
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#57578e"
              keyboardType="numeric"
              style={[
                tailwind.h14,
                { backgroundColor: "#e9e9f1", borderRadius: 20 },
                tailwind.pX4,
                tailwind.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={[
          { backgroundColor: "#adadea" },
          tailwind.h12,
          tailwind.roundedLg,
          tailwind.itemsCenter,
          tailwind.justifyCenter,
        ]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text
          style={[{ color: "#101019" }, tailwind.fontBold, tailwind.textBase]}
        >
          Gerar Cardápio
        </Text>
      </TouchableOpacity>

      <View style={tailwind.h5} />
    </ScrollView>
  );
}
