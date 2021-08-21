import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const blogpostTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        color: "#373940",
        fontWeight: "light",
        lineHeight: "taller",
        letterSpacing: "widest",
      },
      h1: {
        color: "#373940",
      },
      h2: {
        color: "#373940",
        mt: 28,
      },
      p: {
        my: 8,
      },
      a: {
        color: "#99A6B0",
        transition: ".3s",
        _hover: {
          color: "#FFAB93",
        },
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
})

export default blogpostTheme
