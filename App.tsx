import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { Button } from "react-native-elements";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

export default function App() {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  let cameraRef = null;
  const DESIRED_RATIO = "16:9";

  useEffect(() => {
    console.log(hasCameraPermission);
    (async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(true);
    })();
  });

  const takePicture = () => {
    console.log("take picture");
  };

  const prepareRatio = async () => {
    if (Platform.OS === "android" && this.cameraRef) {
      const ratios = await this.cam.getSupportedRatiosAsync();

      // See if the current device has your desired ratio, otherwise get the maximum supported one
      // Usually the last element of "ratios" is the maximum supported ratio
      const ratio =
        ratios.find(ratio => ratio === DESIRED_RATIO) ||
        ratios[ratios.length - 1];

      this.setState({ ratio });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lotto Winner</Text>
      {hasCameraPermission && (
        <Camera
          ref={this.cameraRef}
          style={styles.camera}
          type={Camera.Constants.Type.back}
          onCameraReady={prepareRatio}
        ></Camera>
      )}
      {!hasCameraPermission && <Text>Access to camera has been denied.</Text>}
      <Text style={styles.text}>Find out if you won in 1 easy step...</Text>
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Scan My Ticket"
        raised
        onPress={() => takePicture()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    margin: 10
  },
  camera: {
    width: 350,
    height: 350
  },
  text: {
    marginTop: 10
  },
  header: {
    marginBottom: 10,
    fontSize: 20
  }
});
