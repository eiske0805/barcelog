import * as React from "react"
import { Link, graphql } from "gatsby"
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  HStack,
  VStack,
} from "@chakra-ui/react"

import blogpostTheme from "../theme/blogpostTheme"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageNavi from "../components/pageNavi"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <ChakraProvider theme={blogpostTheme}>
      <Layout location={location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Box as="article" p={4}>
          <Heading as="h1" mt={12} mb={2}>
            {post.frontmatter.title}
          </Heading>
          <Flex>
            <Spacer />
            <Text as="time" fontSize="xs">
              {post.frontmatter.date}
            </Text>
          </Flex>
          <Box mt={4} dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
        <hr />
        <PageNavi previous={previous} next={next} />
        {/* <Flex as="nav" p={4}>
          <Box>
            {previous && (
              <HStack
                as={Link}
                to={previous.fields.slug}
                rel="prev"
                transition=".3s"
                _hover={{
                  color: "red",
                  fill: "red",
                }}
                _focus={{ boxShadow: "none" }}
              >
                <Box
                  as="svg"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 256 512"
                >
                  <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
                </Box>
                <VStack>
                  <Box fontSize="xs">（前のページ）</Box>
                  <Box>{previous.frontmatter.title}</Box>
                </VStack>
              </HStack>
            )}
          </Box>
          <Spacer />
          <Box>
            {next && (
              <HStack
                as={Link}
                to={next.fields.slug}
                rel="next"
                transition=".3s"
                _hover={{
                  color: "red",
                  fill: "red",
                }}
                _focus={{ boxShadow: "none" }}
              >
                <VStack>
                  <Box fontSize="xs">（次のページ）</Box>
                  <Box>{next.frontmatter.title}</Box>
                </VStack>
                <Box
                  as="svg"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 256 512"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                </Box>
              </HStack>
            )}
          </Box>
        </Flex> */}
        <Bio />
      </Layout>
    </ChakraProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY - MM - DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
