/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Text, HStack } from "@chakra-ui/react"

import SnsNavi from "./snsNavi"
import Logo from "./logo"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const description = data.site.siteMetadata.description

  return (
    <>
      <HStack pt={4} px={4}>
        <Box flexBasis="60px" flexShrink="0" mr={3}>
          <Link to="/">
            <Logo width="60px" height="60px" />
          </Link>
        </Box>
        <Text
          fontSize={{ base: "14px", sm: "16px" }}
        >{`${description}コンタクトはSNSのDMでお願いします。`}</Text>
      </HStack>
      <SnsNavi />
    </>
  )
}

export default Bio
