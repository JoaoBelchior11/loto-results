import { Camera } from "expo-camera";
import React, { useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { CameraButton } from "../components/CameraButton";
import { CameraPreview } from "../components/CameraPreview";

export const LotoScreen = ({ route, navigation }: any) => {
  const { id } = route.params;

  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  let cameraRef = useRef<Camera>(null);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("O acesso à camera foi negado!");
    }
  };

  const __takePicture = async () => {
    if (!cameraRef) return;
    const photo = await cameraRef?.current?.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  return (
    <>
      {previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} />
      ) : startCamera ? (
        <Camera style={{ flex: 1, width: "100%" }} ref={cameraRef}>
          <CameraButton takePicture={__takePicture} />
        </Camera>
      ) : (
        <View style={styles.container}>
          <Text>Resultados do {id}</Text>
          <View>
            <Button title="Tirar uma foto" onPress={__startCamera} />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
