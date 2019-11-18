import {
  FIREBASE_CASHPOT_API,
  FIREBASE_PICK2_API,
  FIREBASE_PICK3_API,
  FIREBASE_PICK4_API,
  FIREBASE_LUCKY5_API,
  FIREBASE_DOLLAZ_API,
  FIREBASE_TOPDRAW_API,
  FIREBASE_LOTTO_API,
  FIREBASE_SUPERLOTTO_API
} from "react-native-dotenv";

export default [
  {
    name: "Cash Pot",
    shortName: "cash-pot",
    image: require("../../assets/cashpot.png"),
    notes: "Draws everyday at 8:30AM, 10:30AM, 1PM, 3PM, 5PM & 8:25PM",
    api: FIREBASE_CASHPOT_API
  },
  {
    name: "Lotto",
    shortName: "lotto",
    image: require("../../assets/lotto.png"),
    notes: "Draws on Wednesday & Saturday at 8:25pm",
    api: FIREBASE_LOTTO_API
  },
  {
    name: "Pick 2",
    shortName: "pick-2",
    image: require("../../assets/pick2.png"),
    notes: "Coming Soon",
    api: FIREBASE_PICK2_API
  },
  {
    name: "Pick 3",
    shortName: "pick-3",
    image: require("../../assets/pick3.png"),
    notes: "Coming Soon",
    api: FIREBASE_PICK3_API
  },
  {
    name: "Pick 4",
    shortName: "pick-4",
    image: require("../../assets/pick4.png"),
    notes: "Coming Soon",
    api: FIREBASE_PICK4_API
  },
  {
    name: "Lucky 5",
    shortName: "lucky-5",
    image: require("../../assets/lucky5.png"),
    notes: "Coming Soon",
    api: FIREBASE_LUCKY5_API
  },
  {
    name: "Dollaz",
    shortName: "dollaz",
    image: require("../../assets/dollaz.png"),
    notes: "Coming Soon",
    api: FIREBASE_DOLLAZ_API
  },
  {
    name: "Top Draw",
    shortName: "top-draw",
    image: require("../../assets/topdraw.png"),
    notes: "Coming Soon",
    api: FIREBASE_TOPDRAW_API
  },

  {
    name: "Super Lotto",
    shortName: "super-lotto",
    image: require("../../assets/slotto.png"),
    notes: "Coming Soon",
    api: FIREBASE_SUPERLOTTO_API
  }
];
