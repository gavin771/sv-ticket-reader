import React from "react";

export const ScannedNumbersContext = React.createContext({
  numbers: [],
  updateNumbers: (numbers: object | null) => {}
});
