import { extendTheme } from "@chakra-ui/react"
import theme from "./theme"

const blogpostTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        color: "#373940",
        fontWeight: "light",
      },
      h1: {
        color: "#373940",
      },
      h2: {
        color: "#373940",
        mt: 20,
      },
      p: {
        my: 4,
      },
    },
  },
})

export default blogpostTheme
