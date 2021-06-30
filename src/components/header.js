import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"
import "@fontsource/kirang-haerang"

const Header = ({ isRootPath }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  const tag = isRootPath ? "h1" : "h2"

  return (
    <Box as="header">
      <Heading as={tag} fontFamily="Kirang Haerang">
        <Link to="/">{title}</Link>
      </Heading>
    </Box>
  )
}

export default Header
