import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ChakraProvider,
  List,
  ListItem,
  Box,
  Flex,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react"

import theme from "../theme/theme"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  // const image = getImage(data.allMarkdownRemark.nodes.frontmatter.image)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <List my={16} ml={0}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <ListItem key={post.fields.slug} mt={16}>
                <Box as="article">
                  <Heading as="h2" color="gray">
                    {title}
                  </Heading>
                  <Text as="time" fontSize="xs" color="gray" mt={5}>
                    {post.frontmatter.date}
                  </Text>
                  <Flex mt={4}>
                    <Box flexBasis="120px" flexShrink="0" mr={4}>
                      <GatsbyImage
                        image={getImage(post.frontmatter.image)}
                        style={{ borderRadius: "5px" }}
                        alt="abc"
                      />
                    </Box>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                    />
                  </Flex>
                  <Link to={post.fields.slug}>
                    <Button
                      mt={3}
                      fontSize="sm"
                      size="sm"
                      variant="outline"
                      color="gray"
                      _hover={{ color: "red" }}
                      letterSpacing=".2rem"
                    >
                      読む
                    </Button>
                  </Link>
                </Box>
              </ListItem>
            )
          })}
        </List>
      </Layout>
    </ChakraProvider>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 120
                height: 120
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
