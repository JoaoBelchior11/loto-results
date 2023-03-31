import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LotoItem } from "../components/LotoItem";

export const Main = ({ navigation }: any) => {
  const lotos = [
    { name: "Euromilhões", id: "euromil" },
    { name: "Totoloto", id: "totol" },
    { name: "Milhão", id: "mil" },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>Por favor seleccione o jogo que quer ver os resultados</Text>
        </View>
        <View>
          <FlatList
            data={lotos}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LotoScreen", { id: item.item.id });
                }}
              >
                <LotoItem name={item.item.name} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
