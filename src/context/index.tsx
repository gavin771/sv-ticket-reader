import React from "react";

export const ScannedNumbersContext = React.createContext({
  numbers: null,
  isScanned: false,
  updateNumbers: (numbers: object | null) => {},
  updateScannedState: (isScanned: boolean) => {}
});
