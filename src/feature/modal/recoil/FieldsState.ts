import { atom } from "recoil";
import interestsState from "../types/interestsState";


const fields = atom<interestsState>({
  key: "fields",
  default: {
    name: "",
    region: {
      lang: "",
      country: "",
    },
    interests: [],
  },
});

export default fields;
