import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ScannedNumbersContext } from "../context";

export default function EnterNumbers() {
  const scannedNumbersContext = useContext(ScannedNumbersContext);
  console.log(scannedNumbersContext.numbers);

  return (
    <View>
      <Text> EnterNumbers </Text>
      {scannedNumbersContext.isScanned === true ? <Text>We got numbers</Text> : null}
    </View>
  );
}
