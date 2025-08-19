import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { t } from "react-native-tailwindcss";
import DateTimePicker from "@react-native-community/datetimepicker";

type FormScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FormScreen"
>;

export default function FormScreen() {
  const navigation = useNavigation<FormScreenNavigationProp>();
  const { control, handleSubmit, setValue, watch } = useForm();
  const dataInicio = watch("dataInicio");
  const dataFim = watch("dataFim");
  const [showInicio, setShowInicio] = useState(false);
  const [showFim, setShowFim] = useState(false);

  const onSubmit = (data: any) => {
    navigation.navigate("Menu", {
      action: "generateMenu",
      preferences: data,
    });
  };

  return (
    <ScrollView
      style={[t.flex1, t.bgGray100, t.pX4, t.pY3]}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Nome */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
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
                t.h16,
                { backgroundColor: "#e9e9f1", borderRadius: 8 },
                t.pX4,
                t.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>
      {/* Gostos */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
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
                t.h16,
                { backgroundColor: "#e9e9f1", borderRadius: 8 },
                t.pX4,
                t.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>
      {/* Restrições */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
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
                t.h16,
                { backgroundColor: "#e9e9f1", borderRadius: 8 },
                t.pX4,
                t.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>
      {/* Tempo disponível */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
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
                t.h16,
                { backgroundColor: "#e9e9f1", borderRadius: 8 },
                t.pX4,
                t.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>
      {/* Orçamento */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
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
                t.h16,
                { backgroundColor: "#e9e9f1", borderRadius: 8 },
                t.pX4,
                t.textBase,
                { color: "#101019" },
              ]}
            />
          )}
        />
      </View>
      {/* Data de Início */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
          Data de Início
        </Text>
        <TouchableOpacity
          onPress={() => setShowInicio((prevState) => !prevState)}
          style={[
            t.h16,
            { backgroundColor: "#e9e9f1", borderRadius: 8 },
            t.pX4,
            t.justifyCenter,
          ]}
        >
          <Text>{dataInicio?.toDateString()}</Text>
        </TouchableOpacity>
        {showInicio && (
          <DateTimePicker
            value={dataInicio || new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={(_, date) => {
              setShowInicio(false);
              if (date) setValue("dataInicio", date);
            }}
          />
        )}
      </View>
      {/* Data de Fim */}
      <View style={t.mB4}>
        <Text style={[t.textBase, t.fontMedium, { color: "#101019" }, t.pB2]}>
          Data de Fim
        </Text>
        <TouchableOpacity
          onPress={() => setShowFim((prevState) => !prevState)}
          style={[
            t.h16,
            { backgroundColor: "#e9e9f1", borderRadius: 8 },
            t.pX4,
            t.justifyCenter,
          ]}
        >
          <Text>{dataFim?.toDateString()}</Text>
        </TouchableOpacity>
        {showFim && (
          <DateTimePicker
            value={dataFim || new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={(_, date) => {
              setShowFim(false);
              if (date) setValue("dataFim", date);
            }}
          />
        )}
      </View>
      {/* Botão */}
      <TouchableOpacity
        style={[
          { backgroundColor: "#adadea" },
          t.h12,
          t.roundedLg,
          t.itemsCenter,
          t.justifyCenter,
        ]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={[{ color: "#101019" }, t.fontBold, t.textBase]}>
          Gerar Cardápio
        </Text>
      </TouchableOpacity>
      <View style={t.h5} />
    </ScrollView>
  );
}
