import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { List, ListItem, Box, Flex, Heading, Text } from "@chakra-ui/react"

const BlogItems = ({ posts }) => {
  return (
    <List my={16} ml={0}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <ListItem
            key={post.fields.slug}
            mt={20}
            p={4}
            borderRadius="6px"
            transition=".3s"
            _hover={{
              boxShadow: "2xl",
              transform: "translateY(-3px)",
            }}
          >
            <Link to={post.fields.slug}>
              <Heading
                as="h2"
                fontWeight="light"
                fontSize={{ base: "20px", md: "24px" }}
                mb={2}
              >
                {title}
              </Heading>
              <Text as="time" fontSize="xs">
                {post.frontmatter.date}
              </Text>
              <Flex mt={2}>
                <Box
                  flexBasis={{ base: "80px", sm: "120px" }}
                  flexShrink="0"
                  mr={4}
                >
                  {post.frontmatter.image ? (
                    <GatsbyImage
                      image={getImage(post.frontmatter.image)}
                      style={{ borderRadius: "5px" }}
                      alt={title}
                    />
                  ) : (
                    <StaticImage
                      style={{ borderRadius: "5px" }}
                      src="../images/barcelog-icon.png"
                      alt={title}
                    />
                  )}
                </Box>
                <Flex direction="column">
                  <Text
                    fontSize={{ base: "14px", sm: "16px" }}
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />
                  <Text
                    mt={{ base: 0, sm: 2, md: 4 }}
                    textAlign={{ base: "right", md: "left" }}
                    color="gray"
                  >
                    続きを読む
                  </Text>
                </Flex>
              </Flex>
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}

export default BlogItems
