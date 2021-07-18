import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Flex, Text, Spacer, HStack } from "@chakra-ui/react"
import "@fontsource/kirang-haerang"

import Logo from "./logo"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  return (
    <Flex as="footer" pt={12} px={4}>
      <Spacer />
      <HStack>
        <Link to="/">
          <Logo width="40px" height="40px" />
        </Link>
        <Text fontFamily="Kirang Haerang">
          copyright {new Date().getFullYear()} {title}
        </Text>
      </HStack>
    </Flex>
  )
}

export default Footer
