import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    background: {
      "100": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
