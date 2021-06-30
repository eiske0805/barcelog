/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Flex, Text } from "@chakra-ui/react"

import SnsNavi from "./snsNavi"

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
      <Flex mt={12}>
        <Box flexBasis="60px" flexShrink="0" mr={3}>
          <Link to="/">
            <StaticImage
              style={{ borderRadius: "100%" }}
              src="../images/barcelog-icon.png"
              alt="Profile picture"
            />
          </Link>
        </Box>
        <Text>{description}</Text>
      </Flex>
      <SnsNavi />
    </>
  )
}

export default Bio
