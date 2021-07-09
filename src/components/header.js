import * as React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Box, Heading, Link } from "@chakra-ui/react"
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

  const tag = isRootPath ? "h1" : "h3"

  return (
    <Box as="header" px={4}>
      <Link
        as={GatsbyLink}
        to="/"
        color="black"
        transition=".3s"
        _hover={{
          color: "red",
        }}
        _focus={{ boxShadow: "none" }}
      >
        <Heading as={tag} fontFamily="Kirang Haerang">
          {title}
        </Heading>
      </Link>
    </Box>
  )
}

export default Header
