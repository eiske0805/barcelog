import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    black: "#373940",
    gray: "#6c757d",
    blue: "#86A5DA",
    lightBlue: "#80B9D7",
    purple: "#E282CA",
    green: "#7FDCB4",
    red: "#FFAB93",
  },
  fonts: {
    body: "Kiwi Maru, sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "#373940",
        fontWeight: "light",
      },
      a: {
        _hover: {
          color: "#fc6e78",
        },
      },
    },
  },
})

export default theme
