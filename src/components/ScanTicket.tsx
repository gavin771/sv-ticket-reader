import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { Button } from "react-native-elements";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import detectText from "../utils/vision";
import { ScannedNumbersContext } from "../context";

export default function ScanTicket() {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [cameraRatio, setRatio] = useState("4:3");
  const [isLoading, setLoading] = useState(false);
  const DESIRED_RATIO = "4:3";
  const scannedNumbers = useContext(ScannedNumbersContext);

  useEffect(() => {
    (async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(true);
    })();
  });

  const takePicture = async () => {
    if (this.cameraRef) {
      setLoading(true);
      let photo = await this.cameraRef.takePictureAsync({
        base64: true
      });

      const [ticketNumbers] = await Promise.all([detectText(photo.base64)]);

      // console.log(ticketNumbers);
      if (ticketNumbers) {
        scannedNumbers.updateNumbers(ticketNumbers.symbols);
        // scannedNumbers.updateScannedState(true);
      }

      setLoading(false);
    }
  };

  const prepareRatio = async () => {
    if (Platform.OS === "android" && this.cameraRef) {
      const ratios = await this.cameraRef.getSupportedRatiosAsync();

      // See if the current device has your desired ratio, otherwise get the maximum supported one
      // Usually the last element of "ratios" is the maximum supported ratio
      const ratio =
        ratios.find(ratio => ratio === DESIRED_RATIO) ||
        ratios[ratios.length - 1];

      setRatio(ratio);
    }
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission && (
        <Camera
          ref={ref => (this.cameraRef = ref)}
          style={styles.camera}
          type={Camera.Constants.Type.back}
          onCameraReady={prepareRatio}
          ratio={cameraRatio}
          autoFocus={true}
        ></Camera>
      )}
      {!hasCameraPermission && <Text>Access to camera has been denied.</Text>}
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={{ borderColor: "#fec50a", backgroundColor: "#fec50a" }}
        titleStyle={{ color: "#fff" }}
        type="solid"
        title="Scan"
        raised
        loading={isLoading && true}
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
  buttonContainer: {
    margin: 10,
    minWidth: 200
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
