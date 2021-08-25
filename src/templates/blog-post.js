import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react"

import blogpostTheme from "../theme/blogpostTheme"
import SnsNavi from "../components/snsNavi"
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
          excerpt={post.excerpt || post.frontmatter.description}
          image={getImage(post.frontmatter.image)}
        />
        <SnsNavi />
        <Box as="article" p={4}>
          <Heading as="h1" mt={12} mb={2} fontSize={{ base: "lg", sm: "xl" }}>
            {post.frontmatter.title}
          </Heading>
          <Flex>
            <Spacer />
            <Text as="time" fontSize="xs">
              {post.frontmatter.date}
            </Text>
          </Flex>
          <Box
            mt={4}
            fontSize={{ base: "0.92rem", md: "md" }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Box>
        <PageNavi previous={previous} next={next} />
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
        image {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
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
