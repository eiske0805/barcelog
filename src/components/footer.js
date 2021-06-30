import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Text, Spacer } from "@chakra-ui/react"
import "@fontsource/kirang-haerang"

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
    <Flex as="footer">
      <Spacer />
      <Text fontFamily="Kirang Haerang">
        copyright {new Date().getFullYear()} {title}
      </Text>
    </Flex>
  )
}

export default Footer
