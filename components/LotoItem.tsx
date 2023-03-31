import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface LotoItemProps {
  name: string;
}

export const LotoItem: FC<LotoItemProps> = (props) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
