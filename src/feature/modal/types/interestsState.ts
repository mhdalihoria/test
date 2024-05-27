import interests from "./interests";

type interestsState = {
  name: string;
  region: {
    lang: string;
    country: string;
  };
  interests: interests[];
};

export default interestsState