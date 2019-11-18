import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScannedNumbersContext } from "../context";
import { Content, Item, Input } from "native-base";

export default function EnterNumbers() {
  const [scannedNumbers, setNumbers] = useState(null);
  const [loaded, setLoad] = useState(true);
  const scannedNumbersContext = useContext(ScannedNumbersContext);

  useEffect(() => {
    if (scannedNumbersContext.numbers) {
      setNumbers(scannedNumbersContext.numbers.map(num => num));
    }
  }, [loaded]);

  const onChanged = (text, numIdx) => {
    let newNumbers = scannedNumbers;
    newNumbers[numIdx] = text;
    setNumbers(newNumbers);
  };

  return (
    <View>
      {scannedNumbers ? (
        <Content contentContainerStyle={styles.form}>
          {scannedNumbers.map((num, numIdx) => {
            return (
              <Item key={numIdx} style={styles.inputField}>
                <Input
                  value={scannedNumbers[numIdx]}
                  style={{ textAlign: "center" }}
                  onChangeText={text => onChanged(text, numIdx)}
                  keyboardType={"number-pad"}
                />
              </Item>
            );
          })}
        </Content>
      ) : (
        <Text>Enter your ticket numbers below</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    width: 50,
    margin: 20,
    fontSize: 21
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
