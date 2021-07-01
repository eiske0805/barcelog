import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    black: "#373940",
    gray: "#6c757d",
    red: "#FFAB93",
  },
  fonts: {
    heading: "Kiwi Maru, sans-serif",
    body: "Kiwi Maru, sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "#373940",
        fontWeight: "light",
      },
      a: {
        transition: ".2s",
        _hover: {
          color: "#fc6e78",
        },
      },
      svg: {
        transition: ".2s",
        _hover: {
          fill: "#fc6e78",
        },
      },
    },
  },
})

export default theme
