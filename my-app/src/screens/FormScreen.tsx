import React from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation"; // ajuste o caminho conforme seu projeto
import { useNavigation } from "@react-navigation/native";

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
    <ScrollView style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, marginBottom: 10 }}
          />
        )}
      />

      <Text>Gostos:</Text>
      <Controller
        control={control}
        name="gostos"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, marginBottom: 10 }}
          />
        )}
      />

      <Text>Restrições:</Text>
      <Controller
        control={control}
        name="restricoes"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, marginBottom: 10 }}
          />
        )}
      />

      <Text>Tempo disponível (ex: 30 minutos):</Text>
      <Controller
        control={control}
        name="tempo"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, marginBottom: 10 }}
          />
        )}
      />

      <Text>Orçamento:</Text>
      <Controller
        control={control}
        name="orcamento"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, marginBottom: 10 }}
          />
        )}
      />

      <Text>Duração do cardápio (ex: 7 dias):</Text>
      <Controller
        control={control}
        name="duracao"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, marginBottom: 10 }}
          />
        )}
      />

      <Button title="Gerar cardápio" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
