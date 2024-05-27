import { atom } from "recoil";

const steps = atom({
  key: "steps",
  default: 1,
});

export default steps;
