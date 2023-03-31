import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

interface CameraButtonProps {
  takePicture: () => void;
}

export const CameraButton: FC<CameraButtonProps> = (props) => {
  const { takePicture } = props;
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignSelf: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={takePicture}
          style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: "#fff",
          }}
        />
      </View>
    </View>
  );
};
