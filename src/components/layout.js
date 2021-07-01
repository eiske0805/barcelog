import * as React from "react"
import { Box } from "@chakra-ui/layout"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    // <Box maxW="62em" mx="auto" py={12} px={4}>
    <Box maxW="62em" mx="auto" py={12}>
      <Header isRootPath={isRootPath} />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}

export default Layout
