// theme.js
import { extendTheme, DeepPartial, Colors  } from "@chakra-ui/react";

const colors: DeepPartial<Colors> = {
    primary: {
      100: "#d1d5db", // Lightest shade
      200: "#a4acb8",
      300: "#778095",
      400: "#4a566f",
      500: "#434E61", // Main color
      600: "#383f4e",
      700: "#2e323b",
      800: "#242529",
      900: "#1a1917",
    },
    secondary: {
      100: "#FFE4CC", // Lightest shade
      200: "#FFC999",
      300: "#FFAD66",
      400: "#FF9233",
      500: "#FF8C1E", // Main color
      600: "#E67F1B",
      700: "#CC7217",
      800: "#B36614",
      900: "#994911",
    },
    background: {
      default: "#434E61",
      paper: "#ffffff",
    },
    text: {
      main: "#434E61",
      secondary: "#262626",
      additional: "#B3B3B3",
    },
  }


const theme = extendTheme({
    colors
});

export default theme;
