import React, { FC } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface CameraPreviewProps {
  photo: any;
}

export const CameraPreview: FC<CameraPreviewProps> = (props) => {
  const { photo } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: photo && photo.uri }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
  },
});
